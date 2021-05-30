# AoE2:DE State Delta format

AoE2:DE exposes a gRPC endpoint, which when watching replays is able to provide state delta's

This delta format is stack based, and requires a pre-definition of the state object, ours can be found
in [uncage-patcher/src/model.rs](/src/model.rs)

The format is a sequence of instructions, as they're called internally, which either modify the patcher state, or the
state object itself. the instruction statements have no defined length, and length of arguments can only be resolved by
resolving the patcher state.

Every instruction starts with 1 byte, which defines the action to take, afterwards, several arguments may follow

The follow actions exists of now.

```
- object methods
1 - pop: pop an object from the stack, or, if using an hierachical structure, got to the parent object
2 - assign field: set given field to value
3 - push field: put the object in the given field on top of the stack, or if using an hierachical structure, make given field the current context
4 - push, create and assign field: create a new object for given field, assign it to the field and push it
5 - reset field: remove the object on the given field
- map methods (may sometimes be used for lists)
6 - assign key: set given key to value
7 - push, create and assign key: create a new object for given key, assign it to the key and push it
8 - push key: push the object at the given key
9 - reset key: remove the object at the given key
- list methods (may sometimes be used for maps)
10 - insert: insert a value at the given index
11 - push, create and insert: create a new object and insert it at the given index, and then push it
12 - remove: remove an object from the given index
13 - swap: swap the values of 2 entries
14 - resize: resize a list to given size, in some instances, it's expected child objets are created
```

## 1. Pop

Takes no arguments.

### 2. Assign Field

Name|Type|Description
---|---|---
Field|u8|Which field to assign the value too
Value|Dynamic|Value to assign

### 3. Push Field

Name|Type|Description
---|---|---
Field|u8|Field to push

### 4. Push, Create and Assign Field

Name|Type|Description
---|---|---
Field|u8|Field to assign the new model to
Model Type|u8|Which model to create

### 5. Reset Field

Name|Type|Description
---|---|---
Field|u8|Field to reset

### 6. Assign Key

Name|Type|Description
---|---|---
Field|u8|Field with map or list
Key|i32|Key to which the value should be assigned
Value|Dynamic|Value to assign

### 7. Push Key

Name|Type|Description
---|---|---
Field|u8|Field with map or list
Key|i32|Key with the object to push

### 8. Push, Create and Assign Key

Name|Type|Description
---|---|---
Field|u8|Field with map or list
Model Type|u8|Which model to create
Key|i32|Key to assign to, and push

### 9. Reset Key

Name|Type|Description
---|---|---
Field|u8|Field with map or list
Key|i32|Key to the value to reset

### 10. Insert

Name|Type|Description
---|---|---
Field|u8|Field with list
Index|i32|Index to insert to
Value|Dynamic|Value to insert

### 11. Push, Create And Insert

Name|Type|Description
---|---|---
Field|u8|Field with list
Model Type|u8|Which model to create
Index|i32|Index to insert to, and push

### 12. Remove

Name|Type|Description
---|---|---
Field|u8|Field with list or map
Index|i32|Index to remove

### 13. Swap

Name|Type|Description
---|---|---
Field|u8|Field with list or map
Index A|i32|Index of value to replace B with
Index B|i32|Index of value to replace A with

### 14. Resize

Name|Type|Description
---|---|---
Field|u8|Field with list
New Length|i32|New length of list
