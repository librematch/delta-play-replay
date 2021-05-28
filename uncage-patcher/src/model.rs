use std::collections::BTreeMap;
use uncage_model::*;

#[derive(ModelCollection, Debug)]
pub enum Models {
    Root(Root),
    World(World),
    ColorTable(ColorTable),
    MapTile(MapTile),
    TerrainType(TerrainType),
    Player(Player),
    Relation(Relation),
    VictoryPointEntry(VictoryPointEntry),
    PlayerAttributes(PlayerAttributes),
    Entity(Entity),
    DoppleEntity(DoppleEntity),
    ActionEntity(ActionEntity),
    CombatEntity(CombatEntity),
    MissileEntity(MissileEntity),
    BuildingEntity(BuildingEntity),
    ProductionQueueRecord(ProductionQueueRecord),
    MasterEntity(MasterEntity),
    MasterActionEntity(MasterActionEntity),
    MasterCombatEntity(MasterCombatEntity),
    ArmorWeaponInfo(ArmorWeaponInfo),
    MasterMissileEntity(MasterMissileEntity),
    MasterBuildingEntity(MasterBuildingEntity),
    Action(Action),
    MakeObjectAction(MakeObjectAction),
    MakeTechAction(MakeTechAction),
    GatherAction(GatherAction),
    HuntAction(HuntAction),
    ConvertAction(ConvertAction),
    WonderAction(WonderAction),
    PackAction(PackAction),
    UnpackAction(UnpackAction),
    FarmAction(FarmAction),
    ActiveSprite(ActiveSprite),
    Sprite(Sprite),
    DeltaSprite(DeltaSprite),
    Technology(Technology),
    TechnologyPrerequisite(TechnologyPrerequisite),
    AttributeValue(AttributeValue),
    ResearchState(ResearchState),
    GameOptions(GameOptions),
    PlayerGameOptions(PlayerGameOptions),
    SoundEvent(SoundEvent),
    SoundList(SoundList),
    ParticleInstance(ParticleInstance),
}

#[derive(Model, Debug, Default)]
#[uncage(type = 0)]
pub struct Root {
    #[uncage(index = 0)]
    world: ModelRef<World>,
    #[uncage(index = 1)]
    game_options: ModelRef<GameOptions>,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 1)]
pub struct World {
    #[uncage(index = 0)]
    time: u32,
    #[uncage(index = 1)]
    entities: BTreeMap<i32, Ref>,
    #[uncage(index = 2)]
    players: ModelHashMap<i32, Player>,
    #[uncage(index = 3)]
    technologies: ModelBTreeMap<i32, Technology>,
    #[uncage(index = 4)]
    game_ended: bool,
    #[uncage(index = 5)]
    sprites: ModelVec<Sprite>,
    #[uncage(index = 6)]
    color_tables: ModelVec<ColorTable>,
    #[uncage(index = 7)]
    map_width: i32,
    #[uncage(index = 8)]
    map_height: i32,
    #[uncage(index = 9, autofill)]
    map_tiles: ModelVec<MapTile>,
    #[uncage(index = 10)]
    terrain_types: ModelVec<TerrainType>,
    #[uncage(index = 11)]
    wood_price: f32,
    #[uncage(index = 12)]
    food_price: f32,
    #[uncage(index = 13)]
    stone_price: f32,
    #[uncage(index = 14)]
    game_state: u8,
    #[uncage(index = 15)]
    game_end_condition: u8,
    #[uncage(index = 16)]
    current_player_id: u8,
    #[uncage(index = 17)]
    unified_visible_map: Vec<u32>,
    #[uncage(index = 18)]
    last_damage_zone: i32,
    #[uncage(index = 19)]
    particle_definition_names: Vec<String>,
    #[uncage(index = 20)]
    particle_instances: ModelVec<ParticleInstance>,
    #[uncage(index = 21)]
    relic_hun_bonus: bool,
    #[uncage(index = 22)]
    relic_countdown_going_on: bool,
    #[uncage(index = 23)]
    global_ruin_countdown_clock: f32,
    #[uncage(index = 24)]
    countdown_clock: f32,
    #[uncage(index = 25)]
    countdown_victory: bool,
    #[uncage(index = 26)]
    victory_type: i8,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 2)]
pub struct ColorTable {
    #[uncage(index = 0)]
    real_id: i32,
    #[uncage(index = 1)]
    id: i32,
    #[uncage(index = 2)]
    color_transform_base: i32,
    #[uncage(index = 3)]
    unit_outline_color: i32,
    #[uncage(index = 4)]
    map_color: i32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 3)]
pub struct MapTile {
    #[uncage(index = 0)]
    terrain_type: u8,
    #[uncage(index = 1)]
    shape: u8,
    #[uncage(index = 2)]
    elev_level: u8,
    #[uncage(index = 3)]
    layer_type: i16,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 4)]
pub struct TerrainType {
    #[uncage(index = 0)]
    terrain_class: u16,
    #[uncage(index = 1)]
    string_id: i32,
    #[uncage(index = 2)]
    name: String,
    #[uncage(index = 3)]
    pict_name: String,
    #[uncage(index = 4)]
    resource_id: i32,
    #[uncage(index = 5)]
    terrain_to_draw: i16,
    #[uncage(index = 6)]
    rows: i16,
    #[uncage(index = 7)]
    cols: i16,
    #[uncage(index = 8)]
    draw_level: i32,
    #[uncage(index = 9)]
    draw_class: i32,
    #[uncage(index = 10)]
    overlay_mask_name: String,
    #[uncage(index = 11)]
    map_flat_color: u8,
    #[uncage(index = 12)]
    map_tall_color: u8,
    #[uncage(index = 13)]
    map_short_color: u8,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 5)]
pub struct Player {
    #[uncage(index = 0)]
    id: i8,
    #[uncage(index = 1)]
    name: String,
    #[uncage(index = 2)]
    attributes: ModelRef<PlayerAttributes>,
    #[uncage(index = 3)]
    research_states: ModelBTreeMap<i32, ResearchState>,
    #[uncage(index = 4)]
    master_entities: BTreeMap<i32, Ref>,
    #[uncage(index = 5)]
    civ_id: u32,
    #[uncage(index = 6)]
    color_id_current: i32,
    #[uncage(index = 7)]
    color_id_chosen: i32,
    #[uncage(index = 8)]
    relations: ModelVec<Relation>,
    #[uncage(index = 9)]
    victory_points: i32,
    #[uncage(index = 10)]
    victory_point_map: ModelHashMap<i32, VictoryPointEntry>,
    #[uncage(index = 11)]
    game_status: u8,
    #[uncage(index = 12)]
    resign_pending: bool,
    #[uncage(index = 13)]
    resigned: bool,
    #[uncage(index = 14)]
    dropped: bool,
    #[uncage(index = 15)]
    mutual_explored_mask: u32,
    #[uncage(index = 16)]
    mutual_visible_mask: u32,
    #[uncage(index = 17)]
    ruin_held_time: f32,
    #[uncage(index = 18)]
    artifact_held_time: f32,
    #[uncage(index = 19)]
    farm_queue_count: i32,
    #[uncage(index = 20)]
    fish_trap_queue_count: i32,
    #[uncage(index = 21)]
    auto_farm_queue: bool,
    #[uncage(index = 22)]
    auto_fish_trap_queue: bool,
    #[uncage(index = 23)]
    map_x: i16,
    #[uncage(index = 24)]
    map_y: i16,
    #[uncage(index = 25)]
    more_techs_mode: bool,
    #[uncage(index = 26)]
    default_stance: u8,
    #[uncage(index = 27)]
    culture: u8,
    #[uncage(index = 28)]
    allied_victory: bool,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 6)]
pub struct Relation {
    #[uncage(index = 0)]
    unit_diplomacy: i32,
    #[uncage(index = 1)]
    enum_value: u8,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 7)]
pub struct VictoryPointEntry {
    #[uncage(index = 0)]
    command: u8,
    #[uncage(index = 1)]
    state: u8,
    #[uncage(index = 2)]
    id: u8,
    #[uncage(index = 3)]
    group: i32,
    #[uncage(index = 4)]
    attribute: i32,
    #[uncage(index = 5)]
    attribute_1: i32,
    #[uncage(index = 6)]
    amount: i32,
    #[uncage(index = 7)]
    points: i32,
    #[uncage(index = 8)]
    curr_points: i32,
    #[uncage(index = 9)]
    curr_attribute_amount: f32,
    #[uncage(index = 10)]
    curr_attribute_amount_1: f32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 8)]
pub struct PlayerAttributes {
    #[uncage(index = 0)]
    food: f32,
    #[uncage(index = 1)]
    wood: f32,
    #[uncage(index = 2)]
    stone: f32,
    #[uncage(index = 3)]
    gold: f32,
    #[uncage(index = 4)]
    max_pop: f32,
    #[uncage(index = 5)]
    religion: f32,
    #[uncage(index = 6)]
    current_era: f32,
    #[uncage(index = 7)]
    artifacts: f32,
    #[uncage(index = 8)]
    trade_bonus: f32,
    #[uncage(index = 9)]
    trade_goods: f32,
    #[uncage(index = 10)]
    trade_production: f32,
    #[uncage(index = 11)]
    population: f32,
    #[uncage(index = 12)]
    decay: f32,
    #[uncage(index = 13)]
    discovery: f32,
    #[uncage(index = 14)]
    ruins: f32,
    #[uncage(index = 15)]
    meat: f32,
    #[uncage(index = 16)]
    berries: f32,
    #[uncage(index = 17)]
    fish: f32,
    #[uncage(index = 18)]
    kills: f32,
    #[uncage(index = 19)]
    technology: f32,
    #[uncage(index = 20)]
    exploration: f32,
    #[uncage(index = 21)]
    convert_priest: f32,
    #[uncage(index = 22)]
    convert_building: f32,
    #[uncage(index = 23)]
    building_limit: f32,
    #[uncage(index = 24)]
    food_limit: f32,
    #[uncage(index = 25)]
    unit_limit: f32,
    #[uncage(index = 26)]
    maintanence: f32,
    #[uncage(index = 27)]
    faith: f32,
    #[uncage(index = 28)]
    faith_recharge_rate: f32,
    #[uncage(index = 29)]
    farm_death_rate: f32,
    #[uncage(index = 30)]
    civilian_pop: f32,
    #[uncage(index = 31)]
    all_tech_achieved: f32,
    #[uncage(index = 32)]
    military_pop: f32,
    #[uncage(index = 33)]
    convesions: f32,
    #[uncage(index = 34)]
    wonder: f32,
    #[uncage(index = 35)]
    razings: f32,
    #[uncage(index = 36)]
    kill_ratio: f32,
    #[uncage(index = 37)]
    player_killed: f32,
    #[uncage(index = 38)]
    tribute_inefficincy: f32,
    #[uncage(index = 39)]
    gold_bonus: f32,
    #[uncage(index = 40)]
    towncenter_not_avail: f32,
    #[uncage(index = 41)]
    gold_counter: f32,
    #[uncage(index = 42)]
    writing: f32,
    #[uncage(index = 43)]
    temples: f32,
    #[uncage(index = 44)]
    tribute: f32,
    #[uncage(index = 45)]
    hold_ruins: f32,
    #[uncage(index = 46)]
    hold_artifacts: f32,
    #[uncage(index = 47)]
    ore: f32,
    #[uncage(index = 48)]
    captured_unit: f32,
    #[uncage(index = 49)]
    trade_good_quality: f32,
    #[uncage(index = 50)]
    trade_market_level: f32,
    #[uncage(index = 51)]
    formations: f32,
    #[uncage(index = 52)]
    building_housing_rate: f32,
    #[uncage(index = 53)]
    gather_tax_rate: f32,
    #[uncage(index = 54)]
    gather_accumulator: f32,
    #[uncage(index = 55)]
    salvage_decay_rate: f32,
    #[uncage(index = 56)]
    allow_formations: f32,
    #[uncage(index = 57)]
    can_convert: f32,
    #[uncage(index = 58)]
    hit_points_killed: f32,
    #[uncage(index = 59)]
    player_1_kills: f32,
    #[uncage(index = 60)]
    player_2_kills: f32,
    #[uncage(index = 61)]
    player_3_kills: f32,
    #[uncage(index = 62)]
    player_4_kills: f32,
    #[uncage(index = 63)]
    player_5_kills: f32,
    #[uncage(index = 64)]
    player_6_kills: f32,
    #[uncage(index = 65)]
    player_7_kills: f32,
    #[uncage(index = 66)]
    player_8_kills: f32,
    #[uncage(index = 67)]
    convert_resistance: f32,
    #[uncage(index = 68)]
    trade_vig_rate: f32,
    #[uncage(index = 69)]
    stone_bonus: f32,
    #[uncage(index = 70)]
    queued_pop_count: f32,
    #[uncage(index = 71)]
    training_pop_count: f32,
    #[uncage(index = 72)]
    raider: f32,
    #[uncage(index = 73)]
    boarding_recharge_rate: f32,
    #[uncage(index = 74)]
    starting_villagers: f32,
    #[uncage(index = 75)]
    research_cost_mod: f32,
    #[uncage(index = 76)]
    research_time_mod: f32,
    #[uncage(index = 77)]
    convert_boats: f32,
    #[uncage(index = 78)]
    fish_trap_death_rate: f32,
    #[uncage(index = 79)]
    heal_rate_modifier: f32,
    #[uncage(index = 80)]
    heal_range: f32,
    #[uncage(index = 81)]
    starting_food: f32,
    #[uncage(index = 82)]
    starting_wood: f32,
    #[uncage(index = 83)]
    starting_stone: f32,
    #[uncage(index = 84)]
    starting_gold: f32,
    #[uncage(index = 85)]
    raider_ability: f32,
    #[uncage(index = 86)]
    berseker_heal_timer: f32,
    #[uncage(index = 87)]
    dominant_sheep_control: f32,
    #[uncage(index = 88)]
    build_cost_current_stuff: f32,
    #[uncage(index = 89)]
    tech_cost_summation: f32,
    #[uncage(index = 90)]
    relic_income_cost_summation: f32,
    #[uncage(index = 91)]
    trade_income_cost_summation: f32,
    #[uncage(index = 92)]
    player_1_tribute: f32,
    #[uncage(index = 93)]
    player_2_tribute: f32,
    #[uncage(index = 94)]
    player_3_tribute: f32,
    #[uncage(index = 95)]
    player_4_tribute: f32,
    #[uncage(index = 96)]
    player_5_tribute: f32,
    #[uncage(index = 97)]
    player_6_tribute: f32,
    #[uncage(index = 98)]
    player_7_tribute: f32,
    #[uncage(index = 99)]
    player_8_tribute: f32,
    #[uncage(index = 100)]
    player_1_kill_value: f32,
    #[uncage(index = 101)]
    player_2_kill_value: f32,
    #[uncage(index = 102)]
    player_3_kill_value: f32,
    #[uncage(index = 103)]
    player_4_kill_value: f32,
    #[uncage(index = 104)]
    player_5_kill_value: f32,
    #[uncage(index = 105)]
    player_6_kill_value: f32,
    #[uncage(index = 106)]
    player_7_kill_value: f32,
    #[uncage(index = 107)]
    player_8_kill_value: f32,
    #[uncage(index = 108)]
    player_1_razings: f32,
    #[uncage(index = 109)]
    player_2_razings: f32,
    #[uncage(index = 110)]
    player_3_razings: f32,
    #[uncage(index = 111)]
    player_4_razings: f32,
    #[uncage(index = 112)]
    player_5_razings: f32,
    #[uncage(index = 113)]
    player_6_razings: f32,
    #[uncage(index = 114)]
    player_7_razings: f32,
    #[uncage(index = 115)]
    player_8_razings: f32,
    #[uncage(index = 116)]
    player_1_razing_value: f32,
    #[uncage(index = 117)]
    player_2_razing_value: f32,
    #[uncage(index = 118)]
    player_3_razing_value: f32,
    #[uncage(index = 119)]
    player_4_razing_value: f32,
    #[uncage(index = 120)]
    player_5_razing_value: f32,
    #[uncage(index = 121)]
    player_6_razing_value: f32,
    #[uncage(index = 122)]
    player_7_razing_value: f32,
    #[uncage(index = 123)]
    player_8_razing_value: f32,
    #[uncage(index = 124)]
    castle: f32,
    #[uncage(index = 125)]
    hit_point_razings: f32,
    #[uncage(index = 126)]
    kills_by_player_1: f32,
    #[uncage(index = 127)]
    kills_by_player_2: f32,
    #[uncage(index = 128)]
    kills_by_player_3: f32,
    #[uncage(index = 129)]
    kills_by_player_4: f32,
    #[uncage(index = 130)]
    kills_by_player_5: f32,
    #[uncage(index = 131)]
    kills_by_player_6: f32,
    #[uncage(index = 132)]
    kills_by_player_7: f32,
    #[uncage(index = 133)]
    kills_by_player_8: f32,
    #[uncage(index = 134)]
    razings_by_player_1: f32,
    #[uncage(index = 135)]
    razings_by_player_2: f32,
    #[uncage(index = 136)]
    razings_by_player_3: f32,
    #[uncage(index = 137)]
    razings_by_player_4: f32,
    #[uncage(index = 138)]
    razings_by_player_5: f32,
    #[uncage(index = 139)]
    razings_by_player_6: f32,
    #[uncage(index = 140)]
    razings_by_player_7: f32,
    #[uncage(index = 141)]
    razings_by_player_8: f32,
    #[uncage(index = 142)]
    build_value_killed_by_others: f32,
    #[uncage(index = 143)]
    build_value_razed_by_others: f32,
    #[uncage(index = 144)]
    units_killed_by_others: f32,
    #[uncage(index = 145)]
    buildings_razed_by_others: f32,
    #[uncage(index = 146)]
    tribute_from_player_1: f32,
    #[uncage(index = 147)]
    tribute_from_player_2: f32,
    #[uncage(index = 148)]
    tribute_from_player_3: f32,
    #[uncage(index = 149)]
    tribute_from_player_4: f32,
    #[uncage(index = 150)]
    tribute_from_player_5: f32,
    #[uncage(index = 151)]
    tribute_from_player_6: f32,
    #[uncage(index = 152)]
    tribute_from_player_7: f32,
    #[uncage(index = 153)]
    tribute_from_player_8: f32,
    #[uncage(index = 154)]
    build_value_current_units: f32,
    #[uncage(index = 155)]
    build_value_current_buildings: f32,
    #[uncage(index = 156)]
    food_total: f32,
    #[uncage(index = 157)]
    wood_total: f32,
    #[uncage(index = 158)]
    stone_total: f32,
    #[uncage(index = 159)]
    gold_total: f32,
    #[uncage(index = 160)]
    total_values_of_kills: f32,
    #[uncage(index = 161)]
    total_tribute_received: f32,
    #[uncage(index = 162)]
    total_values_of_razings: f32,
    #[uncage(index = 163)]
    total_castles_built: f32,
    #[uncage(index = 164)]
    total_wonders_built: f32,
    #[uncage(index = 165)]
    tribute_score: f32,
    #[uncage(index = 166)]
    convert_min_adj: f32,
    #[uncage(index = 167)]
    convert_max_adj: f32,
    #[uncage(index = 168)]
    conv_resist_min_adj: f32,
    #[uncage(index = 169)]
    conv_resist_max_adj: f32,
    #[uncage(index = 170)]
    convert_bldg_min: f32,
    #[uncage(index = 171)]
    convert_bldg_max: f32,
    #[uncage(index = 172)]
    convert_bldg_chance: f32,
    #[uncage(index = 173)]
    fix_dave_screw: f32,
    #[uncage(index = 174)]
    build_value_wonders_castles: f32,
    #[uncage(index = 175)]
    food_score: f32,
    #[uncage(index = 176)]
    wood_score: f32,
    #[uncage(index = 177)]
    stone_score: f32,
    #[uncage(index = 178)]
    gold_score: f32,
    #[uncage(index = 179)]
    wood_bonus: f32,
    #[uncage(index = 180)]
    food_bonus: f32,
    #[uncage(index = 181)]
    relic_gold: f32,
    #[uncage(index = 182)]
    heresy: f32,
    #[uncage(index = 183)]
    theocracy: f32,
    #[uncage(index = 184)]
    crennelations: f32,
    #[uncage(index = 185)]
    building_rate_mod: f32,
    #[uncage(index = 186)]
    hun_wonder_bonus: f32,
    #[uncage(index = 187)]
    spies_discount: f32,
    #[uncage(index = 188)]
    temporary_map_reveal: f32,
    #[uncage(index = 189)]
    reveal_initial_type: f32,
    #[uncage(index = 190)]
    elevation_higher_bonus: f32,
    #[uncage(index = 191)]
    elevation_lower_bonus: f32,
    #[uncage(index = 192)]
    trigger_shared_los: f32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 9)]
pub struct Entity {
    #[uncage(index = 0)]
    id: i32,
    #[uncage(index = 1)]
    master_id: i16,
    #[uncage(index = 2)]
    owner_id: i8,
    #[uncage(index = 3)]
    world_x: f32,
    #[uncage(index = 4)]
    world_y: f32,
    #[uncage(index = 5)]
    world_z: f32,
    #[uncage(index = 6)]
    held_attribute_amount: f32,
    #[uncage(index = 7)]
    held_attribute_type: i16,
    #[uncage(index = 8)]
    state: i8,
    #[uncage(index = 9)]
    sleep_flag: bool,
    #[uncage(index = 10)]
    dopple_flag: bool,
    #[uncage(index = 11)]
    r#type: i8,
    #[uncage(index = 12)]
    hp: f32,
    #[uncage(index = 13)]
    is_under_attack: bool,
    #[uncage(index = 14)]
    own_master: Ref,
    #[uncage(index = 15)]
    sprite_id: i16,
    #[uncage(index = 16)]
    facet: u8,
    #[uncage(index = 17)]
    sprite_list: ModelVec<Sprite>,
    #[uncage(index = 18)]
    inside_obj_id: i32,
    #[uncage(index = 19)]
    selected: bool,
    #[uncage(index = 34)]
    group_id: i32,
    #[uncage(index = 41)]
    worker_num: i32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 10)]
pub struct DoppleEntity {
    #[uncage(extends)]
    parent: Entity,
    #[uncage(index = 20)]
    doppled_object_id: i32,
    #[uncage(index = 21)]
    cant_see_bits: u32,
    #[uncage(index = 22)]
    doppled_player_id: i8,
    #[uncage(index = 23)]
    map_drawlevel: u8,
    #[uncage(index = 24)]
    map_color: u8,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 11)]
pub struct ActionEntity {
    #[uncage(extends)]
    parent: Entity,
    #[uncage(index = 20)]
    current_action: Ref,
    #[uncage(index = 35)]
    formation_type: u8,
    #[uncage(index = 36)]
    attack_stance: u8,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 12)]
pub struct CombatEntity {
    #[uncage(extends)]
    parent: ActionEntity,
    #[uncage(index = 21)]
    unified_map_value: i32,
    #[uncage(index = 37)]
    num_builders: u8,
    #[uncage(index = 38)]
    num_healers: u8,
    #[uncage(index = 39)]
    town_bell_active: bool,
    #[uncage(index = 42)]
    current_volley_fire_amount: f32,
    #[uncage(index = 44)]
    charge: f32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 13)]
pub struct MissileEntity {
    #[uncage(extends)]
    parent: CombatEntity,
    #[uncage(index = 22)]
    fired_from_id: i32,
    #[uncage(index = 23)]
    is_primary: bool,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 14)]
pub struct BuildingEntity {
    #[uncage(extends)]
    parent: CombatEntity,
    #[uncage(index = 22)]
    linked_owner_id: i32,
    #[uncage(index = 23)]
    current_production_queue_action: Ref,
    #[uncage(index = 24)]
    gather_point_exists: i32,
    #[uncage(index = 25)]
    gather_point_x: f32,
    #[uncage(index = 26)]
    gather_point_y: f32,
    #[uncage(index = 27)]
    gather_point_z: f32,
    #[uncage(index = 28)]
    gather_point_target_id: i32,
    #[uncage(index = 29)]
    build_pts: f32,
    #[uncage(index = 30)]
    original_owner_id: i8,
    #[uncage(index = 31)]
    built: bool,
    #[uncage(index = 32)]
    relic_count: i32,
    #[uncage(index = 33)]
    production_queue: ModelVec<ProductionQueueRecord>,
    #[uncage(index = 40)]
    gate_locked: bool,
    #[uncage(index = 43)]
    snow_flag: bool,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 15)]
pub struct ProductionQueueRecord {
    #[uncage(index = 0)]
    unit_id: i16,
    #[uncage(index = 1)]
    tech_id: i16,
    #[uncage(index = 2)]
    unit_count: i16,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 16)]
pub struct MasterEntity {
    #[uncage(index = 0)]
    id: i16,
    #[uncage(index = 1)]
    r#type: u8,
    #[uncage(index = 2)]
    string_id: i32,
    #[uncage(index = 3)]
    string_id_2: i32,
    #[uncage(index = 4)]
    object_group: i16,
    #[uncage(index = 5)]
    hp: i16,
    #[uncage(index = 6)]
    obj_capacity: u8,
    #[uncage(index = 7)]
    radius_x: f32,
    #[uncage(index = 8)]
    radius_y: f32,
    #[uncage(index = 9)]
    radius_z: f32,
    #[uncage(index = 10)]
    button_pict: i16,
    #[uncage(index = 11)]
    portrait_pict: i16,
    #[uncage(index = 12)]
    available: bool,
    #[uncage(index = 13)]
    disabled: bool,
    #[uncage(index = 14)]
    construction_radius_x: f32,
    #[uncage(index = 15)]
    construction_radius_y: f32,
    #[uncage(index = 16)]
    fog_flag: u8,
    #[uncage(index = 17)]
    attribute_max_amount: i16,
    #[uncage(index = 18)]
    map_draw_level: u8,
    #[uncage(index = 19)]
    unit_level: u8,
    #[uncage(index = 20)]
    map_color: u8,
    #[uncage(index = 21)]
    occlusion_flag: u8,
    #[uncage(index = 22)]
    object_flags: u32,
    #[uncage(index = 23)]
    resource_group: u8,
    #[uncage(index = 24)]
    outline_radius_x: f32,
    #[uncage(index = 25)]
    outline_radius_y: f32,
    #[uncage(index = 26)]
    outline_radius_z: f32,
    #[uncage(index = 27)]
    attributes_held: ModelVec<AttributeValue>,
    #[uncage(index = 42)]
    created_sound_event: ModelRef<SoundEvent>,
    #[uncage(index = 43)]
    death_sound_event: ModelRef<SoundEvent>,
    #[uncage(index = 44)]
    selected_sound_event: ModelRef<SoundEvent>,
    #[uncage(index = 45)]
    damage_sound_event: ModelRef<SoundEvent>,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 17)]
pub struct MasterActionEntity {
    #[uncage(extends)]
    parent: MasterEntity,
    #[uncage(index = 28)]
    work_rate: f32,
    #[uncage(index = 46)]
    command_sound_event: ModelRef<SoundEvent>,
    #[uncage(index = 47)]
    move_sound_event: ModelRef<SoundEvent>,
    #[uncage(index = 53)]
    speed: f32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 18)]
pub struct MasterCombatEntity {
    #[uncage(extends)]
    parent: MasterActionEntity,
    #[uncage(index = 29)]
    base_armor: i16,
    #[uncage(index = 30)]
    armor: ModelVec<ArmorWeaponInfo>,
    #[uncage(index = 31)]
    weapon: ModelVec<ArmorWeaponInfo>,
    #[uncage(index = 32)]
    weapon_range: f32,
    #[uncage(index = 33)]
    speed_of_attack: f32,
    #[uncage(index = 34)]
    orig_armor: i16,
    #[uncage(index = 35)]
    orig_weapon: i16,
    #[uncage(index = 36)]
    orig_weapon_range: f32,
    #[uncage(index = 37)]
    orig_speed_of_attack: f32,
    #[uncage(index = 38)]
    build_pts_required: i16,
    #[uncage(index = 39)]
    id_of_building_obj: i16,
    #[uncage(index = 40)]
    build_inventory: Vec<Ref>,
    #[uncage(index = 54)]
    area_effect_range: f32,
    #[uncage(index = 55)]
    area_effect_level: u8,
    #[uncage(index = 56)]
    orig_pierce_armor: i16,
    #[uncage(index = 57)]
    minimum_weapon_range: f32,
    #[uncage(index = 58)]
    fire_missile_at_frame: i16,
    #[uncage(index = 59)]
    base_hit_chance: i16,
    #[uncage(index = 60)]
    volley_fire_amount: f32,
    #[uncage(index = 61)]
    max_attacks_in_volley: u8,
    #[uncage(index = 62)]
    max_charge: f32,
    #[uncage(index = 63)]
    recharge_rate: f32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 19)]
pub struct ArmorWeaponInfo {
    #[uncage(index = 0)]
    r#type: i16,
    #[uncage(index = 1)]
    value: i16,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 20)]
pub struct MasterMissileEntity {
    #[uncage(extends)]
    parent: MasterCombatEntity,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 21)]
pub struct MasterBuildingEntity {
    #[uncage(extends)]
    parent: MasterCombatEntity,
    #[uncage(index = 41)]
    on_build_make_tech: i16,
    #[uncage(index = 48)]
    construction_sound_event: ModelRef<SoundEvent>,
    #[uncage(index = 49)]
    open_close_sound_event: ModelRef<SoundEvent>,
    #[uncage(index = 50)]
    gate_open_close_id: i16,
    #[uncage(index = 51)]
    on_build_make_tile: i16,
    #[uncage(index = 52)]
    on_build_make_overlay: i16,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 22)]
pub struct Action {
    #[uncage(index = 0)]
    r#type: i16,
    #[uncage(index = 1)]
    state: u8,
    #[uncage(index = 2)]
    target_id: i32,
    #[uncage(index = 3)]
    target_2_id: i32,
    #[uncage(index = 4)]
    target_x: f32,
    #[uncage(index = 5)]
    target_y: f32,
    #[uncage(index = 6)]
    target_z: f32,
    #[uncage(index = 12)]
    timer: f32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 23)]
pub struct MakeObjectAction {
    #[uncage(extends)]
    parent: Action,
    #[uncage(index = 7)]
    obj_id: i16,
    #[uncage(index = 8)]
    work_done: f32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 24)]
pub struct MakeTechAction {
    #[uncage(extends)]
    parent: Action,
    #[uncage(index = 7)]
    tech_id: i16,
    #[uncage(index = 8)]
    research_progress: f32,
    #[uncage(index = 9)]
    start_time: u32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 25)]
pub struct GatherAction {
    #[uncage(extends)]
    parent: Action,
    #[uncage(index = 7)]
    target_type: i32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 26)]
pub struct HuntAction {
    #[uncage(extends)]
    parent: Action,
    #[uncage(index = 7)]
    target_type: i32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 27)]
pub struct ConvertAction {
    #[uncage(extends)]
    parent: Action,
    #[uncage(index = 7)]
    was_same_owner: bool,
    #[uncage(index = 8)]
    required_range: f32,
    #[uncage(index = 9)]
    total_timer: f32,
    #[uncage(index = 10)]
    task_work_val_1: f32,
    #[uncage(index = 11)]
    task_work_val_2: f32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 40)]
pub struct WonderAction {
    #[uncage(extends)]
    parent: Action,
    #[uncage(index = 7)]
    wonder_time: f32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 41)]
pub struct PackAction {
    #[uncage(extends)]
    parent: Action,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 42)]
pub struct UnpackAction {
    #[uncage(extends)]
    parent: Action,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 43)]
pub struct FarmAction {
    #[uncage(extends)]
    parent: Action,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 28)]
pub struct ActiveSprite {
    #[uncage(index = 0)]
    sprite_id: i16,
    #[uncage(index = 1)]
    offset_x: i32,
    #[uncage(index = 2)]
    offset_y: i32,
    #[uncage(index = 3)]
    frame: i16,
    #[uncage(index = 4)]
    order: u8,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 29)]
pub struct Sprite {
    #[uncage(index = 0)]
    id: i16,
    #[uncage(index = 1)]
    resource_id: i32,
    #[uncage(index = 2)]
    pict_name: String,
    #[uncage(index = 3)]
    frame_num: i16,
    #[uncage(index = 4)]
    facet_num: i16,
    #[uncage(index = 5)]
    color_table: i16,
    #[uncage(index = 6)]
    box_x_1: i16,
    #[uncage(index = 7)]
    box_y_1: i16,
    #[uncage(index = 8)]
    box_x_2: i16,
    #[uncage(index = 9)]
    box_y_2: i16,
    #[uncage(index = 10)]
    draw_list: ModelVec<DeltaSprite>,
    #[uncage(index = 11)]
    draw_level: u8,
    #[uncage(index = 12)]
    main_sound_event: ModelRef<SoundEvent>,
    #[uncage(index = 13)]
    sound_list: ModelVec<SoundList>,
    #[uncage(index = 14)]
    particle_effect_name: String,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 30)]
pub struct DeltaSprite {
    #[uncage(index = 0)]
    sprite_id: i16,
    #[uncage(index = 1)]
    picture_num: i16,
    #[uncage(index = 2)]
    offset_x: i16,
    #[uncage(index = 3)]
    offset_y: i16,
    #[uncage(index = 4)]
    facet: i16,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 31)]
pub struct Technology {
    #[uncage(index = 0)]
    name: String,
    #[uncage(index = 1)]
    build_obj_id: i16,
    #[uncage(index = 2)]
    string_id: i16,
    #[uncage(index = 3)]
    string_id_2: i16,
    #[uncage(index = 4)]
    icon: i16,
    #[uncage(index = 5)]
    time_to_research: i16,
    #[uncage(index = 6)]
    tech_prerequisites: ModelVec<TechnologyPrerequisite>,
    #[uncage(index = 7)]
    tech_prerequisites_to_fill: i16,
    #[uncage(index = 8)]
    civ_prerequisite: i16,
    #[uncage(index = 9)]
    civ_prerequisite_ignore_full_tech_flag: i16,
    #[uncage(index = 10)]
    cost: ModelVec<AttributeValue>,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 32)]
pub struct TechnologyPrerequisite {
    #[uncage(index = 0)]
    value: i16,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 33)]
pub struct AttributeValue {
    #[uncage(index = 0)]
    r#type: i16,
    #[uncage(index = 1)]
    amount: f32,
    #[uncage(index = 2)]
    flag: u8,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 34)]
pub struct ResearchState {
    #[uncage(index = 0)]
    research_done: f32,
    #[uncage(index = 1)]
    state: i16,
    #[uncage(index = 2)]
    research_adjustment: i16,
    #[uncage(index = 3)]
    build_obj_id: i16,
    #[uncage(index = 4)]
    times_researched: i16,
    #[uncage(index = 5)]
    allow_multiple_research: bool,
    #[uncage(index = 6)]
    cost_adjustment_0: i16,
    #[uncage(index = 7)]
    cost_adjustment_1: i16,
    #[uncage(index = 8)]
    cost_adjustment_2: i16,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 35)]
pub struct GameOptions {
    #[uncage(index = 0)]
    is_ranked: bool,
    #[uncage(index = 1)]
    other_players: i32,
    #[uncage(index = 2)]
    allow_spectators: bool,
    #[uncage(index = 3)]
    hide_civ_names: bool,
    #[uncage(index = 4)]
    game_id: String,
    #[uncage(index = 5)]
    is_automatch: bool,
    #[uncage(index = 6)]
    spectator_delay: i32,
    #[uncage(index = 7)]
    map_style_type: i8,
    #[uncage(index = 8)]
    difficulty_id: i8,
    #[uncage(index = 9)]
    map_size: i8,
    #[uncage(index = 10)]
    resolved_map_type: i16,
    #[uncage(index = 11)]
    chosen_map_type: i16,
    #[uncage(index = 12)]
    visibility: u8,
    #[uncage(index = 46)]
    victory_type: u8,
    #[uncage(index = 47)]
    victory_amount: i32,
    #[uncage(index = 13)]
    resource_level: u8,
    #[uncage(index = 14)]
    starting_age: u8,
    #[uncage(index = 15)]
    ending_age: u8,
    #[uncage(index = 16)]
    game_mode: u8,
    #[uncage(index = 17)]
    player_info: ModelVec<PlayerGameOptions>,
    #[uncage(index = 18)]
    treaty_length: i32,
    #[uncage(index = 19)]
    battle_royale_length_minutes: i32,
    #[uncage(index = 20)]
    population_limit: i32,
    #[uncage(index = 21)]
    trading_enabled: bool,
    #[uncage(index = 22)]
    team_bonuses_disabled: bool,
    #[uncage(index = 23)]
    randomize_positions: bool,
    #[uncage(index = 24)]
    full_tech_tree: bool,
    #[uncage(index = 25)]
    teams_locked: bool,
    #[uncage(index = 26)]
    speed_locked: bool,
    #[uncage(index = 27)]
    collide_and_correcting: bool,
    #[uncage(index = 28)]
    villager_force_drop: bool,
    #[uncage(index = 29)]
    multiplayer_enabled: bool,
    #[uncage(index = 30)]
    record_game_enabled: bool,
    #[uncage(index = 31)]
    animals_enabled: bool,
    #[uncage(index = 32)]
    predators_enabled: bool,
    #[uncage(index = 33)]
    cheats_enabled: bool,
    #[uncage(index = 34)]
    turbo_enabled: bool,
    #[uncage(index = 35)]
    shared_exploration: bool,
    #[uncage(index = 36)]
    team_positions: bool,
    #[uncage(index = 37)]
    version: f32,
    #[uncage(index = 38)]
    fog_of_war_enabled: bool,
    #[uncage(index = 39)]
    cheat_notifications_enabled: bool,
    #[uncage(index = 40)]
    modded_dataset_title: String,
    #[uncage(index = 41)]
    modded_dataset_workshop_id: u64,
    #[uncage(index = 42)]
    modded_dataset_crc: u32,
    #[uncage(index = 43)]
    dataset_is_official: bool,
    #[uncage(index = 44)]
    custom_random_map_file: String,
    #[uncage(index = 45)]
    custom_random_map_scenario_file: String,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 36)]
pub struct PlayerGameOptions {
    #[uncage(index = 0)]
    chosen_team_id: u8,
    #[uncage(index = 1)]
    resolved_team_id: u8,
    #[uncage(index = 2)]
    human_player_name: String,
    #[uncage(index = 3)]
    multi_player_game_version: u8,
    #[uncage(index = 4)]
    steam_id: u64,
    #[uncage(index = 5)]
    ai_script_base_name: String,
    #[uncage(index = 6)]
    ai_civ_name_index: u8,
    #[uncage(index = 7)]
    ai_player_name: String,
    #[uncage(index = 8)]
    is_custom_ai: bool,
    #[uncage(index = 9)]
    player_dm_elo: i32,
    #[uncage(index = 10)]
    player_rm_elo: i32,
    #[uncage(index = 11)]
    player_platform: i8,
    #[uncage(index = 12)]
    scenario_player_index: i8,
    #[uncage(index = 13)]
    world_player_index_including_gaia: i8,
    #[uncage(index = 14)]
    humanity: u8,
    #[uncage(index = 15)]
    civilization_choice_mode_id: i8,
    #[uncage(index = 16)]
    civilization_choice_specific_id: i16,
    #[uncage(index = 17)]
    dat_file_crc: u32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 37)]
pub struct SoundEvent {
    #[uncage(index = 0)]
    event_id: u32,
    #[uncage(index = 1)]
    flags: u8,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 38)]
pub struct SoundList {
    #[uncage(index = 0)]
    frame_0: i16,
    #[uncage(index = 1)]
    frame_1: i16,
    #[uncage(index = 2)]
    frame_2: i16,
    #[uncage(index = 3)]
    event_0: ModelRef<SoundEvent>,
    #[uncage(index = 4)]
    event_1: ModelRef<SoundEvent>,
    #[uncage(index = 5)]
    event_2: ModelRef<SoundEvent>,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 39)]
pub struct ParticleInstance {
    #[uncage(index = 0)]
    object_id: i32,
    #[uncage(index = 1)]
    sprite_id: i16,
    #[uncage(index = 2)]
    is_2d: bool,
    #[uncage(index = 3)]
    active: bool,
    #[uncage(index = 4)]
    enabled: bool,
    #[uncage(index = 5)]
    definition_id: i32,
    #[uncage(index = 6)]
    position_x: f32,
    #[uncage(index = 7)]
    position_y: f32,
    #[uncage(index = 8)]
    position_z: f32,
    #[uncage(index = 9)]
    dir_angle: f32,
    #[uncage(index = 10)]
    dir_index: i32,
    #[uncage(index = 11)]
    random_animation_value: f32,
    #[uncage(index = 12)]
    offset_2d_x: f32,
    #[uncage(index = 13)]
    offset_2d_y: f32,
    #[uncage(index = 14)]
    color_r: f32,
    #[uncage(index = 15)]
    color_g: f32,
    #[uncage(index = 16)]
    color_b: f32,
    #[uncage(index = 17)]
    color_a: f32,
    #[uncage(index = 18)]
    display_in_hidden: bool,
    #[uncage(index = 19)]
    display_in_fog: bool,
    #[uncage(index = 20)]
    pause_in_fog: bool,
    #[uncage(index = 21)]
    dim_in_fog: bool,
    #[uncage(index = 22)]
    is_paused: bool,
    #[uncage(index = 23)]
    sprite_used: bool,
    #[uncage(index = 24)]
    sprite_fade_alpha: f32,
    #[uncage(index = 25)]
    sprite_index: i32,
    #[uncage(index = 26)]
    sprite_texture_id_index: i32,
    #[uncage(index = 27)]
    sprite_position_x: f32,
    #[uncage(index = 28)]
    sprite_position_y: f32,
    #[uncage(index = 29)]
    sprite_position_z: f32,
    #[uncage(index = 30)]
    sprite_age: f32,
    #[uncage(index = 31)]
    sprite_loop_offset: f32,
    #[uncage(index = 32)]
    sprite_animation_type: f32,
    #[uncage(index = 33)]
    sprite_duration: f32,
    #[uncage(index = 34)]
    sprite_scale_start: f32,
    #[uncage(index = 35)]
    sprite_scale_end: f32,
    #[uncage(index = 36)]
    sprite_scale_speed: f32,
    #[uncage(index = 37)]
    sprite_rotation_start: f32,
    #[uncage(index = 38)]
    sprite_rotation_speed: f32,
    #[uncage(index = 39)]
    sprite_color_r: f32,
    #[uncage(index = 40)]
    sprite_color_g: f32,
    #[uncage(index = 41)]
    sprite_color_b: f32,
    #[uncage(index = 42)]
    sprite_alpha_start: f32,
    #[uncage(index = 43)]
    sprite_alpha_end: f32,
}
