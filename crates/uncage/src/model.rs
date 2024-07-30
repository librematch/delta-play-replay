use std::collections::BTreeMap;
use uncage_model::{Model, ModelBTreeMap, ModelCollection, ModelHashMap, ModelRef, ModelVec, Ref};

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
    pub world: ModelRef<World>,
    #[uncage(index = 1)]
    pub game_options: ModelRef<GameOptions>,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 1)]
pub struct World {
    #[uncage(index = 0)]
    pub time: u32,
    #[uncage(index = 1)]
    pub entities: BTreeMap<i32, Ref>,
    #[uncage(index = 2)]
    pub players: ModelHashMap<i32, Player>,
    #[uncage(index = 3)]
    pub technologies: ModelBTreeMap<i32, Technology>,
    #[uncage(index = 4)]
    pub game_ended: bool,
    #[uncage(index = 5)]
    pub sprites: ModelVec<Sprite>,
    #[uncage(index = 6)]
    pub color_tables: ModelVec<ColorTable>,
    #[uncage(index = 7)]
    pub map_width: i32,
    #[uncage(index = 8)]
    pub map_height: i32,
    #[uncage(index = 9, autofill)]
    pub map_tiles: ModelVec<MapTile>,
    #[uncage(index = 10)]
    pub terrain_types: ModelVec<TerrainType>,
    #[uncage(index = 11)]
    pub wood_price: f32,
    #[uncage(index = 12)]
    pub food_price: f32,
    #[uncage(index = 13)]
    pub stone_price: f32,
    #[uncage(index = 14)]
    pub game_state: u8,
    #[uncage(index = 15)]
    pub game_end_condition: u8,
    #[uncage(index = 16)]
    pub current_player_id: u8,
    #[uncage(index = 17)]
    pub unified_visible_map: Vec<u32>,
    #[uncage(index = 18)]
    pub last_damage_zone: i32,
    #[uncage(index = 19)]
    pub particle_definition_names: Vec<String>,
    #[uncage(index = 20)]
    pub particle_instances: ModelVec<ParticleInstance>,
    #[uncage(index = 21)]
    pub relic_hun_bonus: bool,
    #[uncage(index = 22)]
    pub relic_countdown_going_on: bool,
    #[uncage(index = 23)]
    pub global_ruin_countdown_clock: f32,
    #[uncage(index = 24)]
    pub countdown_clock: f32,
    #[uncage(index = 25)]
    pub countdown_victory: bool,
    #[uncage(index = 26)]
    pub victory_type: i8,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 2)]
pub struct ColorTable {
    #[uncage(index = 0)]
    pub real_id: i32,
    #[uncage(index = 1)]
    pub id: i32,
    #[uncage(index = 2)]
    pub color_transform_base: i32,
    #[uncage(index = 3)]
    pub unit_outline_color: i32,
    #[uncage(index = 4)]
    pub map_color: i32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 3)]
pub struct MapTile {
    #[uncage(index = 0)]
    pub terrain_type: u8,
    #[uncage(index = 1)]
    pub shape: u8,
    #[uncage(index = 2)]
    pub elev_level: u8,
    #[uncage(index = 3)]
    pub layer_type: i16,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 4)]
pub struct TerrainType {
    #[uncage(index = 0)]
    pub terrain_class: u16,
    #[uncage(index = 1)]
    pub string_id: i32,
    #[uncage(index = 2)]
    pub name: String,
    #[uncage(index = 3)]
    pub pict_name: String,
    #[uncage(index = 4)]
    pub resource_id: i32,
    #[uncage(index = 5)]
    pub terrain_to_draw: i16,
    #[uncage(index = 6)]
    pub rows: i16,
    #[uncage(index = 7)]
    pub cols: i16,
    #[uncage(index = 8)]
    pub draw_level: i32,
    #[uncage(index = 9)]
    pub draw_class: i32,
    #[uncage(index = 10)]
    pub overlay_mask_name: String,
    #[uncage(index = 11)]
    pub map_flat_color: u8,
    #[uncage(index = 12)]
    pub map_tall_color: u8,
    #[uncage(index = 13)]
    pub map_short_color: u8,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 5)]
pub struct Player {
    #[uncage(index = 0)]
    pub id: i8,
    #[uncage(index = 1)]
    pub name: String,
    #[uncage(index = 2)]
    pub attributes: ModelRef<PlayerAttributes>,
    #[uncage(index = 3)]
    pub research_states: ModelBTreeMap<i32, ResearchState>,
    #[uncage(index = 4)]
    pub master_entities: BTreeMap<i32, Ref>,
    #[uncage(index = 5)]
    pub civ_id: u32,
    #[uncage(index = 6)]
    pub color_id_current: i32,
    #[uncage(index = 7)]
    pub color_id_chosen: i32,
    #[uncage(index = 8)]
    pub relations: ModelVec<Relation>,
    #[uncage(index = 9)]
    pub victory_points: i32,
    #[uncage(index = 10)]
    pub victory_point_map: ModelHashMap<i32, VictoryPointEntry>,
    #[uncage(index = 11)]
    pub game_status: u8,
    #[uncage(index = 12)]
    pub resign_pending: bool,
    #[uncage(index = 13)]
    pub resigned: bool,
    #[uncage(index = 14)]
    pub dropped: bool,
    #[uncage(index = 15)]
    pub mutual_explored_mask: u32,
    #[uncage(index = 16)]
    pub mutual_visible_mask: u32,
    #[uncage(index = 17)]
    pub ruin_held_time: f32,
    #[uncage(index = 18)]
    pub artifact_held_time: f32,
    #[uncage(index = 19)]
    pub farm_queue_count: i32,
    #[uncage(index = 20)]
    pub fish_trap_queue_count: i32,
    #[uncage(index = 21)]
    pub auto_farm_queue: bool,
    #[uncage(index = 22)]
    pub auto_fish_trap_queue: bool,
    #[uncage(index = 23)]
    pub map_x: i16,
    #[uncage(index = 24)]
    pub map_y: i16,
    #[uncage(index = 25)]
    pub more_techs_mode: bool,
    #[uncage(index = 26)]
    pub default_stance: u8,
    #[uncage(index = 27)]
    pub culture: u8,
    #[uncage(index = 28)]
    pub allied_victory: bool,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 6)]
pub struct Relation {
    #[uncage(index = 0)]
    pub unit_diplomacy: i32,
    #[uncage(index = 1)]
    pub enum_value: u8,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 7)]
pub struct VictoryPointEntry {
    #[uncage(index = 0)]
    pub command: u8,
    #[uncage(index = 1)]
    pub state: u8,
    #[uncage(index = 2)]
    pub id: u8,
    #[uncage(index = 3)]
    pub group: i32,
    #[uncage(index = 4)]
    pub attribute: i32,
    #[uncage(index = 5)]
    pub attribute_1: i32,
    #[uncage(index = 6)]
    pub amount: i32,
    #[uncage(index = 7)]
    pub points: i32,
    #[uncage(index = 8)]
    pub curr_points: i32,
    #[uncage(index = 9)]
    pub curr_attribute_amount: f32,
    #[uncage(index = 10)]
    pub curr_attribute_amount_1: f32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 8)]
pub struct PlayerAttributes {
    #[uncage(index = 0)]
    pub food: f32,
    #[uncage(index = 1)]
    pub wood: f32,
    #[uncage(index = 2)]
    pub stone: f32,
    #[uncage(index = 3)]
    pub gold: f32,
    #[uncage(index = 4)]
    pub max_pop: f32,
    #[uncage(index = 5)]
    pub religion: f32,
    #[uncage(index = 6)]
    pub current_era: f32,
    #[uncage(index = 7)]
    pub artifacts: f32,
    #[uncage(index = 8)]
    pub trade_bonus: f32,
    #[uncage(index = 9)]
    pub trade_goods: f32,
    #[uncage(index = 10)]
    pub trade_production: f32,
    #[uncage(index = 11)]
    pub population: f32,
    #[uncage(index = 12)]
    pub decay: f32,
    #[uncage(index = 13)]
    pub discovery: f32,
    #[uncage(index = 14)]
    pub ruins: f32,
    #[uncage(index = 15)]
    pub meat: f32,
    #[uncage(index = 16)]
    pub berries: f32,
    #[uncage(index = 17)]
    pub fish: f32,
    #[uncage(index = 18)]
    pub kills: f32,
    #[uncage(index = 19)]
    pub technology: f32,
    #[uncage(index = 20)]
    pub exploration: f32,
    #[uncage(index = 21)]
    pub convert_priest: f32,
    #[uncage(index = 22)]
    pub convert_building: f32,
    #[uncage(index = 23)]
    pub building_limit: f32,
    #[uncage(index = 24)]
    pub food_limit: f32,
    #[uncage(index = 25)]
    pub unit_limit: f32,
    #[uncage(index = 26)]
    pub maintanence: f32,
    #[uncage(index = 27)]
    pub faith: f32,
    #[uncage(index = 28)]
    pub faith_recharge_rate: f32,
    #[uncage(index = 29)]
    pub farm_death_rate: f32,
    #[uncage(index = 30)]
    pub civilian_pop: f32,
    #[uncage(index = 31)]
    pub all_tech_achieved: f32,
    #[uncage(index = 32)]
    pub military_pop: f32,
    #[uncage(index = 33)]
    pub convesions: f32,
    #[uncage(index = 34)]
    pub wonder: f32,
    #[uncage(index = 35)]
    pub razings: f32,
    #[uncage(index = 36)]
    pub kill_ratio: f32,
    #[uncage(index = 37)]
    pub player_killed: f32,
    #[uncage(index = 38)]
    pub tribute_inefficincy: f32,
    #[uncage(index = 39)]
    pub gold_bonus: f32,
    #[uncage(index = 40)]
    pub towncenter_not_avail: f32,
    #[uncage(index = 41)]
    pub gold_counter: f32,
    #[uncage(index = 42)]
    pub writing: f32,
    #[uncage(index = 43)]
    pub temples: f32,
    #[uncage(index = 44)]
    pub tribute: f32,
    #[uncage(index = 45)]
    pub hold_ruins: f32,
    #[uncage(index = 46)]
    pub hold_artifacts: f32,
    #[uncage(index = 47)]
    pub ore: f32,
    #[uncage(index = 48)]
    pub captured_unit: f32,
    #[uncage(index = 49)]
    pub trade_good_quality: f32,
    #[uncage(index = 50)]
    pub trade_market_level: f32,
    #[uncage(index = 51)]
    pub formations: f32,
    #[uncage(index = 52)]
    pub building_housing_rate: f32,
    #[uncage(index = 53)]
    pub gather_tax_rate: f32,
    #[uncage(index = 54)]
    pub gather_accumulator: f32,
    #[uncage(index = 55)]
    pub salvage_decay_rate: f32,
    #[uncage(index = 56)]
    pub allow_formations: f32,
    #[uncage(index = 57)]
    pub can_convert: f32,
    #[uncage(index = 58)]
    pub hit_points_killed: f32,
    #[uncage(index = 59)]
    pub player_1_kills: f32,
    #[uncage(index = 60)]
    pub player_2_kills: f32,
    #[uncage(index = 61)]
    pub player_3_kills: f32,
    #[uncage(index = 62)]
    pub player_4_kills: f32,
    #[uncage(index = 63)]
    pub player_5_kills: f32,
    #[uncage(index = 64)]
    pub player_6_kills: f32,
    #[uncage(index = 65)]
    pub player_7_kills: f32,
    #[uncage(index = 66)]
    pub player_8_kills: f32,
    #[uncage(index = 67)]
    pub convert_resistance: f32,
    #[uncage(index = 68)]
    pub trade_vig_rate: f32,
    #[uncage(index = 69)]
    pub stone_bonus: f32,
    #[uncage(index = 70)]
    pub queued_pop_count: f32,
    #[uncage(index = 71)]
    pub training_pop_count: f32,
    #[uncage(index = 72)]
    pub raider: f32,
    #[uncage(index = 73)]
    pub boarding_recharge_rate: f32,
    #[uncage(index = 74)]
    pub starting_villagers: f32,
    #[uncage(index = 75)]
    pub research_cost_mod: f32,
    #[uncage(index = 76)]
    pub research_time_mod: f32,
    #[uncage(index = 77)]
    pub convert_boats: f32,
    #[uncage(index = 78)]
    pub fish_trap_death_rate: f32,
    #[uncage(index = 79)]
    pub heal_rate_modifier: f32,
    #[uncage(index = 80)]
    pub heal_range: f32,
    #[uncage(index = 81)]
    pub starting_food: f32,
    #[uncage(index = 82)]
    pub starting_wood: f32,
    #[uncage(index = 83)]
    pub starting_stone: f32,
    #[uncage(index = 84)]
    pub starting_gold: f32,
    #[uncage(index = 85)]
    pub raider_ability: f32,
    #[uncage(index = 86)]
    pub berseker_heal_timer: f32,
    #[uncage(index = 87)]
    pub dominant_sheep_control: f32,
    #[uncage(index = 88)]
    pub build_cost_current_stuff: f32,
    #[uncage(index = 89)]
    pub tech_cost_summation: f32,
    #[uncage(index = 90)]
    pub relic_income_cost_summation: f32,
    #[uncage(index = 91)]
    pub trade_income_cost_summation: f32,
    #[uncage(index = 92)]
    pub player_1_tribute: f32,
    #[uncage(index = 93)]
    pub player_2_tribute: f32,
    #[uncage(index = 94)]
    pub player_3_tribute: f32,
    #[uncage(index = 95)]
    pub player_4_tribute: f32,
    #[uncage(index = 96)]
    pub player_5_tribute: f32,
    #[uncage(index = 97)]
    pub player_6_tribute: f32,
    #[uncage(index = 98)]
    pub player_7_tribute: f32,
    #[uncage(index = 99)]
    pub player_8_tribute: f32,
    #[uncage(index = 100)]
    pub player_1_kill_value: f32,
    #[uncage(index = 101)]
    pub player_2_kill_value: f32,
    #[uncage(index = 102)]
    pub player_3_kill_value: f32,
    #[uncage(index = 103)]
    pub player_4_kill_value: f32,
    #[uncage(index = 104)]
    pub player_5_kill_value: f32,
    #[uncage(index = 105)]
    pub player_6_kill_value: f32,
    #[uncage(index = 106)]
    pub player_7_kill_value: f32,
    #[uncage(index = 107)]
    pub player_8_kill_value: f32,
    #[uncage(index = 108)]
    pub player_1_razings: f32,
    #[uncage(index = 109)]
    pub player_2_razings: f32,
    #[uncage(index = 110)]
    pub player_3_razings: f32,
    #[uncage(index = 111)]
    pub player_4_razings: f32,
    #[uncage(index = 112)]
    pub player_5_razings: f32,
    #[uncage(index = 113)]
    pub player_6_razings: f32,
    #[uncage(index = 114)]
    pub player_7_razings: f32,
    #[uncage(index = 115)]
    pub player_8_razings: f32,
    #[uncage(index = 116)]
    pub player_1_razing_value: f32,
    #[uncage(index = 117)]
    pub player_2_razing_value: f32,
    #[uncage(index = 118)]
    pub player_3_razing_value: f32,
    #[uncage(index = 119)]
    pub player_4_razing_value: f32,
    #[uncage(index = 120)]
    pub player_5_razing_value: f32,
    #[uncage(index = 121)]
    pub player_6_razing_value: f32,
    #[uncage(index = 122)]
    pub player_7_razing_value: f32,
    #[uncage(index = 123)]
    pub player_8_razing_value: f32,
    #[uncage(index = 124)]
    pub castle: f32,
    #[uncage(index = 125)]
    pub hit_point_razings: f32,
    #[uncage(index = 126)]
    pub kills_by_player_1: f32,
    #[uncage(index = 127)]
    pub kills_by_player_2: f32,
    #[uncage(index = 128)]
    pub kills_by_player_3: f32,
    #[uncage(index = 129)]
    pub kills_by_player_4: f32,
    #[uncage(index = 130)]
    pub kills_by_player_5: f32,
    #[uncage(index = 131)]
    pub kills_by_player_6: f32,
    #[uncage(index = 132)]
    pub kills_by_player_7: f32,
    #[uncage(index = 133)]
    pub kills_by_player_8: f32,
    #[uncage(index = 134)]
    pub razings_by_player_1: f32,
    #[uncage(index = 135)]
    pub razings_by_player_2: f32,
    #[uncage(index = 136)]
    pub razings_by_player_3: f32,
    #[uncage(index = 137)]
    pub razings_by_player_4: f32,
    #[uncage(index = 138)]
    pub razings_by_player_5: f32,
    #[uncage(index = 139)]
    pub razings_by_player_6: f32,
    #[uncage(index = 140)]
    pub razings_by_player_7: f32,
    #[uncage(index = 141)]
    pub razings_by_player_8: f32,
    #[uncage(index = 142)]
    pub build_value_killed_by_others: f32,
    #[uncage(index = 143)]
    pub build_value_razed_by_others: f32,
    #[uncage(index = 144)]
    pub units_killed_by_others: f32,
    #[uncage(index = 145)]
    pub buildings_razed_by_others: f32,
    #[uncage(index = 146)]
    pub tribute_from_player_1: f32,
    #[uncage(index = 147)]
    pub tribute_from_player_2: f32,
    #[uncage(index = 148)]
    pub tribute_from_player_3: f32,
    #[uncage(index = 149)]
    pub tribute_from_player_4: f32,
    #[uncage(index = 150)]
    pub tribute_from_player_5: f32,
    #[uncage(index = 151)]
    pub tribute_from_player_6: f32,
    #[uncage(index = 152)]
    pub tribute_from_player_7: f32,
    #[uncage(index = 153)]
    pub tribute_from_player_8: f32,
    #[uncage(index = 154)]
    pub build_value_current_units: f32,
    #[uncage(index = 155)]
    pub build_value_current_buildings: f32,
    #[uncage(index = 156)]
    pub food_total: f32,
    #[uncage(index = 157)]
    pub wood_total: f32,
    #[uncage(index = 158)]
    pub stone_total: f32,
    #[uncage(index = 159)]
    pub gold_total: f32,
    #[uncage(index = 160)]
    pub total_values_of_kills: f32,
    #[uncage(index = 161)]
    pub total_tribute_received: f32,
    #[uncage(index = 162)]
    pub total_values_of_razings: f32,
    #[uncage(index = 163)]
    pub total_castles_built: f32,
    #[uncage(index = 164)]
    pub total_wonders_built: f32,
    #[uncage(index = 165)]
    pub tribute_score: f32,
    #[uncage(index = 166)]
    pub convert_min_adj: f32,
    #[uncage(index = 167)]
    pub convert_max_adj: f32,
    #[uncage(index = 168)]
    pub conv_resist_min_adj: f32,
    #[uncage(index = 169)]
    pub conv_resist_max_adj: f32,
    #[uncage(index = 170)]
    pub convert_bldg_min: f32,
    #[uncage(index = 171)]
    pub convert_bldg_max: f32,
    #[uncage(index = 172)]
    pub convert_bldg_chance: f32,
    #[uncage(index = 173)]
    pub fix_dave_screw: f32,
    #[uncage(index = 174)]
    pub build_value_wonders_castles: f32,
    #[uncage(index = 175)]
    pub food_score: f32,
    #[uncage(index = 176)]
    pub wood_score: f32,
    #[uncage(index = 177)]
    pub stone_score: f32,
    #[uncage(index = 178)]
    pub gold_score: f32,
    #[uncage(index = 179)]
    pub wood_bonus: f32,
    #[uncage(index = 180)]
    pub food_bonus: f32,
    #[uncage(index = 181)]
    pub relic_gold: f32,
    #[uncage(index = 182)]
    pub heresy: f32,
    #[uncage(index = 183)]
    pub theocracy: f32,
    #[uncage(index = 184)]
    pub crennelations: f32,
    #[uncage(index = 185)]
    pub building_rate_mod: f32,
    #[uncage(index = 186)]
    pub hun_wonder_bonus: f32,
    #[uncage(index = 187)]
    pub spies_discount: f32,
    #[uncage(index = 188)]
    pub temporary_map_reveal: f32,
    #[uncage(index = 189)]
    pub reveal_initial_type: f32,
    #[uncage(index = 190)]
    pub elevation_higher_bonus: f32,
    #[uncage(index = 191)]
    pub elevation_lower_bonus: f32,
    #[uncage(index = 192)]
    pub trigger_shared_los: f32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 9)]
pub struct Entity {
    #[uncage(index = 0)]
    pub id: i32,
    #[uncage(index = 1)]
    pub master_id: i16,
    #[uncage(index = 2)]
    pub owner_id: i8,
    #[uncage(index = 3)]
    pub world_x: f32,
    #[uncage(index = 4)]
    pub world_y: f32,
    #[uncage(index = 5)]
    pub world_z: f32,
    #[uncage(index = 6)]
    pub held_attribute_amount: f32,
    #[uncage(index = 7)]
    pub held_attribute_type: i16,
    #[uncage(index = 8)]
    pub state: i8,
    #[uncage(index = 9)]
    pub sleep_flag: bool,
    #[uncage(index = 10)]
    pub dopple_flag: bool,
    #[uncage(index = 11)]
    pub r#type: i8,
    #[uncage(index = 12)]
    pub hp: f32,
    #[uncage(index = 13)]
    pub is_under_attack: bool,
    #[uncage(index = 14)]
    pub own_master: Ref,
    #[uncage(index = 15)]
    pub sprite_id: i16,
    #[uncage(index = 16)]
    pub facet: u8,
    #[uncage(index = 17)]
    pub sprite_list: ModelVec<Sprite>,
    #[uncage(index = 18)]
    pub inside_obj_id: i32,
    #[uncage(index = 19)]
    pub selected: bool,
    #[uncage(index = 34)]
    pub group_id: i32,
    #[uncage(index = 41)]
    pub worker_num: i32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 10)]
pub struct DoppleEntity {
    #[uncage(extends)]
    pub parent: Entity,
    #[uncage(index = 20)]
    pub doppled_object_id: i32,
    #[uncage(index = 21)]
    pub cant_see_bits: u32,
    #[uncage(index = 22)]
    pub doppled_player_id: i8,
    #[uncage(index = 23)]
    pub map_drawlevel: u8,
    #[uncage(index = 24)]
    pub map_color: u8,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 11)]
pub struct ActionEntity {
    #[uncage(extends)]
    pub parent: Entity,
    #[uncage(index = 20)]
    pub current_action: Ref,
    #[uncage(index = 35)]
    pub formation_type: u8,
    #[uncage(index = 36)]
    pub attack_stance: u8,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 12)]
pub struct CombatEntity {
    #[uncage(extends)]
    pub parent: ActionEntity,
    #[uncage(index = 21)]
    pub unified_map_value: i32,
    #[uncage(index = 37)]
    pub num_builders: u8,
    #[uncage(index = 38)]
    pub num_healers: u8,
    #[uncage(index = 39)]
    pub town_bell_active: bool,
    #[uncage(index = 42)]
    pub current_volley_fire_amount: f32,
    #[uncage(index = 44)]
    pub charge: f32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 13)]
pub struct MissileEntity {
    #[uncage(extends)]
    pub parent: CombatEntity,
    #[uncage(index = 22)]
    pub fired_from_id: i32,
    #[uncage(index = 23)]
    pub is_primary: bool,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 14)]
pub struct BuildingEntity {
    #[uncage(extends)]
    pub parent: CombatEntity,
    #[uncage(index = 22)]
    pub linked_owner_id: i32,
    #[uncage(index = 23)]
    pub current_production_queue_action: Ref,
    #[uncage(index = 24)]
    pub gather_point_exists: i32,
    #[uncage(index = 25)]
    pub gather_point_x: f32,
    #[uncage(index = 26)]
    pub gather_point_y: f32,
    #[uncage(index = 27)]
    pub gather_point_z: f32,
    #[uncage(index = 28)]
    pub gather_point_target_id: i32,
    #[uncage(index = 29)]
    pub build_pts: f32,
    #[uncage(index = 30)]
    pub original_owner_id: i8,
    #[uncage(index = 31)]
    pub built: bool,
    #[uncage(index = 32)]
    pub relic_count: i32,
    #[uncage(index = 33)]
    pub production_queue: ModelVec<ProductionQueueRecord>,
    #[uncage(index = 40)]
    pub gate_locked: bool,
    #[uncage(index = 43)]
    pub snow_flag: bool,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 15)]
pub struct ProductionQueueRecord {
    #[uncage(index = 0)]
    pub unit_id: i16,
    #[uncage(index = 1)]
    pub tech_id: i16,
    #[uncage(index = 2)]
    pub unit_count: i16,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 16)]
pub struct MasterEntity {
    #[uncage(index = 0)]
    pub id: i16,
    #[uncage(index = 1)]
    pub r#type: u8,
    #[uncage(index = 2)]
    pub string_id: i32,
    #[uncage(index = 3)]
    pub string_id_2: i32,
    #[uncage(index = 4)]
    pub object_group: i16,
    #[uncage(index = 5)]
    pub hp: i16,
    #[uncage(index = 6)]
    pub obj_capacity: u8,
    #[uncage(index = 7)]
    pub radius_x: f32,
    #[uncage(index = 8)]
    pub radius_y: f32,
    #[uncage(index = 9)]
    pub radius_z: f32,
    #[uncage(index = 10)]
    pub button_pict: i16,
    #[uncage(index = 11)]
    pub portrait_pict: i16,
    #[uncage(index = 12)]
    pub available: bool,
    #[uncage(index = 13)]
    pub disabled: bool,
    #[uncage(index = 14)]
    pub construction_radius_x: f32,
    #[uncage(index = 15)]
    pub construction_radius_y: f32,
    #[uncage(index = 16)]
    pub fog_flag: u8,
    #[uncage(index = 17)]
    pub attribute_max_amount: i16,
    #[uncage(index = 18)]
    pub map_draw_level: u8,
    #[uncage(index = 19)]
    pub unit_level: u8,
    #[uncage(index = 20)]
    pub map_color: u8,
    #[uncage(index = 21)]
    pub occlusion_flag: u8,
    #[uncage(index = 22)]
    pub object_flags: u32,
    #[uncage(index = 23)]
    pub resource_group: u8,
    #[uncage(index = 24)]
    pub outline_radius_x: f32,
    #[uncage(index = 25)]
    pub outline_radius_y: f32,
    #[uncage(index = 26)]
    pub outline_radius_z: f32,
    #[uncage(index = 27)]
    pub attributes_held: ModelVec<AttributeValue>,
    #[uncage(index = 42)]
    pub created_sound_event: ModelRef<SoundEvent>,
    #[uncage(index = 43)]
    pub death_sound_event: ModelRef<SoundEvent>,
    #[uncage(index = 44)]
    pub selected_sound_event: ModelRef<SoundEvent>,
    #[uncage(index = 45)]
    pub damage_sound_event: ModelRef<SoundEvent>,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 17)]
pub struct MasterActionEntity {
    #[uncage(extends)]
    pub parent: MasterEntity,
    #[uncage(index = 28)]
    pub work_rate: f32,
    #[uncage(index = 46)]
    pub command_sound_event: ModelRef<SoundEvent>,
    #[uncage(index = 47)]
    pub move_sound_event: ModelRef<SoundEvent>,
    #[uncage(index = 53)]
    pub speed: f32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 18)]
pub struct MasterCombatEntity {
    #[uncage(extends)]
    pub parent: MasterActionEntity,
    #[uncage(index = 29)]
    pub base_armor: i16,
    #[uncage(index = 30)]
    pub armor: ModelVec<ArmorWeaponInfo>,
    #[uncage(index = 31)]
    pub weapon: ModelVec<ArmorWeaponInfo>,
    #[uncage(index = 32)]
    pub weapon_range: f32,
    #[uncage(index = 33)]
    pub speed_of_attack: f32,
    #[uncage(index = 34)]
    pub orig_armor: i16,
    #[uncage(index = 35)]
    pub orig_weapon: i16,
    #[uncage(index = 36)]
    pub orig_weapon_range: f32,
    #[uncage(index = 37)]
    pub orig_speed_of_attack: f32,
    #[uncage(index = 38)]
    pub build_pts_required: i16,
    #[uncage(index = 39)]
    pub id_of_building_obj: i16,
    #[uncage(index = 40)]
    pub build_inventory: Vec<Ref>,
    #[uncage(index = 54)]
    pub area_effect_range: f32,
    #[uncage(index = 55)]
    pub area_effect_level: u8,
    #[uncage(index = 56)]
    pub orig_pierce_armor: i16,
    #[uncage(index = 57)]
    pub minimum_weapon_range: f32,
    #[uncage(index = 58)]
    pub fire_missile_at_frame: i16,
    #[uncage(index = 59)]
    pub base_hit_chance: i16,
    #[uncage(index = 60)]
    pub volley_fire_amount: f32,
    #[uncage(index = 61)]
    pub max_attacks_in_volley: u8,
    #[uncage(index = 62)]
    pub max_charge: f32,
    #[uncage(index = 63)]
    pub recharge_rate: f32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 19)]
pub struct ArmorWeaponInfo {
    #[uncage(index = 0)]
    pub r#type: i16,
    #[uncage(index = 1)]
    pub value: i16,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 20)]
pub struct MasterMissileEntity {
    #[uncage(extends)]
    pub parent: MasterCombatEntity,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 21)]
pub struct MasterBuildingEntity {
    #[uncage(extends)]
    pub parent: MasterCombatEntity,
    #[uncage(index = 41)]
    pub on_build_make_tech: i16,
    #[uncage(index = 48)]
    pub construction_sound_event: ModelRef<SoundEvent>,
    #[uncage(index = 49)]
    pub open_close_sound_event: ModelRef<SoundEvent>,
    #[uncage(index = 50)]
    pub gate_open_close_id: i16,
    #[uncage(index = 51)]
    pub on_build_make_tile: i16,
    #[uncage(index = 52)]
    pub on_build_make_overlay: i16,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 22)]
pub struct Action {
    #[uncage(index = 0)]
    pub r#type: i16,
    #[uncage(index = 1)]
    pub state: u8,
    #[uncage(index = 2)]
    pub target_id: i32,
    #[uncage(index = 3)]
    pub target_2_id: i32,
    #[uncage(index = 4)]
    pub target_x: f32,
    #[uncage(index = 5)]
    pub target_y: f32,
    #[uncage(index = 6)]
    pub target_z: f32,
    #[uncage(index = 12)]
    pub timer: f32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 23)]
pub struct MakeObjectAction {
    #[uncage(extends)]
    pub parent: Action,
    #[uncage(index = 7)]
    pub obj_id: i16,
    #[uncage(index = 8)]
    pub work_done: f32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 24)]
pub struct MakeTechAction {
    #[uncage(extends)]
    pub parent: Action,
    #[uncage(index = 7)]
    pub tech_id: i16,
    #[uncage(index = 8)]
    pub research_progress: f32,
    #[uncage(index = 9)]
    pub start_time: u32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 25)]
pub struct GatherAction {
    #[uncage(extends)]
    pub parent: Action,
    #[uncage(index = 7)]
    pub target_type: i32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 26)]
pub struct HuntAction {
    #[uncage(extends)]
    pub parent: Action,
    #[uncage(index = 7)]
    pub target_type: i32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 27)]
pub struct ConvertAction {
    #[uncage(extends)]
    pub parent: Action,
    #[uncage(index = 7)]
    pub was_same_owner: bool,
    #[uncage(index = 8)]
    pub required_range: f32,
    #[uncage(index = 9)]
    pub total_timer: f32,
    #[uncage(index = 10)]
    pub task_work_val_1: f32,
    #[uncage(index = 11)]
    pub task_work_val_2: f32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 40)]
pub struct WonderAction {
    #[uncage(extends)]
    pub parent: Action,
    #[uncage(index = 7)]
    pub wonder_time: f32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 41)]
pub struct PackAction {
    #[uncage(extends)]
    pub parent: Action,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 42)]
pub struct UnpackAction {
    #[uncage(extends)]
    pub parent: Action,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 43)]
pub struct FarmAction {
    #[uncage(extends)]
    pub parent: Action,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 28)]
pub struct ActiveSprite {
    #[uncage(index = 0)]
    pub sprite_id: i16,
    #[uncage(index = 1)]
    pub offset_x: i32,
    #[uncage(index = 2)]
    pub offset_y: i32,
    #[uncage(index = 3)]
    pub frame: i16,
    #[uncage(index = 4)]
    pub order: u8,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 29)]
pub struct Sprite {
    #[uncage(index = 0)]
    pub id: i16,
    #[uncage(index = 1)]
    pub resource_id: i32,
    #[uncage(index = 2)]
    pub pict_name: String,
    #[uncage(index = 3)]
    pub frame_num: i16,
    #[uncage(index = 4)]
    pub facet_num: i16,
    #[uncage(index = 5)]
    pub color_table: i16,
    #[uncage(index = 6)]
    pub box_x_1: i16,
    #[uncage(index = 7)]
    pub box_y_1: i16,
    #[uncage(index = 8)]
    pub box_x_2: i16,
    #[uncage(index = 9)]
    pub box_y_2: i16,
    #[uncage(index = 10)]
    pub draw_list: ModelVec<DeltaSprite>,
    #[uncage(index = 11)]
    pub draw_level: u8,
    #[uncage(index = 12)]
    pub main_sound_event: ModelRef<SoundEvent>,
    #[uncage(index = 13)]
    pub sound_list: ModelVec<SoundList>,
    #[uncage(index = 14)]
    pub particle_effect_name: String,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 30)]
pub struct DeltaSprite {
    #[uncage(index = 0)]
    pub sprite_id: i16,
    #[uncage(index = 1)]
    pub picture_num: i16,
    #[uncage(index = 2)]
    pub offset_x: i16,
    #[uncage(index = 3)]
    pub offset_y: i16,
    #[uncage(index = 4)]
    pub facet: i16,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 31)]
pub struct Technology {
    #[uncage(index = 0)]
    pub name: String,
    #[uncage(index = 1)]
    pub build_obj_id: i16,
    #[uncage(index = 2)]
    pub string_id: i16,
    #[uncage(index = 3)]
    pub string_id_2: i16,
    #[uncage(index = 4)]
    pub icon: i16,
    #[uncage(index = 5)]
    pub time_to_research: i16,
    #[uncage(index = 6)]
    pub tech_prerequisites: ModelVec<TechnologyPrerequisite>,
    #[uncage(index = 7)]
    pub tech_prerequisites_to_fill: i16,
    #[uncage(index = 8)]
    pub civ_prerequisite: i16,
    #[uncage(index = 9)]
    pub civ_prerequisite_ignore_full_tech_flag: i16,
    #[uncage(index = 10)]
    pub cost: ModelVec<AttributeValue>,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 32)]
pub struct TechnologyPrerequisite {
    #[uncage(index = 0)]
    pub value: i16,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 33)]
pub struct AttributeValue {
    #[uncage(index = 0)]
    pub r#type: i16,
    #[uncage(index = 1)]
    pub amount: f32,
    #[uncage(index = 2)]
    pub flag: u8,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 34)]
pub struct ResearchState {
    #[uncage(index = 0)]
    pub research_done: f32,
    #[uncage(index = 1)]
    pub state: i16,
    #[uncage(index = 2)]
    pub research_adjustment: i16,
    #[uncage(index = 3)]
    pub build_obj_id: i16,
    #[uncage(index = 4)]
    pub times_researched: i16,
    #[uncage(index = 5)]
    pub allow_multiple_research: bool,
    #[uncage(index = 6)]
    pub cost_adjustment_0: i16,
    #[uncage(index = 7)]
    pub cost_adjustment_1: i16,
    #[uncage(index = 8)]
    pub cost_adjustment_2: i16,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 35)]
pub struct GameOptions {
    #[uncage(index = 0)]
    pub is_ranked: bool,
    #[uncage(index = 1)]
    pub other_players: i32,
    #[uncage(index = 2)]
    pub allow_spectators: bool,
    #[uncage(index = 3)]
    pub hide_civ_names: bool,
    #[uncage(index = 4)]
    pub game_id: String,
    #[uncage(index = 5)]
    pub is_automatch: bool,
    #[uncage(index = 6)]
    pub spectator_delay: i32,
    #[uncage(index = 7)]
    pub map_style_type: i8,
    #[uncage(index = 8)]
    pub difficulty_id: i8,
    #[uncage(index = 9)]
    pub map_size: i8,
    #[uncage(index = 10)]
    pub resolved_map_type: i16,
    #[uncage(index = 11)]
    pub chosen_map_type: i16,
    #[uncage(index = 12)]
    pub visibility: u8,
    #[uncage(index = 46)]
    pub victory_type: u8,
    #[uncage(index = 47)]
    pub victory_amount: i32,
    #[uncage(index = 13)]
    pub resource_level: u8,
    #[uncage(index = 14)]
    pub starting_age: u8,
    #[uncage(index = 15)]
    pub ending_age: u8,
    #[uncage(index = 16)]
    pub game_mode: u8,
    #[uncage(index = 17)]
    pub player_info: ModelVec<PlayerGameOptions>,
    #[uncage(index = 18)]
    pub treaty_length: i32,
    #[uncage(index = 19)]
    pub battle_royale_length_minutes: i32,
    #[uncage(index = 20)]
    pub population_limit: i32,
    #[uncage(index = 21)]
    pub trading_enabled: bool,
    #[uncage(index = 22)]
    pub team_bonuses_disabled: bool,
    #[uncage(index = 23)]
    pub randomize_positions: bool,
    #[uncage(index = 24)]
    pub full_tech_tree: bool,
    #[uncage(index = 25)]
    pub teams_locked: bool,
    #[uncage(index = 26)]
    pub speed_locked: bool,
    #[uncage(index = 27)]
    pub collide_and_correcting: bool,
    #[uncage(index = 28)]
    pub villager_force_drop: bool,
    #[uncage(index = 29)]
    pub multiplayer_enabled: bool,
    #[uncage(index = 30)]
    pub record_game_enabled: bool,
    #[uncage(index = 31)]
    pub animals_enabled: bool,
    #[uncage(index = 32)]
    pub predators_enabled: bool,
    #[uncage(index = 33)]
    pub cheats_enabled: bool,
    #[uncage(index = 34)]
    pub turbo_enabled: bool,
    #[uncage(index = 35)]
    pub shared_exploration: bool,
    #[uncage(index = 36)]
    pub team_positions: bool,
    #[uncage(index = 37)]
    pub version: f32,
    #[uncage(index = 38)]
    pub fog_of_war_enabled: bool,
    #[uncage(index = 39)]
    pub cheat_notifications_enabled: bool,
    #[uncage(index = 40)]
    pub modded_dataset_title: String,
    #[uncage(index = 41)]
    pub modded_dataset_workshop_id: u64,
    #[uncage(index = 42)]
    pub modded_dataset_crc: u32,
    #[uncage(index = 43)]
    pub dataset_is_official: bool,
    #[uncage(index = 44)]
    pub custom_random_map_file: String,
    #[uncage(index = 45)]
    pub custom_random_map_scenario_file: String,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 36)]
pub struct PlayerGameOptions {
    #[uncage(index = 0)]
    pub chosen_team_id: u8,
    #[uncage(index = 1)]
    pub resolved_team_id: u8,
    #[uncage(index = 2)]
    pub human_player_name: String,
    #[uncage(index = 3)]
    pub multi_player_game_version: u8,
    #[uncage(index = 4)]
    pub steam_id: u64,
    #[uncage(index = 5)]
    pub ai_script_base_name: String,
    #[uncage(index = 6)]
    pub ai_civ_name_index: u8,
    #[uncage(index = 7)]
    pub ai_player_name: String,
    #[uncage(index = 8)]
    pub is_custom_ai: bool,
    #[uncage(index = 9)]
    pub player_dm_elo: i32,
    #[uncage(index = 10)]
    pub player_rm_elo: i32,
    #[uncage(index = 11)]
    pub player_platform: i8,
    #[uncage(index = 12)]
    pub scenario_player_index: i8,
    #[uncage(index = 13)]
    pub world_player_index_including_gaia: i8,
    #[uncage(index = 14)]
    pub humanity: u8,
    #[uncage(index = 15)]
    pub civilization_choice_mode_id: i8,
    #[uncage(index = 16)]
    pub civilization_choice_specific_id: i16,
    #[uncage(index = 17)]
    pub dat_file_crc: u32,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 37)]
pub struct SoundEvent {
    #[uncage(index = 0)]
    pub event_id: u32,
    #[uncage(index = 1)]
    pub flags: u8,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 38)]
pub struct SoundList {
    #[uncage(index = 0)]
    pub frame_0: i16,
    #[uncage(index = 1)]
    pub frame_1: i16,
    #[uncage(index = 2)]
    pub frame_2: i16,
    #[uncage(index = 3)]
    pub event_0: ModelRef<SoundEvent>,
    #[uncage(index = 4)]
    pub event_1: ModelRef<SoundEvent>,
    #[uncage(index = 5)]
    pub event_2: ModelRef<SoundEvent>,
}

#[derive(Model, Debug, Default)]
#[uncage(type = 39)]
pub struct ParticleInstance {
    #[uncage(index = 0)]
    pub object_id: i32,
    #[uncage(index = 1)]
    pub sprite_id: i16,
    #[uncage(index = 2)]
    pub is_2d: bool,
    #[uncage(index = 3)]
    pub active: bool,
    #[uncage(index = 4)]
    pub enabled: bool,
    #[uncage(index = 5)]
    pub definition_id: i32,
    #[uncage(index = 6)]
    pub position_x: f32,
    #[uncage(index = 7)]
    pub position_y: f32,
    #[uncage(index = 8)]
    pub position_z: f32,
    #[uncage(index = 9)]
    pub dir_angle: f32,
    #[uncage(index = 10)]
    pub dir_index: i32,
    #[uncage(index = 11)]
    pub random_animation_value: f32,
    #[uncage(index = 12)]
    pub offset_2d_x: f32,
    #[uncage(index = 13)]
    pub offset_2d_y: f32,
    #[uncage(index = 14)]
    pub color_r: f32,
    #[uncage(index = 15)]
    pub color_g: f32,
    #[uncage(index = 16)]
    pub color_b: f32,
    #[uncage(index = 17)]
    pub color_a: f32,
    #[uncage(index = 18)]
    pub display_in_hidden: bool,
    #[uncage(index = 19)]
    pub display_in_fog: bool,
    #[uncage(index = 20)]
    pub pause_in_fog: bool,
    #[uncage(index = 21)]
    pub dim_in_fog: bool,
    #[uncage(index = 22)]
    pub is_paused: bool,
    #[uncage(index = 23)]
    pub sprite_used: bool,
    #[uncage(index = 24)]
    pub sprite_fade_alpha: f32,
    #[uncage(index = 25)]
    pub sprite_index: i32,
    #[uncage(index = 26)]
    pub sprite_texture_id_index: i32,
    #[uncage(index = 27)]
    pub sprite_position_x: f32,
    #[uncage(index = 28)]
    pub sprite_position_y: f32,
    #[uncage(index = 29)]
    pub sprite_position_z: f32,
    #[uncage(index = 30)]
    pub sprite_age: f32,
    #[uncage(index = 31)]
    pub sprite_loop_offset: f32,
    #[uncage(index = 32)]
    pub sprite_animation_type: f32,
    #[uncage(index = 33)]
    pub sprite_duration: f32,
    #[uncage(index = 34)]
    pub sprite_scale_start: f32,
    #[uncage(index = 35)]
    pub sprite_scale_end: f32,
    #[uncage(index = 36)]
    pub sprite_scale_speed: f32,
    #[uncage(index = 37)]
    pub sprite_rotation_start: f32,
    #[uncage(index = 38)]
    pub sprite_rotation_speed: f32,
    #[uncage(index = 39)]
    pub sprite_color_r: f32,
    #[uncage(index = 40)]
    pub sprite_color_g: f32,
    #[uncage(index = 41)]
    pub sprite_color_b: f32,
    #[uncage(index = 42)]
    pub sprite_alpha_start: f32,
    #[uncage(index = 43)]
    pub sprite_alpha_end: f32,
}
