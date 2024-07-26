var Prt = j(krt => {
    "use strict";
    m();
    h();
    g();
    y();
    v();
    E();
    _();
    var S = Drt()
        , re = S
        , Ae = Function("return this")();
    re.exportSymbol("proto.cade_api.rpc.AccessFlagRequest", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.AccessFlagRequest.Flag", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.AccessFlagResponse", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.ChangeScreenRequest", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.ChangeScreenResponse", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.ChangeScreenResponse.Code", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.ChangeWindowStateRequest", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.ChangeWindowStateRequest.ModeChange", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.ChangeWindowStateResponse", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.ChangeWindowStateResponse.Code", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.AboutFaceFormation", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.AddAttribute", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.AddWaypoint", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.AiEffectAmount", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.AiEffectPercent", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.AiOrder", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.AttackGround", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.AttackMove", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.AttackMoveTarget", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.AutoScout", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Build", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.BuildWall", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.BuyCommodity", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.CancelBuild", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.ChangePlayerName", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Chapter", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.CommandCase", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Create", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.DeleteObjects", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Diplomacy", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.DropRelic", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Explore", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Flare", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Follow", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.FormFormation", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Game", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Gate", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.GiveAttribute2", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.GiveAttributes", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.GiveAttributes.Attribute", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.GoBackToWork", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.GoBackToWork2", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.GroupAiOrder", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.GroupMultiWaypoints", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.GroupWaypoint", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Guard", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Interact", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Make", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.MoreTechs", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Move", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.MultiGate", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.MultiQueue", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.MultiplayerSave", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Patrol", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Pause", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Queue", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Repair", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Research", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.ResetBuildings", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Resign", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Retreat", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Scout", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.SellCommodity", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.SendAiSignal", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.SetGatherPoint", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.SetGatherState", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.SetRetreatPoint", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Special", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Stop", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.StopAll", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.TownBell", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.TradeAttribute", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.TransformObject", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.TransformObjects", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Trigger", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.UnitAiState", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.UnitOrder", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.UnitTransform", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.UnitTypeAiState", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.UnknownCommand", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Unload", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.WheelFormation", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.Work", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.XyFloatPoint", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.XyUintPoint", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.XyzFloatPoint", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Command.XyzUintPoint", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.CurrentReplay", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Event", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Event.CombatNotificationSound", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Event.CombatNotificationSound.Type", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Event.Damage", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Event.EntityKilled", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Event.EventCase", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Event.MarketTransaction", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Event.MonkConversion", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Event.NotificationResearchDone", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Event.NotificationTrainDone", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Event.NotificationWonder", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Event.NotificationWonder.Type", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Event.PlayerChat", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Event.PlayerChat.Channel", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Event.Tribute", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Frame", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Frame.MetricEntry", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Frame.MetricEntry.Region", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.FrameSequence", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.FramesRequest", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.FramesRequest.ResolutionEntry", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.FramesRequest.ResolutionEntry.Category", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.GameState", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.GameType", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.InfoRequest", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.InfoResponse", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.LoadGameRequest", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.LoadGameRequest.Cancel", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.LoadGameRequest.LoadReplay", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.LoadGameRequest.RequestCase", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.LoadGameRequest.RestartAsReplay", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.LoadGameRequest.SpectateLobby", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.LoadGameResponse", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.LoadGameResponse.Code", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Modal", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Modal.Action", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.Modal.Purpose", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.OracleMessage", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.OracleMessage.ContentCase", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.OracleMessage.EmptyModal", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.OracleMessage.GamePaused", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.OracleMessage.InfoResponse", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.OracleMessage.InstallerAction", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.OracleMessage.LobbyInfo", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.OracleMessage.LobbyInfo.RankedType", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.ContentCase", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.OracleMessage.ModalClickResult", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.OracleMessage.ObserverLeave", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.OracleMessage.ObserverLobby", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.OraclePrayer", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.OraclePrayer.ClearInstallerAction", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.OraclePrayer.ClickModal", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.OraclePrayer.ContentCase", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.OraclePrayer.InfoRequest", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.PauseRequest", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.PauseResponse", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.ScreenState", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.ScreenState.Location", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.SelectedGame", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.SelectedGameInfo", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.SetDesiredGameRequest", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.SetDesiredGameResponse", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.SetDesiredGameResponse.Code", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.SetFogOfWarRequest", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.SetFogOfWarResponse", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.SetGameSpeedRequest", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.SetGameSpeedRequest.Speed", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.SetGameSpeedResponse", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.SetPerspectiveRequest", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.SetPerspectiveResponse", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.StoredPatchTimeEntry", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.WindowState", null, Ae);
    re.exportSymbol("proto.cade_api.rpc.WindowState.Mode", null, Ae);
    proto.cade_api.rpc.InfoRequest = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.InfoRequest, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.InfoRequest.displayName = "proto.cade_api.rpc.InfoRequest");
    proto.cade_api.rpc.InfoResponse = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.InfoResponse.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.InfoResponse, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.InfoResponse.displayName = "proto.cade_api.rpc.InfoResponse");
    proto.cade_api.rpc.PauseRequest = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.PauseRequest, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.PauseRequest.displayName = "proto.cade_api.rpc.PauseRequest");
    proto.cade_api.rpc.PauseResponse = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.PauseResponse, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.PauseResponse.displayName = "proto.cade_api.rpc.PauseResponse");
    proto.cade_api.rpc.SetFogOfWarRequest = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.SetFogOfWarRequest, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.SetFogOfWarRequest.displayName = "proto.cade_api.rpc.SetFogOfWarRequest");
    proto.cade_api.rpc.SetFogOfWarResponse = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.SetFogOfWarResponse, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.SetFogOfWarResponse.displayName = "proto.cade_api.rpc.SetFogOfWarResponse");
    proto.cade_api.rpc.SetPerspectiveRequest = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.SetPerspectiveRequest, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.SetPerspectiveRequest.displayName = "proto.cade_api.rpc.SetPerspectiveRequest");
    proto.cade_api.rpc.SetPerspectiveResponse = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.SetPerspectiveResponse, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.SetPerspectiveResponse.displayName = "proto.cade_api.rpc.SetPerspectiveResponse");
    proto.cade_api.rpc.SetGameSpeedRequest = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.SetGameSpeedRequest, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.SetGameSpeedRequest.displayName = "proto.cade_api.rpc.SetGameSpeedRequest");
    proto.cade_api.rpc.SetGameSpeedResponse = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.SetGameSpeedResponse, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.SetGameSpeedResponse.displayName = "proto.cade_api.rpc.SetGameSpeedResponse");
    proto.cade_api.rpc.LoadGameRequest = function (t) {
        S.Message.initialize(this, t, 0, -1, null, proto.cade_api.rpc.LoadGameRequest.oneofGroups_)
    }
        ;
    re.inherits(proto.cade_api.rpc.LoadGameRequest, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.LoadGameRequest.displayName = "proto.cade_api.rpc.LoadGameRequest");
    proto.cade_api.rpc.LoadGameRequest.SpectateLobby = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.LoadGameRequest.SpectateLobby, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.LoadGameRequest.SpectateLobby.displayName = "proto.cade_api.rpc.LoadGameRequest.SpectateLobby");
    proto.cade_api.rpc.LoadGameRequest.LoadReplay = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.LoadGameRequest.LoadReplay, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.LoadGameRequest.LoadReplay.displayName = "proto.cade_api.rpc.LoadGameRequest.LoadReplay");
    proto.cade_api.rpc.LoadGameRequest.RestartAsReplay = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.LoadGameRequest.RestartAsReplay, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.LoadGameRequest.RestartAsReplay.displayName = "proto.cade_api.rpc.LoadGameRequest.RestartAsReplay");
    proto.cade_api.rpc.LoadGameRequest.Cancel = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.LoadGameRequest.Cancel, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.LoadGameRequest.Cancel.displayName = "proto.cade_api.rpc.LoadGameRequest.Cancel");
    proto.cade_api.rpc.LoadGameResponse = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.LoadGameResponse, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.LoadGameResponse.displayName = "proto.cade_api.rpc.LoadGameResponse");
    proto.cade_api.rpc.AccessFlagRequest = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.AccessFlagRequest, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.AccessFlagRequest.displayName = "proto.cade_api.rpc.AccessFlagRequest");
    proto.cade_api.rpc.AccessFlagResponse = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.AccessFlagResponse, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.AccessFlagResponse.displayName = "proto.cade_api.rpc.AccessFlagResponse");
    proto.cade_api.rpc.WindowState = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.WindowState, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.WindowState.displayName = "proto.cade_api.rpc.WindowState");
    proto.cade_api.rpc.ChangeWindowStateRequest = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.ChangeWindowStateRequest, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.ChangeWindowStateRequest.displayName = "proto.cade_api.rpc.ChangeWindowStateRequest");
    proto.cade_api.rpc.ChangeWindowStateResponse = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.ChangeWindowStateResponse, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.ChangeWindowStateResponse.displayName = "proto.cade_api.rpc.ChangeWindowStateResponse");
    proto.cade_api.rpc.ScreenState = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.ScreenState, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.ScreenState.displayName = "proto.cade_api.rpc.ScreenState");
    proto.cade_api.rpc.ChangeScreenRequest = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.ChangeScreenRequest, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.ChangeScreenRequest.displayName = "proto.cade_api.rpc.ChangeScreenRequest");
    proto.cade_api.rpc.ChangeScreenResponse = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.ChangeScreenResponse, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.ChangeScreenResponse.displayName = "proto.cade_api.rpc.ChangeScreenResponse");
    proto.cade_api.rpc.SetDesiredGameRequest = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.SetDesiredGameRequest, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.SetDesiredGameRequest.displayName = "proto.cade_api.rpc.SetDesiredGameRequest");
    proto.cade_api.rpc.SetDesiredGameResponse = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.SetDesiredGameResponse, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.SetDesiredGameResponse.displayName = "proto.cade_api.rpc.SetDesiredGameResponse");
    proto.cade_api.rpc.Modal = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Modal.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Modal, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Modal.displayName = "proto.cade_api.rpc.Modal");
    proto.cade_api.rpc.OraclePrayer = function (t) {
        S.Message.initialize(this, t, 0, -1, null, proto.cade_api.rpc.OraclePrayer.oneofGroups_)
    }
        ;
    re.inherits(proto.cade_api.rpc.OraclePrayer, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.OraclePrayer.displayName = "proto.cade_api.rpc.OraclePrayer");
    proto.cade_api.rpc.OraclePrayer.ClearInstallerAction = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.OraclePrayer.ClearInstallerAction, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.OraclePrayer.ClearInstallerAction.displayName = "proto.cade_api.rpc.OraclePrayer.ClearInstallerAction");
    proto.cade_api.rpc.OraclePrayer.ClickModal = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.OraclePrayer.ClickModal, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.OraclePrayer.ClickModal.displayName = "proto.cade_api.rpc.OraclePrayer.ClickModal");
    proto.cade_api.rpc.OraclePrayer.InfoRequest = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.OraclePrayer.InfoRequest, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.OraclePrayer.InfoRequest.displayName = "proto.cade_api.rpc.OraclePrayer.InfoRequest");
    proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch.displayName = "proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch");
    proto.cade_api.rpc.SelectedGameInfo = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.SelectedGameInfo, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.SelectedGameInfo.displayName = "proto.cade_api.rpc.SelectedGameInfo");
    proto.cade_api.rpc.CurrentReplay = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.CurrentReplay, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.CurrentReplay.displayName = "proto.cade_api.rpc.CurrentReplay");
    proto.cade_api.rpc.OracleMessage = function (t) {
        S.Message.initialize(this, t, 0, -1, null, proto.cade_api.rpc.OracleMessage.oneofGroups_)
    }
        ;
    re.inherits(proto.cade_api.rpc.OracleMessage, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.OracleMessage.displayName = "proto.cade_api.rpc.OracleMessage");
    proto.cade_api.rpc.OracleMessage.EmptyModal = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.OracleMessage.EmptyModal, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.OracleMessage.EmptyModal.displayName = "proto.cade_api.rpc.OracleMessage.EmptyModal");
    proto.cade_api.rpc.OracleMessage.ModalClickResult = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.OracleMessage.ModalClickResult, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.OracleMessage.ModalClickResult.displayName = "proto.cade_api.rpc.OracleMessage.ModalClickResult");
    proto.cade_api.rpc.OracleMessage.ObserverLeave = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.OracleMessage.ObserverLeave, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.OracleMessage.ObserverLeave.displayName = "proto.cade_api.rpc.OracleMessage.ObserverLeave");
    proto.cade_api.rpc.OracleMessage.ObserverLobby = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.OracleMessage.ObserverLobby, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.OracleMessage.ObserverLobby.displayName = "proto.cade_api.rpc.OracleMessage.ObserverLobby");
    proto.cade_api.rpc.OracleMessage.LobbyInfo = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.OracleMessage.LobbyInfo.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.OracleMessage.LobbyInfo, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.OracleMessage.LobbyInfo.displayName = "proto.cade_api.rpc.OracleMessage.LobbyInfo");
    proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot = function (t) {
        S.Message.initialize(this, t, 0, -1, null, proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.oneofGroups_)
    }
        ;
    re.inherits(proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.displayName = "proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot");
    proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.displayName = "proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed");
    proto.cade_api.rpc.OracleMessage.InstallerAction = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.OracleMessage.InstallerAction, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.OracleMessage.InstallerAction.displayName = "proto.cade_api.rpc.OracleMessage.InstallerAction");
    proto.cade_api.rpc.OracleMessage.GamePaused = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.OracleMessage.GamePaused, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.OracleMessage.GamePaused.displayName = "proto.cade_api.rpc.OracleMessage.GamePaused");
    proto.cade_api.rpc.OracleMessage.InfoResponse = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.OracleMessage.InfoResponse, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.OracleMessage.InfoResponse.displayName = "proto.cade_api.rpc.OracleMessage.InfoResponse");
    proto.cade_api.rpc.FramesRequest = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.FramesRequest.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.FramesRequest, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.FramesRequest.displayName = "proto.cade_api.rpc.FramesRequest");
    proto.cade_api.rpc.FramesRequest.ResolutionEntry = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.FramesRequest.ResolutionEntry, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.FramesRequest.ResolutionEntry.displayName = "proto.cade_api.rpc.FramesRequest.ResolutionEntry");
    proto.cade_api.rpc.FrameSequence = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.FrameSequence.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.FrameSequence, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.FrameSequence.displayName = "proto.cade_api.rpc.FrameSequence");
    proto.cade_api.rpc.Frame = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Frame.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Frame, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Frame.displayName = "proto.cade_api.rpc.Frame");
    proto.cade_api.rpc.Frame.MetricEntry = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Frame.MetricEntry, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Frame.MetricEntry.displayName = "proto.cade_api.rpc.Frame.MetricEntry");
    proto.cade_api.rpc.StoredPatchTimeEntry = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.StoredPatchTimeEntry.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.StoredPatchTimeEntry, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.StoredPatchTimeEntry.displayName = "proto.cade_api.rpc.StoredPatchTimeEntry");
    proto.cade_api.rpc.Event = function (t) {
        S.Message.initialize(this, t, 0, -1, null, proto.cade_api.rpc.Event.oneofGroups_)
    }
        ;
    re.inherits(proto.cade_api.rpc.Event, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Event.displayName = "proto.cade_api.rpc.Event");
    proto.cade_api.rpc.Event.EntityKilled = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Event.EntityKilled, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Event.EntityKilled.displayName = "proto.cade_api.rpc.Event.EntityKilled");
    proto.cade_api.rpc.Event.MarketTransaction = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Event.MarketTransaction, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Event.MarketTransaction.displayName = "proto.cade_api.rpc.Event.MarketTransaction");
    proto.cade_api.rpc.Event.Tribute = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Event.Tribute, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Event.Tribute.displayName = "proto.cade_api.rpc.Event.Tribute");
    proto.cade_api.rpc.Event.PlayerChat = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Event.PlayerChat, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Event.PlayerChat.displayName = "proto.cade_api.rpc.Event.PlayerChat");
    proto.cade_api.rpc.Event.CombatNotificationSound = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Event.CombatNotificationSound, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Event.CombatNotificationSound.displayName = "proto.cade_api.rpc.Event.CombatNotificationSound");
    proto.cade_api.rpc.Event.Damage = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Event.Damage, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Event.Damage.displayName = "proto.cade_api.rpc.Event.Damage");
    proto.cade_api.rpc.Event.MonkConversion = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Event.MonkConversion, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Event.MonkConversion.displayName = "proto.cade_api.rpc.Event.MonkConversion");
    proto.cade_api.rpc.Event.NotificationTrainDone = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Event.NotificationTrainDone, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Event.NotificationTrainDone.displayName = "proto.cade_api.rpc.Event.NotificationTrainDone");
    proto.cade_api.rpc.Event.NotificationResearchDone = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Event.NotificationResearchDone, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Event.NotificationResearchDone.displayName = "proto.cade_api.rpc.Event.NotificationResearchDone");
    proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied.displayName = "proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied");
    proto.cade_api.rpc.Event.NotificationWonder = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Event.NotificationWonder, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Event.NotificationWonder.displayName = "proto.cade_api.rpc.Event.NotificationWonder");
    proto.cade_api.rpc.Command = function (t) {
        S.Message.initialize(this, t, 0, 500, null, proto.cade_api.rpc.Command.oneofGroups_)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.displayName = "proto.cade_api.rpc.Command");
    proto.cade_api.rpc.Command.XyzUintPoint = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.XyzUintPoint, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.XyzUintPoint.displayName = "proto.cade_api.rpc.Command.XyzUintPoint");
    proto.cade_api.rpc.Command.XyzFloatPoint = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.XyzFloatPoint, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.XyzFloatPoint.displayName = "proto.cade_api.rpc.Command.XyzFloatPoint");
    proto.cade_api.rpc.Command.XyUintPoint = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.XyUintPoint, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.XyUintPoint.displayName = "proto.cade_api.rpc.Command.XyUintPoint");
    proto.cade_api.rpc.Command.XyFloatPoint = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.XyFloatPoint, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.XyFloatPoint.displayName = "proto.cade_api.rpc.Command.XyFloatPoint");
    proto.cade_api.rpc.Command.Interact = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.Interact.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Interact, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Interact.displayName = "proto.cade_api.rpc.Command.Interact");
    proto.cade_api.rpc.Command.Stop = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.Stop.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Stop, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Stop.displayName = "proto.cade_api.rpc.Command.Stop");
    proto.cade_api.rpc.Command.Work = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.Work.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Work, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Work.displayName = "proto.cade_api.rpc.Command.Work");
    proto.cade_api.rpc.Command.Move = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.Move.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Move, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Move.displayName = "proto.cade_api.rpc.Command.Move");
    proto.cade_api.rpc.Command.Create = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Create, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Create.displayName = "proto.cade_api.rpc.Command.Create");
    proto.cade_api.rpc.Command.AddAttribute = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.AddAttribute, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.AddAttribute.displayName = "proto.cade_api.rpc.Command.AddAttribute");
    proto.cade_api.rpc.Command.AiOrder = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.AiOrder.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.AiOrder, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.AiOrder.displayName = "proto.cade_api.rpc.Command.AiOrder");
    proto.cade_api.rpc.Command.Resign = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Resign, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Resign.displayName = "proto.cade_api.rpc.Command.Resign");
    proto.cade_api.rpc.Command.AddWaypoint = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.AddWaypoint.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.AddWaypoint, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.AddWaypoint.displayName = "proto.cade_api.rpc.Command.AddWaypoint");
    proto.cade_api.rpc.Command.Pause = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.Pause.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Pause, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Pause.displayName = "proto.cade_api.rpc.Command.Pause");
    proto.cade_api.rpc.Command.GroupWaypoint = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.GroupWaypoint.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.GroupWaypoint, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.GroupWaypoint.displayName = "proto.cade_api.rpc.Command.GroupWaypoint");
    proto.cade_api.rpc.Command.GroupAiOrder = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.GroupAiOrder.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.GroupAiOrder, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.GroupAiOrder.displayName = "proto.cade_api.rpc.Command.GroupAiOrder");
    proto.cade_api.rpc.Command.UnitAiState = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.UnitAiState.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.UnitAiState, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.UnitAiState.displayName = "proto.cade_api.rpc.Command.UnitAiState");
    proto.cade_api.rpc.Command.Guard = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.Guard.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Guard, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Guard.displayName = "proto.cade_api.rpc.Command.Guard");
    proto.cade_api.rpc.Command.Follow = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.Follow.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Follow, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Follow.displayName = "proto.cade_api.rpc.Command.Follow");
    proto.cade_api.rpc.Command.Patrol = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.Patrol.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Patrol, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Patrol.displayName = "proto.cade_api.rpc.Command.Patrol");
    proto.cade_api.rpc.Command.Scout = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.Scout.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Scout, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Scout.displayName = "proto.cade_api.rpc.Command.Scout");
    proto.cade_api.rpc.Command.FormFormation = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.FormFormation.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.FormFormation, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.FormFormation.displayName = "proto.cade_api.rpc.Command.FormFormation");
    proto.cade_api.rpc.Command.WheelFormation = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.WheelFormation, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.WheelFormation.displayName = "proto.cade_api.rpc.Command.WheelFormation");
    proto.cade_api.rpc.Command.AboutFaceFormation = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.AboutFaceFormation, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.AboutFaceFormation.displayName = "proto.cade_api.rpc.Command.AboutFaceFormation");
    proto.cade_api.rpc.Command.MultiplayerSave = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.MultiplayerSave, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.MultiplayerSave.displayName = "proto.cade_api.rpc.Command.MultiplayerSave");
    proto.cade_api.rpc.Command.GroupMultiWaypoints = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.GroupMultiWaypoints.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.GroupMultiWaypoints, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.GroupMultiWaypoints.displayName = "proto.cade_api.rpc.Command.GroupMultiWaypoints");
    proto.cade_api.rpc.Command.Chapter = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Chapter, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Chapter.displayName = "proto.cade_api.rpc.Command.Chapter");
    proto.cade_api.rpc.Command.AttackMove = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.AttackMove.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.AttackMove, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.AttackMove.displayName = "proto.cade_api.rpc.Command.AttackMove");
    proto.cade_api.rpc.Command.AttackMoveTarget = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.AttackMoveTarget.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.AttackMoveTarget, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.AttackMoveTarget.displayName = "proto.cade_api.rpc.Command.AttackMoveTarget");
    proto.cade_api.rpc.Command.Retreat = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.Retreat.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Retreat, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Retreat.displayName = "proto.cade_api.rpc.Command.Retreat");
    proto.cade_api.rpc.Command.UnitTypeAiState = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.UnitTypeAiState, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.UnitTypeAiState.displayName = "proto.cade_api.rpc.Command.UnitTypeAiState");
    proto.cade_api.rpc.Command.AutoScout = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.AutoScout.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.AutoScout, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.AutoScout.displayName = "proto.cade_api.rpc.Command.AutoScout");
    proto.cade_api.rpc.Command.StopAll = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.StopAll, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.StopAll.displayName = "proto.cade_api.rpc.Command.StopAll");
    proto.cade_api.rpc.Command.MoreTechs = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.MoreTechs, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.MoreTechs.displayName = "proto.cade_api.rpc.Command.MoreTechs");
    proto.cade_api.rpc.Command.TransformObject = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.TransformObject, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.TransformObject.displayName = "proto.cade_api.rpc.Command.TransformObject");
    proto.cade_api.rpc.Command.Trigger = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Trigger, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Trigger.displayName = "proto.cade_api.rpc.Command.Trigger");
    proto.cade_api.rpc.Command.TransformObjects = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.TransformObjects.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.TransformObjects, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.TransformObjects.displayName = "proto.cade_api.rpc.Command.TransformObjects");
    proto.cade_api.rpc.Command.Make = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Make, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Make.displayName = "proto.cade_api.rpc.Command.Make");
    proto.cade_api.rpc.Command.Research = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.Research.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Research, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Research.displayName = "proto.cade_api.rpc.Command.Research");
    proto.cade_api.rpc.Command.Build = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.Build.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Build, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Build.displayName = "proto.cade_api.rpc.Command.Build");
    proto.cade_api.rpc.Command.Game = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Game, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Game.displayName = "proto.cade_api.rpc.Command.Game");
    proto.cade_api.rpc.Command.Explore = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.Explore.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Explore, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Explore.displayName = "proto.cade_api.rpc.Command.Explore");
    proto.cade_api.rpc.Command.BuildWall = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.BuildWall.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.BuildWall, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.BuildWall.displayName = "proto.cade_api.rpc.Command.BuildWall");
    proto.cade_api.rpc.Command.CancelBuild = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.CancelBuild, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.CancelBuild.displayName = "proto.cade_api.rpc.Command.CancelBuild");
    proto.cade_api.rpc.Command.AttackGround = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.AttackGround.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.AttackGround, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.AttackGround.displayName = "proto.cade_api.rpc.Command.AttackGround");
    proto.cade_api.rpc.Command.GiveAttribute2 = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.GiveAttribute2, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.GiveAttribute2.displayName = "proto.cade_api.rpc.Command.GiveAttribute2");
    proto.cade_api.rpc.Command.TradeAttribute = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.TradeAttribute.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.TradeAttribute, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.TradeAttribute.displayName = "proto.cade_api.rpc.Command.TradeAttribute");
    proto.cade_api.rpc.Command.Repair = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.Repair.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Repair, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Repair.displayName = "proto.cade_api.rpc.Command.Repair");
    proto.cade_api.rpc.Command.Unload = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.Unload.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Unload, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Unload.displayName = "proto.cade_api.rpc.Command.Unload");
    proto.cade_api.rpc.Command.Gate = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Gate, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Gate.displayName = "proto.cade_api.rpc.Command.Gate");
    proto.cade_api.rpc.Command.Flare = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Flare, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Flare.displayName = "proto.cade_api.rpc.Command.Flare");
    proto.cade_api.rpc.Command.Special = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.Special.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Special, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Special.displayName = "proto.cade_api.rpc.Command.Special");
    proto.cade_api.rpc.Command.UnitOrder = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.UnitOrder.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.UnitOrder, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.UnitOrder.displayName = "proto.cade_api.rpc.Command.UnitOrder");
    proto.cade_api.rpc.Command.Diplomacy = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Diplomacy, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Diplomacy.displayName = "proto.cade_api.rpc.Command.Diplomacy");
    proto.cade_api.rpc.Command.Queue = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.Queue, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.Queue.displayName = "proto.cade_api.rpc.Command.Queue");
    proto.cade_api.rpc.Command.SetGatherPoint = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.SetGatherPoint.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.SetGatherPoint, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.SetGatherPoint.displayName = "proto.cade_api.rpc.Command.SetGatherPoint");
    proto.cade_api.rpc.Command.SetRetreatPoint = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.SetRetreatPoint, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.SetRetreatPoint.displayName = "proto.cade_api.rpc.Command.SetRetreatPoint");
    proto.cade_api.rpc.Command.SellCommodity = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.SellCommodity, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.SellCommodity.displayName = "proto.cade_api.rpc.Command.SellCommodity");
    proto.cade_api.rpc.Command.BuyCommodity = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.BuyCommodity, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.BuyCommodity.displayName = "proto.cade_api.rpc.Command.BuyCommodity");
    proto.cade_api.rpc.Command.UnitTransform = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.UnitTransform.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.UnitTransform, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.UnitTransform.displayName = "proto.cade_api.rpc.Command.UnitTransform");
    proto.cade_api.rpc.Command.DropRelic = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.DropRelic, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.DropRelic.displayName = "proto.cade_api.rpc.Command.DropRelic");
    proto.cade_api.rpc.Command.TownBell = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.TownBell, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.TownBell.displayName = "proto.cade_api.rpc.Command.TownBell");
    proto.cade_api.rpc.Command.GoBackToWork = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.GoBackToWork, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.GoBackToWork.displayName = "proto.cade_api.rpc.Command.GoBackToWork");
    proto.cade_api.rpc.Command.MultiQueue = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.MultiQueue.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.MultiQueue, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.MultiQueue.displayName = "proto.cade_api.rpc.Command.MultiQueue");
    proto.cade_api.rpc.Command.SetGatherState = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.SetGatherState.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.SetGatherState, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.SetGatherState.displayName = "proto.cade_api.rpc.Command.SetGatherState");
    proto.cade_api.rpc.Command.DeleteObjects = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.DeleteObjects.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.DeleteObjects, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.DeleteObjects.displayName = "proto.cade_api.rpc.Command.DeleteObjects");
    proto.cade_api.rpc.Command.ResetBuildings = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.ResetBuildings.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.ResetBuildings, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.ResetBuildings.displayName = "proto.cade_api.rpc.Command.ResetBuildings");
    proto.cade_api.rpc.Command.MultiGate = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.MultiGate.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.MultiGate, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.MultiGate.displayName = "proto.cade_api.rpc.Command.MultiGate");
    proto.cade_api.rpc.Command.GoBackToWork2 = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.GoBackToWork2.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.GoBackToWork2, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.GoBackToWork2.displayName = "proto.cade_api.rpc.Command.GoBackToWork2");
    proto.cade_api.rpc.Command.ChangePlayerName = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.ChangePlayerName, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.ChangePlayerName.displayName = "proto.cade_api.rpc.Command.ChangePlayerName");
    proto.cade_api.rpc.Command.SendAiSignal = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.SendAiSignal, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.SendAiSignal.displayName = "proto.cade_api.rpc.Command.SendAiSignal");
    proto.cade_api.rpc.Command.AiEffectAmount = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.AiEffectAmount, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.AiEffectAmount.displayName = "proto.cade_api.rpc.Command.AiEffectAmount");
    proto.cade_api.rpc.Command.AiEffectPercent = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.AiEffectPercent, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.AiEffectPercent.displayName = "proto.cade_api.rpc.Command.AiEffectPercent");
    proto.cade_api.rpc.Command.GiveAttributes = function (t) {
        S.Message.initialize(this, t, 0, -1, proto.cade_api.rpc.Command.GiveAttributes.repeatedFields_, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.GiveAttributes, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.GiveAttributes.displayName = "proto.cade_api.rpc.Command.GiveAttributes");
    proto.cade_api.rpc.Command.GiveAttributes.Attribute = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.GiveAttributes.Attribute, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.GiveAttributes.Attribute.displayName = "proto.cade_api.rpc.Command.GiveAttributes.Attribute");
    proto.cade_api.rpc.Command.UnknownCommand = function (t) {
        S.Message.initialize(this, t, 0, -1, null, null)
    }
        ;
    re.inherits(proto.cade_api.rpc.Command.UnknownCommand, S.Message);
    re.DEBUG && !COMPILED && (proto.cade_api.rpc.Command.UnknownCommand.displayName = "proto.cade_api.rpc.Command.UnknownCommand");
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.InfoRequest.prototype.toObject = function (t) {
        return proto.cade_api.rpc.InfoRequest.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.InfoRequest.toObject = function (t, r) {
            var i, n = {};
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.InfoRequest.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.InfoRequest;
        return proto.cade_api.rpc.InfoRequest.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.InfoRequest.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.InfoRequest.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.InfoRequest.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.InfoRequest.serializeBinaryToWriter = function (t, r) {
        var i = void 0
    }
        ;
    proto.cade_api.rpc.InfoResponse.repeatedFields_ = [4, 5];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.InfoResponse.prototype.toObject = function (t) {
        return proto.cade_api.rpc.InfoResponse.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.InfoResponse.toObject = function (t, r) {
            var i, n = {
                gameversion: S.Message.getFieldWithDefault(r, 1, 0),
                apiversion: S.Message.getFieldWithDefault(r, 2, 0),
                basedirectory: S.Message.getFieldWithDefault(r, 3, ""),
                enabledmoddirectoriesList: (i = S.Message.getRepeatedField(r, 4)) == null ? void 0 : i,
                disabledmoddirectoriesList: (i = S.Message.getRepeatedField(r, 5)) == null ? void 0 : i,
                userdirectory: S.Message.getFieldWithDefault(r, 6, ""),
                languagecode: S.Message.getFieldWithDefault(r, 7, ""),
                selectedgame: (i = r.getSelectedgame()) && proto.cade_api.rpc.SelectedGameInfo.toObject(t, i)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.InfoResponse.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.InfoResponse;
        return proto.cade_api.rpc.InfoResponse.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.InfoResponse.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setGameversion(n);
                    break;
                case 2:
                    var n = r.readUint32();
                    t.setApiversion(n);
                    break;
                case 3:
                    var n = r.readString();
                    t.setBasedirectory(n);
                    break;
                case 4:
                    var n = r.readString();
                    t.addEnabledmoddirectories(n);
                    break;
                case 5:
                    var n = r.readString();
                    t.addDisabledmoddirectories(n);
                    break;
                case 6:
                    var n = r.readString();
                    t.setUserdirectory(n);
                    break;
                case 7:
                    var n = r.readString();
                    t.setLanguagecode(n);
                    break;
                case 8:
                    var n = new proto.cade_api.rpc.SelectedGameInfo;
                    r.readMessage(n, proto.cade_api.rpc.SelectedGameInfo.deserializeBinaryFromReader),
                        t.setSelectedgame(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.InfoResponse.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.InfoResponse.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getGameversion(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getApiversion(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getBasedirectory(),
            i.length > 0 && r.writeString(3, i),
            i = t.getEnabledmoddirectoriesList(),
            i.length > 0 && r.writeRepeatedString(4, i),
            i = t.getDisabledmoddirectoriesList(),
            i.length > 0 && r.writeRepeatedString(5, i),
            i = t.getUserdirectory(),
            i.length > 0 && r.writeString(6, i),
            i = t.getLanguagecode(),
            i.length > 0 && r.writeString(7, i),
            i = t.getSelectedgame(),
            i != null && r.writeMessage(8, i, proto.cade_api.rpc.SelectedGameInfo.serializeBinaryToWriter)
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.getGameversion = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.setGameversion = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.getApiversion = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.setApiversion = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.getBasedirectory = function () {
        return S.Message.getFieldWithDefault(this, 3, "")
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.setBasedirectory = function (t) {
        return S.Message.setProto3StringField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.getEnabledmoddirectoriesList = function () {
        return S.Message.getRepeatedField(this, 4)
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.setEnabledmoddirectoriesList = function (t) {
        return S.Message.setField(this, 4, t || [])
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.addEnabledmoddirectories = function (t, r) {
        return S.Message.addToRepeatedField(this, 4, t, r)
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.clearEnabledmoddirectoriesList = function () {
        return this.setEnabledmoddirectoriesList([])
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.getDisabledmoddirectoriesList = function () {
        return S.Message.getRepeatedField(this, 5)
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.setDisabledmoddirectoriesList = function (t) {
        return S.Message.setField(this, 5, t || [])
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.addDisabledmoddirectories = function (t, r) {
        return S.Message.addToRepeatedField(this, 5, t, r)
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.clearDisabledmoddirectoriesList = function () {
        return this.setDisabledmoddirectoriesList([])
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.getUserdirectory = function () {
        return S.Message.getFieldWithDefault(this, 6, "")
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.setUserdirectory = function (t) {
        return S.Message.setProto3StringField(this, 6, t)
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.getLanguagecode = function () {
        return S.Message.getFieldWithDefault(this, 7, "")
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.setLanguagecode = function (t) {
        return S.Message.setProto3StringField(this, 7, t)
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.getSelectedgame = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.SelectedGameInfo, 8)
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.setSelectedgame = function (t) {
        return S.Message.setWrapperField(this, 8, t)
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.clearSelectedgame = function () {
        return this.setSelectedgame(void 0)
    }
        ;
    proto.cade_api.rpc.InfoResponse.prototype.hasSelectedgame = function () {
        return S.Message.getField(this, 8) != null
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.PauseRequest.prototype.toObject = function (t) {
        return proto.cade_api.rpc.PauseRequest.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.PauseRequest.toObject = function (t, r) {
            var i, n = {
                paused: S.Message.getBooleanFieldWithDefault(r, 1, !1)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.PauseRequest.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.PauseRequest;
        return proto.cade_api.rpc.PauseRequest.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.PauseRequest.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readBool();
                    t.setPaused(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.PauseRequest.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.PauseRequest.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.PauseRequest.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getPaused(),
            i && r.writeBool(1, i)
    }
        ;
    proto.cade_api.rpc.PauseRequest.prototype.getPaused = function () {
        return S.Message.getBooleanFieldWithDefault(this, 1, !1)
    }
        ;
    proto.cade_api.rpc.PauseRequest.prototype.setPaused = function (t) {
        return S.Message.setProto3BooleanField(this, 1, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.PauseResponse.prototype.toObject = function (t) {
        return proto.cade_api.rpc.PauseResponse.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.PauseResponse.toObject = function (t, r) {
            var i, n = {
                success: S.Message.getBooleanFieldWithDefault(r, 1, !1),
                changed: S.Message.getBooleanFieldWithDefault(r, 2, !1),
                paused: S.Message.getBooleanFieldWithDefault(r, 3, !1)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.PauseResponse.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.PauseResponse;
        return proto.cade_api.rpc.PauseResponse.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.PauseResponse.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readBool();
                    t.setSuccess(n);
                    break;
                case 2:
                    var n = r.readBool();
                    t.setChanged(n);
                    break;
                case 3:
                    var n = r.readBool();
                    t.setPaused(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.PauseResponse.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.PauseResponse.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.PauseResponse.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getSuccess(),
            i && r.writeBool(1, i),
            i = t.getChanged(),
            i && r.writeBool(2, i),
            i = t.getPaused(),
            i && r.writeBool(3, i)
    }
        ;
    proto.cade_api.rpc.PauseResponse.prototype.getSuccess = function () {
        return S.Message.getBooleanFieldWithDefault(this, 1, !1)
    }
        ;
    proto.cade_api.rpc.PauseResponse.prototype.setSuccess = function (t) {
        return S.Message.setProto3BooleanField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.PauseResponse.prototype.getChanged = function () {
        return S.Message.getBooleanFieldWithDefault(this, 2, !1)
    }
        ;
    proto.cade_api.rpc.PauseResponse.prototype.setChanged = function (t) {
        return S.Message.setProto3BooleanField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.PauseResponse.prototype.getPaused = function () {
        return S.Message.getBooleanFieldWithDefault(this, 3, !1)
    }
        ;
    proto.cade_api.rpc.PauseResponse.prototype.setPaused = function (t) {
        return S.Message.setProto3BooleanField(this, 3, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.SetFogOfWarRequest.prototype.toObject = function (t) {
        return proto.cade_api.rpc.SetFogOfWarRequest.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.SetFogOfWarRequest.toObject = function (t, r) {
            var i, n = {
                fogofwar: S.Message.getBooleanFieldWithDefault(r, 1, !1)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.SetFogOfWarRequest.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.SetFogOfWarRequest;
        return proto.cade_api.rpc.SetFogOfWarRequest.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.SetFogOfWarRequest.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readBool();
                    t.setFogofwar(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.SetFogOfWarRequest.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.SetFogOfWarRequest.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.SetFogOfWarRequest.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getFogofwar(),
            i && r.writeBool(1, i)
    }
        ;
    proto.cade_api.rpc.SetFogOfWarRequest.prototype.getFogofwar = function () {
        return S.Message.getBooleanFieldWithDefault(this, 1, !1)
    }
        ;
    proto.cade_api.rpc.SetFogOfWarRequest.prototype.setFogofwar = function (t) {
        return S.Message.setProto3BooleanField(this, 1, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.SetFogOfWarResponse.prototype.toObject = function (t) {
        return proto.cade_api.rpc.SetFogOfWarResponse.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.SetFogOfWarResponse.toObject = function (t, r) {
            var i, n = {
                success: S.Message.getBooleanFieldWithDefault(r, 1, !1),
                changed: S.Message.getBooleanFieldWithDefault(r, 2, !1),
                fogofwar: S.Message.getBooleanFieldWithDefault(r, 3, !1)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.SetFogOfWarResponse.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.SetFogOfWarResponse;
        return proto.cade_api.rpc.SetFogOfWarResponse.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.SetFogOfWarResponse.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readBool();
                    t.setSuccess(n);
                    break;
                case 2:
                    var n = r.readBool();
                    t.setChanged(n);
                    break;
                case 3:
                    var n = r.readBool();
                    t.setFogofwar(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.SetFogOfWarResponse.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.SetFogOfWarResponse.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.SetFogOfWarResponse.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getSuccess(),
            i && r.writeBool(1, i),
            i = t.getChanged(),
            i && r.writeBool(2, i),
            i = t.getFogofwar(),
            i && r.writeBool(3, i)
    }
        ;
    proto.cade_api.rpc.SetFogOfWarResponse.prototype.getSuccess = function () {
        return S.Message.getBooleanFieldWithDefault(this, 1, !1)
    }
        ;
    proto.cade_api.rpc.SetFogOfWarResponse.prototype.setSuccess = function (t) {
        return S.Message.setProto3BooleanField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.SetFogOfWarResponse.prototype.getChanged = function () {
        return S.Message.getBooleanFieldWithDefault(this, 2, !1)
    }
        ;
    proto.cade_api.rpc.SetFogOfWarResponse.prototype.setChanged = function (t) {
        return S.Message.setProto3BooleanField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.SetFogOfWarResponse.prototype.getFogofwar = function () {
        return S.Message.getBooleanFieldWithDefault(this, 3, !1)
    }
        ;
    proto.cade_api.rpc.SetFogOfWarResponse.prototype.setFogofwar = function (t) {
        return S.Message.setProto3BooleanField(this, 3, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.SetPerspectiveRequest.prototype.toObject = function (t) {
        return proto.cade_api.rpc.SetPerspectiveRequest.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.SetPerspectiveRequest.toObject = function (t, r) {
            var i, n = {
                playerid: S.Message.getFieldWithDefault(r, 1, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.SetPerspectiveRequest.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.SetPerspectiveRequest;
        return proto.cade_api.rpc.SetPerspectiveRequest.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.SetPerspectiveRequest.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setPlayerid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.SetPerspectiveRequest.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.SetPerspectiveRequest.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.SetPerspectiveRequest.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getPlayerid(),
            i !== 0 && r.writeInt32(1, i)
    }
        ;
    proto.cade_api.rpc.SetPerspectiveRequest.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.SetPerspectiveRequest.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.SetPerspectiveResponse.prototype.toObject = function (t) {
        return proto.cade_api.rpc.SetPerspectiveResponse.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.SetPerspectiveResponse.toObject = function (t, r) {
            var i, n = {
                success: S.Message.getBooleanFieldWithDefault(r, 1, !1),
                playerid: S.Message.getFieldWithDefault(r, 2, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.SetPerspectiveResponse.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.SetPerspectiveResponse;
        return proto.cade_api.rpc.SetPerspectiveResponse.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.SetPerspectiveResponse.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readBool();
                    t.setSuccess(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setPlayerid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.SetPerspectiveResponse.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.SetPerspectiveResponse.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.SetPerspectiveResponse.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getSuccess(),
            i && r.writeBool(1, i),
            i = t.getPlayerid(),
            i !== 0 && r.writeInt32(2, i)
    }
        ;
    proto.cade_api.rpc.SetPerspectiveResponse.prototype.getSuccess = function () {
        return S.Message.getBooleanFieldWithDefault(this, 1, !1)
    }
        ;
    proto.cade_api.rpc.SetPerspectiveResponse.prototype.setSuccess = function (t) {
        return S.Message.setProto3BooleanField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.SetPerspectiveResponse.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.SetPerspectiveResponse.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.SetGameSpeedRequest.prototype.toObject = function (t) {
        return proto.cade_api.rpc.SetGameSpeedRequest.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.SetGameSpeedRequest.toObject = function (t, r) {
            var i, n = {
                speed: S.Message.getFieldWithDefault(r, 1, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.SetGameSpeedRequest.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.SetGameSpeedRequest;
        return proto.cade_api.rpc.SetGameSpeedRequest.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.SetGameSpeedRequest.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readEnum();
                    t.setSpeed(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.SetGameSpeedRequest.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.SetGameSpeedRequest.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.SetGameSpeedRequest.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getSpeed(),
            i !== 0 && r.writeEnum(1, i)
    }
        ;
    proto.cade_api.rpc.SetGameSpeedRequest.Speed = {
        SLOW: 0,
        NORMAL: 1,
        FAST: 2,
        EXTRA_FAST: 3
    };
    proto.cade_api.rpc.SetGameSpeedRequest.prototype.getSpeed = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.SetGameSpeedRequest.prototype.setSpeed = function (t) {
        return S.Message.setProto3EnumField(this, 1, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.SetGameSpeedResponse.prototype.toObject = function (t) {
        return proto.cade_api.rpc.SetGameSpeedResponse.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.SetGameSpeedResponse.toObject = function (t, r) {
            var i, n = {
                success: S.Message.getBooleanFieldWithDefault(r, 1, !1)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.SetGameSpeedResponse.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.SetGameSpeedResponse;
        return proto.cade_api.rpc.SetGameSpeedResponse.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.SetGameSpeedResponse.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readBool();
                    t.setSuccess(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.SetGameSpeedResponse.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.SetGameSpeedResponse.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.SetGameSpeedResponse.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getSuccess(),
            i && r.writeBool(1, i)
    }
        ;
    proto.cade_api.rpc.SetGameSpeedResponse.prototype.getSuccess = function () {
        return S.Message.getBooleanFieldWithDefault(this, 1, !1)
    }
        ;
    proto.cade_api.rpc.SetGameSpeedResponse.prototype.setSuccess = function (t) {
        return S.Message.setProto3BooleanField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.oneofGroups_ = [[1, 2, 4, 5]];
    proto.cade_api.rpc.LoadGameRequest.RequestCase = {
        REQUEST_NOT_SET: 0,
        SPECTATELOBBY: 1,
        LOADREPLAY: 2,
        RESTARTASREPLAY: 4,
        CANCEL: 5
    };
    proto.cade_api.rpc.LoadGameRequest.prototype.getRequestCase = function () {
        return S.Message.computeOneofCase(this, proto.cade_api.rpc.LoadGameRequest.oneofGroups_[0])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.LoadGameRequest.prototype.toObject = function (t) {
        return proto.cade_api.rpc.LoadGameRequest.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.LoadGameRequest.toObject = function (t, r) {
            var i, n = {
                spectatelobby: (i = r.getSpectatelobby()) && proto.cade_api.rpc.LoadGameRequest.SpectateLobby.toObject(t, i),
                loadreplay: (i = r.getLoadreplay()) && proto.cade_api.rpc.LoadGameRequest.LoadReplay.toObject(t, i),
                restartasreplay: (i = r.getRestartasreplay()) && proto.cade_api.rpc.LoadGameRequest.RestartAsReplay.toObject(t, i),
                cancel: (i = r.getCancel()) && proto.cade_api.rpc.LoadGameRequest.Cancel.toObject(t, i),
                confirm: S.Message.getBooleanFieldWithDefault(r, 3, !1),
                timeoutseconds: S.Message.getFieldWithDefault(r, 6, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.LoadGameRequest.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.LoadGameRequest;
        return proto.cade_api.rpc.LoadGameRequest.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = new proto.cade_api.rpc.LoadGameRequest.SpectateLobby;
                    r.readMessage(n, proto.cade_api.rpc.LoadGameRequest.SpectateLobby.deserializeBinaryFromReader),
                        t.setSpectatelobby(n);
                    break;
                case 2:
                    var n = new proto.cade_api.rpc.LoadGameRequest.LoadReplay;
                    r.readMessage(n, proto.cade_api.rpc.LoadGameRequest.LoadReplay.deserializeBinaryFromReader),
                        t.setLoadreplay(n);
                    break;
                case 4:
                    var n = new proto.cade_api.rpc.LoadGameRequest.RestartAsReplay;
                    r.readMessage(n, proto.cade_api.rpc.LoadGameRequest.RestartAsReplay.deserializeBinaryFromReader),
                        t.setRestartasreplay(n);
                    break;
                case 5:
                    var n = new proto.cade_api.rpc.LoadGameRequest.Cancel;
                    r.readMessage(n, proto.cade_api.rpc.LoadGameRequest.Cancel.deserializeBinaryFromReader),
                        t.setCancel(n);
                    break;
                case 3:
                    var n = r.readBool();
                    t.setConfirm(n);
                    break;
                case 6:
                    var n = r.readInt32();
                    t.setTimeoutseconds(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.LoadGameRequest.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getSpectatelobby(),
            i != null && r.writeMessage(1, i, proto.cade_api.rpc.LoadGameRequest.SpectateLobby.serializeBinaryToWriter),
            i = t.getLoadreplay(),
            i != null && r.writeMessage(2, i, proto.cade_api.rpc.LoadGameRequest.LoadReplay.serializeBinaryToWriter),
            i = t.getRestartasreplay(),
            i != null && r.writeMessage(4, i, proto.cade_api.rpc.LoadGameRequest.RestartAsReplay.serializeBinaryToWriter),
            i = t.getCancel(),
            i != null && r.writeMessage(5, i, proto.cade_api.rpc.LoadGameRequest.Cancel.serializeBinaryToWriter),
            i = t.getConfirm(),
            i && r.writeBool(3, i),
            i = t.getTimeoutseconds(),
            i !== 0 && r.writeInt32(6, i)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.LoadGameRequest.SpectateLobby.prototype.toObject = function (t) {
        return proto.cade_api.rpc.LoadGameRequest.SpectateLobby.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.LoadGameRequest.SpectateLobby.toObject = function (t, r) {
            var i, n = {
                lobbyid: S.Message.getFieldWithDefault(r, 1, "")
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.LoadGameRequest.SpectateLobby.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.LoadGameRequest.SpectateLobby;
        return proto.cade_api.rpc.LoadGameRequest.SpectateLobby.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.SpectateLobby.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readString();
                    t.setLobbyid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.SpectateLobby.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.LoadGameRequest.SpectateLobby.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.SpectateLobby.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getLobbyid(),
            i.length > 0 && r.writeString(1, i)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.SpectateLobby.prototype.getLobbyid = function () {
        return S.Message.getFieldWithDefault(this, 1, "")
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.SpectateLobby.prototype.setLobbyid = function (t) {
        return S.Message.setProto3StringField(this, 1, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.LoadGameRequest.LoadReplay.prototype.toObject = function (t) {
        return proto.cade_api.rpc.LoadGameRequest.LoadReplay.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.LoadGameRequest.LoadReplay.toObject = function (t, r) {
            var i, n = {
                filepath: S.Message.getFieldWithDefault(r, 1, ""),
                cloud: S.Message.getBooleanFieldWithDefault(r, 2, !1)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.LoadGameRequest.LoadReplay.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.LoadGameRequest.LoadReplay;
        return proto.cade_api.rpc.LoadGameRequest.LoadReplay.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.LoadReplay.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readString();
                    t.setFilepath(n);
                    break;
                case 2:
                    var n = r.readBool();
                    t.setCloud(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.LoadReplay.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.LoadGameRequest.LoadReplay.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.LoadReplay.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getFilepath(),
            i.length > 0 && r.writeString(1, i),
            i = t.getCloud(),
            i && r.writeBool(2, i)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.LoadReplay.prototype.getFilepath = function () {
        return S.Message.getFieldWithDefault(this, 1, "")
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.LoadReplay.prototype.setFilepath = function (t) {
        return S.Message.setProto3StringField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.LoadReplay.prototype.getCloud = function () {
        return S.Message.getBooleanFieldWithDefault(this, 2, !1)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.LoadReplay.prototype.setCloud = function (t) {
        return S.Message.setProto3BooleanField(this, 2, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.LoadGameRequest.RestartAsReplay.prototype.toObject = function (t) {
        return proto.cade_api.rpc.LoadGameRequest.RestartAsReplay.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.LoadGameRequest.RestartAsReplay.toObject = function (t, r) {
            var i, n = {};
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.LoadGameRequest.RestartAsReplay.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.LoadGameRequest.RestartAsReplay;
        return proto.cade_api.rpc.LoadGameRequest.RestartAsReplay.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.RestartAsReplay.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.RestartAsReplay.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.LoadGameRequest.RestartAsReplay.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.RestartAsReplay.serializeBinaryToWriter = function (t, r) {
        var i = void 0
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.LoadGameRequest.Cancel.prototype.toObject = function (t) {
        return proto.cade_api.rpc.LoadGameRequest.Cancel.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.LoadGameRequest.Cancel.toObject = function (t, r) {
            var i, n = {};
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.LoadGameRequest.Cancel.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.LoadGameRequest.Cancel;
        return proto.cade_api.rpc.LoadGameRequest.Cancel.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.Cancel.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.Cancel.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.LoadGameRequest.Cancel.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.Cancel.serializeBinaryToWriter = function (t, r) {
        var i = void 0
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.prototype.getSpectatelobby = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.LoadGameRequest.SpectateLobby, 1)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.prototype.setSpectatelobby = function (t) {
        return S.Message.setOneofWrapperField(this, 1, proto.cade_api.rpc.LoadGameRequest.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.prototype.clearSpectatelobby = function () {
        return this.setSpectatelobby(void 0)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.prototype.hasSpectatelobby = function () {
        return S.Message.getField(this, 1) != null
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.prototype.getLoadreplay = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.LoadGameRequest.LoadReplay, 2)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.prototype.setLoadreplay = function (t) {
        return S.Message.setOneofWrapperField(this, 2, proto.cade_api.rpc.LoadGameRequest.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.prototype.clearLoadreplay = function () {
        return this.setLoadreplay(void 0)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.prototype.hasLoadreplay = function () {
        return S.Message.getField(this, 2) != null
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.prototype.getRestartasreplay = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.LoadGameRequest.RestartAsReplay, 4)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.prototype.setRestartasreplay = function (t) {
        return S.Message.setOneofWrapperField(this, 4, proto.cade_api.rpc.LoadGameRequest.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.prototype.clearRestartasreplay = function () {
        return this.setRestartasreplay(void 0)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.prototype.hasRestartasreplay = function () {
        return S.Message.getField(this, 4) != null
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.prototype.getCancel = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.LoadGameRequest.Cancel, 5)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.prototype.setCancel = function (t) {
        return S.Message.setOneofWrapperField(this, 5, proto.cade_api.rpc.LoadGameRequest.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.prototype.clearCancel = function () {
        return this.setCancel(void 0)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.prototype.hasCancel = function () {
        return S.Message.getField(this, 5) != null
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.prototype.getConfirm = function () {
        return S.Message.getBooleanFieldWithDefault(this, 3, !1)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.prototype.setConfirm = function (t) {
        return S.Message.setProto3BooleanField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.prototype.getTimeoutseconds = function () {
        return S.Message.getFieldWithDefault(this, 6, 0)
    }
        ;
    proto.cade_api.rpc.LoadGameRequest.prototype.setTimeoutseconds = function (t) {
        return S.Message.setProto3IntField(this, 6, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.LoadGameResponse.prototype.toObject = function (t) {
        return proto.cade_api.rpc.LoadGameResponse.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.LoadGameResponse.toObject = function (t, r) {
            var i, n = {
                code: S.Message.getFieldWithDefault(r, 1, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.LoadGameResponse.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.LoadGameResponse;
        return proto.cade_api.rpc.LoadGameResponse.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.LoadGameResponse.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readEnum();
                    t.setCode(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.LoadGameResponse.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.LoadGameResponse.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.LoadGameResponse.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getCode(),
            i !== 0 && r.writeEnum(1, i)
    }
        ;
    proto.cade_api.rpc.LoadGameResponse.Code = {
        SUCCESS: 0,
        FAILED_PLAYING_RANKED: 1,
        FAILED_PLAYING_MULTIPLAYER: 2,
        FAILED_PLAYING_NEED_CONFIRM: 3,
        FAILED_UNKNOWN_FILE_EXTENSION: 4,
        FAILED_NOT_A_RECORDED_GAME: 5,
        FAILED_TO_FETCH_FILE: 6,
        FAILED_TO_PARSE_FILE: 7,
        FAILED_TO_PARSE_STRING: 8,
        FAILED_UNKNOWN_ERROR: 9,
        FAILED_INVALID_MATCH_ID: 10,
        FAILED_START_OBSERVING: 11,
        FAILED_TIMEOUT: 12,
        CANCELLED: 13
    };
    proto.cade_api.rpc.LoadGameResponse.prototype.getCode = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.LoadGameResponse.prototype.setCode = function (t) {
        return S.Message.setProto3EnumField(this, 1, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.AccessFlagRequest.prototype.toObject = function (t) {
        return proto.cade_api.rpc.AccessFlagRequest.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.AccessFlagRequest.toObject = function (t, r) {
            var i, n = {
                flag: S.Message.getFieldWithDefault(r, 1, 0),
                set: S.Message.getBooleanFieldWithDefault(r, 2, !1),
                value: S.Message.getBooleanFieldWithDefault(r, 3, !1)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.AccessFlagRequest.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.AccessFlagRequest;
        return proto.cade_api.rpc.AccessFlagRequest.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.AccessFlagRequest.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readEnum();
                    t.setFlag(n);
                    break;
                case 2:
                    var n = r.readBool();
                    t.setSet(n);
                    break;
                case 3:
                    var n = r.readBool();
                    t.setValue(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.AccessFlagRequest.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.AccessFlagRequest.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.AccessFlagRequest.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getFlag(),
            i !== 0 && r.writeEnum(1, i),
            i = t.getSet(),
            i && r.writeBool(2, i),
            i = t.getValue(),
            i && r.writeBool(3, i)
    }
        ;
    proto.cade_api.rpc.AccessFlagRequest.Flag = {
        DISABLE_CAPTUREAGE_WARNINGS: 0
    };
    proto.cade_api.rpc.AccessFlagRequest.prototype.getFlag = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.AccessFlagRequest.prototype.setFlag = function (t) {
        return S.Message.setProto3EnumField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.AccessFlagRequest.prototype.getSet = function () {
        return S.Message.getBooleanFieldWithDefault(this, 2, !1)
    }
        ;
    proto.cade_api.rpc.AccessFlagRequest.prototype.setSet = function (t) {
        return S.Message.setProto3BooleanField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.AccessFlagRequest.prototype.getValue = function () {
        return S.Message.getBooleanFieldWithDefault(this, 3, !1)
    }
        ;
    proto.cade_api.rpc.AccessFlagRequest.prototype.setValue = function (t) {
        return S.Message.setProto3BooleanField(this, 3, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.AccessFlagResponse.prototype.toObject = function (t) {
        return proto.cade_api.rpc.AccessFlagResponse.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.AccessFlagResponse.toObject = function (t, r) {
            var i, n = {
                success: S.Message.getBooleanFieldWithDefault(r, 1, !1),
                value: S.Message.getBooleanFieldWithDefault(r, 2, !1)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.AccessFlagResponse.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.AccessFlagResponse;
        return proto.cade_api.rpc.AccessFlagResponse.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.AccessFlagResponse.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readBool();
                    t.setSuccess(n);
                    break;
                case 2:
                    var n = r.readBool();
                    t.setValue(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.AccessFlagResponse.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.AccessFlagResponse.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.AccessFlagResponse.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getSuccess(),
            i && r.writeBool(1, i),
            i = t.getValue(),
            i && r.writeBool(2, i)
    }
        ;
    proto.cade_api.rpc.AccessFlagResponse.prototype.getSuccess = function () {
        return S.Message.getBooleanFieldWithDefault(this, 1, !1)
    }
        ;
    proto.cade_api.rpc.AccessFlagResponse.prototype.setSuccess = function (t) {
        return S.Message.setProto3BooleanField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.AccessFlagResponse.prototype.getValue = function () {
        return S.Message.getBooleanFieldWithDefault(this, 2, !1)
    }
        ;
    proto.cade_api.rpc.AccessFlagResponse.prototype.setValue = function (t) {
        return S.Message.setProto3BooleanField(this, 2, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.WindowState.prototype.toObject = function (t) {
        return proto.cade_api.rpc.WindowState.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.WindowState.toObject = function (t, r) {
            var i, n = {
                mode: S.Message.getFieldWithDefault(r, 1, 0),
                foreground: S.Message.getBooleanFieldWithDefault(r, 2, !1),
                focus: S.Message.getBooleanFieldWithDefault(r, 3, !1),
                hwnd: S.Message.getFieldWithDefault(r, 4, ""),
                width: S.Message.getFieldWithDefault(r, 5, 0),
                height: S.Message.getFieldWithDefault(r, 6, 0),
                renderscale: S.Message.getFloatingPointFieldWithDefault(r, 7, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.WindowState.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.WindowState;
        return proto.cade_api.rpc.WindowState.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.WindowState.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readEnum();
                    t.setMode(n);
                    break;
                case 2:
                    var n = r.readBool();
                    t.setForeground(n);
                    break;
                case 3:
                    var n = r.readBool();
                    t.setFocus(n);
                    break;
                case 4:
                    var n = r.readString();
                    t.setHwnd(n);
                    break;
                case 5:
                    var n = r.readUint32();
                    t.setWidth(n);
                    break;
                case 6:
                    var n = r.readUint32();
                    t.setHeight(n);
                    break;
                case 7:
                    var n = r.readFloat();
                    t.setRenderscale(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.WindowState.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.WindowState.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.WindowState.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getMode(),
            i !== 0 && r.writeEnum(1, i),
            i = t.getForeground(),
            i && r.writeBool(2, i),
            i = t.getFocus(),
            i && r.writeBool(3, i),
            i = t.getHwnd(),
            i.length > 0 && r.writeString(4, i),
            i = t.getWidth(),
            i !== 0 && r.writeUint32(5, i),
            i = t.getHeight(),
            i !== 0 && r.writeUint32(6, i),
            i = t.getRenderscale(),
            i !== 0 && r.writeFloat(7, i)
    }
        ;
    proto.cade_api.rpc.WindowState.Mode = {
        NO_WINDOW: 0,
        NORMAL: 1,
        MINIMIZED: 2,
        MAXIMIZED: 3,
        FULL_SCREEN: 4,
        FULL_DESKTOP: 5
    };
    proto.cade_api.rpc.WindowState.prototype.getMode = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.WindowState.prototype.setMode = function (t) {
        return S.Message.setProto3EnumField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.WindowState.prototype.getForeground = function () {
        return S.Message.getBooleanFieldWithDefault(this, 2, !1)
    }
        ;
    proto.cade_api.rpc.WindowState.prototype.setForeground = function (t) {
        return S.Message.setProto3BooleanField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.WindowState.prototype.getFocus = function () {
        return S.Message.getBooleanFieldWithDefault(this, 3, !1)
    }
        ;
    proto.cade_api.rpc.WindowState.prototype.setFocus = function (t) {
        return S.Message.setProto3BooleanField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.WindowState.prototype.getHwnd = function () {
        return S.Message.getFieldWithDefault(this, 4, "")
    }
        ;
    proto.cade_api.rpc.WindowState.prototype.setHwnd = function (t) {
        return S.Message.setProto3StringField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.WindowState.prototype.getWidth = function () {
        return S.Message.getFieldWithDefault(this, 5, 0)
    }
        ;
    proto.cade_api.rpc.WindowState.prototype.setWidth = function (t) {
        return S.Message.setProto3IntField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.WindowState.prototype.getHeight = function () {
        return S.Message.getFieldWithDefault(this, 6, 0)
    }
        ;
    proto.cade_api.rpc.WindowState.prototype.setHeight = function (t) {
        return S.Message.setProto3IntField(this, 6, t)
    }
        ;
    proto.cade_api.rpc.WindowState.prototype.getRenderscale = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 7, 0)
    }
        ;
    proto.cade_api.rpc.WindowState.prototype.setRenderscale = function (t) {
        return S.Message.setProto3FloatField(this, 7, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.ChangeWindowStateRequest.prototype.toObject = function (t) {
        return proto.cade_api.rpc.ChangeWindowStateRequest.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.ChangeWindowStateRequest.toObject = function (t, r) {
            var i, n = {
                modechange: S.Message.getFieldWithDefault(r, 1, 0),
                setforeground: S.Message.getBooleanFieldWithDefault(r, 2, !1),
                setfocus: S.Message.getBooleanFieldWithDefault(r, 3, !1),
                setrenderscale: S.Message.getFloatingPointFieldWithDefault(r, 4, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.ChangeWindowStateRequest.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.ChangeWindowStateRequest;
        return proto.cade_api.rpc.ChangeWindowStateRequest.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.ChangeWindowStateRequest.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readEnum();
                    t.setModechange(n);
                    break;
                case 2:
                    var n = r.readBool();
                    t.setSetforeground(n);
                    break;
                case 3:
                    var n = r.readBool();
                    t.setSetfocus(n);
                    break;
                case 4:
                    var n = r.readFloat();
                    t.setSetrenderscale(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.ChangeWindowStateRequest.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.ChangeWindowStateRequest.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.ChangeWindowStateRequest.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getModechange(),
            i !== 0 && r.writeEnum(1, i),
            i = t.getSetforeground(),
            i && r.writeBool(2, i),
            i = t.getSetfocus(),
            i && r.writeBool(3, i),
            i = t.getSetrenderscale(),
            i !== 0 && r.writeFloat(4, i)
    }
        ;
    proto.cade_api.rpc.ChangeWindowStateRequest.ModeChange = {
        NONE: 0,
        TO_NORMAL: 1,
        TO_MINIMIZED: 2,
        TO_MAXIMIZED: 3,
        TO_FULLSCREEN: 4,
        RESTORE_ORIGINAL: 5
    };
    proto.cade_api.rpc.ChangeWindowStateRequest.prototype.getModechange = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.ChangeWindowStateRequest.prototype.setModechange = function (t) {
        return S.Message.setProto3EnumField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.ChangeWindowStateRequest.prototype.getSetforeground = function () {
        return S.Message.getBooleanFieldWithDefault(this, 2, !1)
    }
        ;
    proto.cade_api.rpc.ChangeWindowStateRequest.prototype.setSetforeground = function (t) {
        return S.Message.setProto3BooleanField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.ChangeWindowStateRequest.prototype.getSetfocus = function () {
        return S.Message.getBooleanFieldWithDefault(this, 3, !1)
    }
        ;
    proto.cade_api.rpc.ChangeWindowStateRequest.prototype.setSetfocus = function (t) {
        return S.Message.setProto3BooleanField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.ChangeWindowStateRequest.prototype.getSetrenderscale = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.ChangeWindowStateRequest.prototype.setSetrenderscale = function (t) {
        return S.Message.setProto3FloatField(this, 4, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.ChangeWindowStateResponse.prototype.toObject = function (t) {
        return proto.cade_api.rpc.ChangeWindowStateResponse.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.ChangeWindowStateResponse.toObject = function (t, r) {
            var i, n = {
                code: S.Message.getFieldWithDefault(r, 1, 0),
                windowstate: (i = r.getWindowstate()) && proto.cade_api.rpc.WindowState.toObject(t, i)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.ChangeWindowStateResponse.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.ChangeWindowStateResponse;
        return proto.cade_api.rpc.ChangeWindowStateResponse.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.ChangeWindowStateResponse.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readEnum();
                    t.setCode(n);
                    break;
                case 2:
                    var n = new proto.cade_api.rpc.WindowState;
                    r.readMessage(n, proto.cade_api.rpc.WindowState.deserializeBinaryFromReader),
                        t.setWindowstate(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.ChangeWindowStateResponse.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.ChangeWindowStateResponse.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.ChangeWindowStateResponse.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getCode(),
            i !== 0 && r.writeEnum(1, i),
            i = t.getWindowstate(),
            i != null && r.writeMessage(2, i, proto.cade_api.rpc.WindowState.serializeBinaryToWriter)
    }
        ;
    proto.cade_api.rpc.ChangeWindowStateResponse.Code = {
        OK: 0,
        FAILED_PLAYING: 1,
        UNSUPPORTED: 2,
        NO_WINDOW: 3,
        SET_FOCUS_FAILED: 4,
        SET_FOREGROUND_FAILED: 5,
        SET_MODE_FAILED: 6,
        ILLEGAL_RENDER_SCALE: 7
    };
    proto.cade_api.rpc.ChangeWindowStateResponse.prototype.getCode = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.ChangeWindowStateResponse.prototype.setCode = function (t) {
        return S.Message.setProto3EnumField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.ChangeWindowStateResponse.prototype.getWindowstate = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.WindowState, 2)
    }
        ;
    proto.cade_api.rpc.ChangeWindowStateResponse.prototype.setWindowstate = function (t) {
        return S.Message.setWrapperField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.ChangeWindowStateResponse.prototype.clearWindowstate = function () {
        return this.setWindowstate(void 0)
    }
        ;
    proto.cade_api.rpc.ChangeWindowStateResponse.prototype.hasWindowstate = function () {
        return S.Message.getField(this, 2) != null
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.ScreenState.prototype.toObject = function (t) {
        return proto.cade_api.rpc.ScreenState.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.ScreenState.toObject = function (t, r) {
            var i, n = {
                location: S.Message.getFieldWithDefault(r, 1, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.ScreenState.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.ScreenState;
        return proto.cade_api.rpc.ScreenState.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.ScreenState.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readEnum();
                    t.setLocation(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.ScreenState.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.ScreenState.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.ScreenState.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getLocation(),
            i !== 0 && r.writeEnum(1, i)
    }
        ;
    proto.cade_api.rpc.ScreenState.Location = {
        OTHER: 0,
        MAIN_MENU: 1,
        GAME_SCREEN: 2,
        MULTIPLAYER_SPECTATE: 3,
        LOAD_GAME_REPLAYS: 4,
        MULTIPLAYER_LOBBY_SPECTATOR: 5
    };
    proto.cade_api.rpc.ScreenState.prototype.getLocation = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.ScreenState.prototype.setLocation = function (t) {
        return S.Message.setProto3EnumField(this, 1, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.ChangeScreenRequest.prototype.toObject = function (t) {
        return proto.cade_api.rpc.ChangeScreenRequest.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.ChangeScreenRequest.toObject = function (t, r) {
            var i, n = {
                screen: (i = r.getScreen()) && proto.cade_api.rpc.ScreenState.toObject(t, i),
                confirm: S.Message.getBooleanFieldWithDefault(r, 2, !1)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.ChangeScreenRequest.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.ChangeScreenRequest;
        return proto.cade_api.rpc.ChangeScreenRequest.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.ChangeScreenRequest.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = new proto.cade_api.rpc.ScreenState;
                    r.readMessage(n, proto.cade_api.rpc.ScreenState.deserializeBinaryFromReader),
                        t.setScreen(n);
                    break;
                case 2:
                    var n = r.readBool();
                    t.setConfirm(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.ChangeScreenRequest.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.ChangeScreenRequest.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.ChangeScreenRequest.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getScreen(),
            i != null && r.writeMessage(1, i, proto.cade_api.rpc.ScreenState.serializeBinaryToWriter),
            i = t.getConfirm(),
            i && r.writeBool(2, i)
    }
        ;
    proto.cade_api.rpc.ChangeScreenRequest.prototype.getScreen = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.ScreenState, 1)
    }
        ;
    proto.cade_api.rpc.ChangeScreenRequest.prototype.setScreen = function (t) {
        return S.Message.setWrapperField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.ChangeScreenRequest.prototype.clearScreen = function () {
        return this.setScreen(void 0)
    }
        ;
    proto.cade_api.rpc.ChangeScreenRequest.prototype.hasScreen = function () {
        return S.Message.getField(this, 1) != null
    }
        ;
    proto.cade_api.rpc.ChangeScreenRequest.prototype.getConfirm = function () {
        return S.Message.getBooleanFieldWithDefault(this, 2, !1)
    }
        ;
    proto.cade_api.rpc.ChangeScreenRequest.prototype.setConfirm = function (t) {
        return S.Message.setProto3BooleanField(this, 2, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.ChangeScreenResponse.prototype.toObject = function (t) {
        return proto.cade_api.rpc.ChangeScreenResponse.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.ChangeScreenResponse.toObject = function (t, r) {
            var i, n = {
                code: S.Message.getFieldWithDefault(r, 1, 0),
                screen: (i = r.getScreen()) && proto.cade_api.rpc.ScreenState.toObject(t, i)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.ChangeScreenResponse.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.ChangeScreenResponse;
        return proto.cade_api.rpc.ChangeScreenResponse.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.ChangeScreenResponse.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readEnum();
                    t.setCode(n);
                    break;
                case 2:
                    var n = new proto.cade_api.rpc.ScreenState;
                    r.readMessage(n, proto.cade_api.rpc.ScreenState.deserializeBinaryFromReader),
                        t.setScreen(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.ChangeScreenResponse.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.ChangeScreenResponse.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.ChangeScreenResponse.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getCode(),
            i !== 0 && r.writeEnum(1, i),
            i = t.getScreen(),
            i != null && r.writeMessage(2, i, proto.cade_api.rpc.ScreenState.serializeBinaryToWriter)
    }
        ;
    proto.cade_api.rpc.ChangeScreenResponse.Code = {
        OK: 0,
        FAILED_PLAYING_RANKED: 1,
        FAILED_PLAYING_MULTIPLAYER: 2,
        FAILED_PLAYING_NEED_CONFIRM: 3,
        UNSUPPORTED: 4
    };
    proto.cade_api.rpc.ChangeScreenResponse.prototype.getCode = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.ChangeScreenResponse.prototype.setCode = function (t) {
        return S.Message.setProto3EnumField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.ChangeScreenResponse.prototype.getScreen = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.ScreenState, 2)
    }
        ;
    proto.cade_api.rpc.ChangeScreenResponse.prototype.setScreen = function (t) {
        return S.Message.setWrapperField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.ChangeScreenResponse.prototype.clearScreen = function () {
        return this.setScreen(void 0)
    }
        ;
    proto.cade_api.rpc.ChangeScreenResponse.prototype.hasScreen = function () {
        return S.Message.getField(this, 2) != null
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.SetDesiredGameRequest.prototype.toObject = function (t) {
        return proto.cade_api.rpc.SetDesiredGameRequest.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.SetDesiredGameRequest.toObject = function (t, r) {
            var i, n = {
                desiredgame: S.Message.getFieldWithDefault(r, 1, 0),
                confirm: S.Message.getBooleanFieldWithDefault(r, 2, !1)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.SetDesiredGameRequest.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.SetDesiredGameRequest;
        return proto.cade_api.rpc.SetDesiredGameRequest.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.SetDesiredGameRequest.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readEnum();
                    t.setDesiredgame(n);
                    break;
                case 2:
                    var n = r.readBool();
                    t.setConfirm(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.SetDesiredGameRequest.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.SetDesiredGameRequest.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.SetDesiredGameRequest.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getDesiredgame(),
            i !== 0 && r.writeEnum(1, i),
            i = t.getConfirm(),
            i && r.writeBool(2, i)
    }
        ;
    proto.cade_api.rpc.SetDesiredGameRequest.prototype.getDesiredgame = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.SetDesiredGameRequest.prototype.setDesiredgame = function (t) {
        return S.Message.setProto3EnumField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.SetDesiredGameRequest.prototype.getConfirm = function () {
        return S.Message.getBooleanFieldWithDefault(this, 2, !1)
    }
        ;
    proto.cade_api.rpc.SetDesiredGameRequest.prototype.setConfirm = function (t) {
        return S.Message.setProto3BooleanField(this, 2, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.SetDesiredGameResponse.prototype.toObject = function (t) {
        return proto.cade_api.rpc.SetDesiredGameResponse.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.SetDesiredGameResponse.toObject = function (t, r) {
            var i, n = {
                code: S.Message.getFieldWithDefault(r, 1, 0),
                selectedgame: S.Message.getFieldWithDefault(r, 2, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.SetDesiredGameResponse.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.SetDesiredGameResponse;
        return proto.cade_api.rpc.SetDesiredGameResponse.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.SetDesiredGameResponse.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readEnum();
                    t.setCode(n);
                    break;
                case 2:
                    var n = r.readEnum();
                    t.setSelectedgame(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.SetDesiredGameResponse.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.SetDesiredGameResponse.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.SetDesiredGameResponse.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getCode(),
            i !== 0 && r.writeEnum(1, i),
            i = t.getSelectedgame(),
            i !== 0 && r.writeEnum(2, i)
    }
        ;
    proto.cade_api.rpc.SetDesiredGameResponse.Code = {
        SUCCESS: 0,
        NO_CHANGE: 1,
        FAILED: 2,
        FAILED_PLAYING_RANKED: 3,
        FAILED_PLAYING_MULTIPLAYER: 4,
        FAILED_PLAYING_NEED_CONFIRM: 5
    };
    proto.cade_api.rpc.SetDesiredGameResponse.prototype.getCode = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.SetDesiredGameResponse.prototype.setCode = function (t) {
        return S.Message.setProto3EnumField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.SetDesiredGameResponse.prototype.getSelectedgame = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.SetDesiredGameResponse.prototype.setSelectedgame = function (t) {
        return S.Message.setProto3EnumField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Modal.repeatedFields_ = [3];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Modal.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Modal.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Modal.toObject = function (t, r) {
            var i, n = {
                id: S.Message.getFieldWithDefault(r, 1, 0),
                purpose: S.Message.getFieldWithDefault(r, 2, 0),
                availableactionsList: (i = S.Message.getRepeatedField(r, 3)) == null ? void 0 : i,
                title: S.Message.getFieldWithDefault(r, 4, ""),
                text: S.Message.getFieldWithDefault(r, 5, "")
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Modal.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Modal;
        return proto.cade_api.rpc.Modal.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Modal.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setId(n);
                    break;
                case 2:
                    var n = r.readEnum();
                    t.setPurpose(n);
                    break;
                case 3:
                    var n = r.readPackedEnum();
                    t.setAvailableactionsList(n);
                    break;
                case 4:
                    var n = r.readString();
                    t.setTitle(n);
                    break;
                case 5:
                    var n = r.readString();
                    t.setText(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Modal.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Modal.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Modal.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getId(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getPurpose(),
            i !== 0 && r.writeEnum(2, i),
            i = t.getAvailableactionsList(),
            i.length > 0 && r.writePackedEnum(3, i),
            i = t.getTitle(),
            i.length > 0 && r.writeString(4, i),
            i = t.getText(),
            i.length > 0 && r.writeString(5, i)
    }
        ;
    proto.cade_api.rpc.Modal.Purpose = {
        ACCEPT_LOBBY_UGC_TRANSFER: 0,
        REPLAY_DONE_ERROR: 1
    };
    proto.cade_api.rpc.Modal.Action = {
        PRESS_CLOSE: 0,
        PRESS_CANCEL: 1,
        PRESS_YES: 2,
        PRESS_NO: 3,
        PRESS_OK: 4
    };
    proto.cade_api.rpc.Modal.prototype.getId = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Modal.prototype.setId = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Modal.prototype.getPurpose = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Modal.prototype.setPurpose = function (t) {
        return S.Message.setProto3EnumField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Modal.prototype.getAvailableactionsList = function () {
        return S.Message.getRepeatedField(this, 3)
    }
        ;
    proto.cade_api.rpc.Modal.prototype.setAvailableactionsList = function (t) {
        return S.Message.setField(this, 3, t || [])
    }
        ;
    proto.cade_api.rpc.Modal.prototype.addAvailableactions = function (t, r) {
        return S.Message.addToRepeatedField(this, 3, t, r)
    }
        ;
    proto.cade_api.rpc.Modal.prototype.clearAvailableactionsList = function () {
        return this.setAvailableactionsList([])
    }
        ;
    proto.cade_api.rpc.Modal.prototype.getTitle = function () {
        return S.Message.getFieldWithDefault(this, 4, "")
    }
        ;
    proto.cade_api.rpc.Modal.prototype.setTitle = function (t) {
        return S.Message.setProto3StringField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Modal.prototype.getText = function () {
        return S.Message.getFieldWithDefault(this, 5, "")
    }
        ;
    proto.cade_api.rpc.Modal.prototype.setText = function (t) {
        return S.Message.setProto3StringField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.oneofGroups_ = [[1, 2, 3, 4]];
    proto.cade_api.rpc.OraclePrayer.ContentCase = {
        CONTENT_NOT_SET: 0,
        CLEARINSTALLERACTION: 1,
        CLICKMODAL: 2,
        INFOREQUEST: 3,
        CONFIGDISCONNECTSWITCH: 4
    };
    proto.cade_api.rpc.OraclePrayer.prototype.getContentCase = function () {
        return S.Message.computeOneofCase(this, proto.cade_api.rpc.OraclePrayer.oneofGroups_[0])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.OraclePrayer.prototype.toObject = function (t) {
        return proto.cade_api.rpc.OraclePrayer.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.OraclePrayer.toObject = function (t, r) {
            var i, n = {
                clearinstalleraction: (i = r.getClearinstalleraction()) && proto.cade_api.rpc.OraclePrayer.ClearInstallerAction.toObject(t, i),
                clickmodal: (i = r.getClickmodal()) && proto.cade_api.rpc.OraclePrayer.ClickModal.toObject(t, i),
                inforequest: (i = r.getInforequest()) && proto.cade_api.rpc.OraclePrayer.InfoRequest.toObject(t, i),
                configdisconnectswitch: (i = r.getConfigdisconnectswitch()) && proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch.toObject(t, i)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.OraclePrayer.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.OraclePrayer;
        return proto.cade_api.rpc.OraclePrayer.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = new proto.cade_api.rpc.OraclePrayer.ClearInstallerAction;
                    r.readMessage(n, proto.cade_api.rpc.OraclePrayer.ClearInstallerAction.deserializeBinaryFromReader),
                        t.setClearinstalleraction(n);
                    break;
                case 2:
                    var n = new proto.cade_api.rpc.OraclePrayer.ClickModal;
                    r.readMessage(n, proto.cade_api.rpc.OraclePrayer.ClickModal.deserializeBinaryFromReader),
                        t.setClickmodal(n);
                    break;
                case 3:
                    var n = new proto.cade_api.rpc.OraclePrayer.InfoRequest;
                    r.readMessage(n, proto.cade_api.rpc.OraclePrayer.InfoRequest.deserializeBinaryFromReader),
                        t.setInforequest(n);
                    break;
                case 4:
                    var n = new proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch;
                    r.readMessage(n, proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch.deserializeBinaryFromReader),
                        t.setConfigdisconnectswitch(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.OraclePrayer.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.OraclePrayer.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.OraclePrayer.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getClearinstalleraction(),
            i != null && r.writeMessage(1, i, proto.cade_api.rpc.OraclePrayer.ClearInstallerAction.serializeBinaryToWriter),
            i = t.getClickmodal(),
            i != null && r.writeMessage(2, i, proto.cade_api.rpc.OraclePrayer.ClickModal.serializeBinaryToWriter),
            i = t.getInforequest(),
            i != null && r.writeMessage(3, i, proto.cade_api.rpc.OraclePrayer.InfoRequest.serializeBinaryToWriter),
            i = t.getConfigdisconnectswitch(),
            i != null && r.writeMessage(4, i, proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch.serializeBinaryToWriter)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.OraclePrayer.ClearInstallerAction.prototype.toObject = function (t) {
        return proto.cade_api.rpc.OraclePrayer.ClearInstallerAction.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.OraclePrayer.ClearInstallerAction.toObject = function (t, r) {
            var i, n = {};
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.OraclePrayer.ClearInstallerAction.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.OraclePrayer.ClearInstallerAction;
        return proto.cade_api.rpc.OraclePrayer.ClearInstallerAction.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.ClearInstallerAction.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.OraclePrayer.ClearInstallerAction.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.OraclePrayer.ClearInstallerAction.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.OraclePrayer.ClearInstallerAction.serializeBinaryToWriter = function (t, r) {
        var i = void 0
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.OraclePrayer.ClickModal.prototype.toObject = function (t) {
        return proto.cade_api.rpc.OraclePrayer.ClickModal.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.OraclePrayer.ClickModal.toObject = function (t, r) {
            var i, n = {
                modalid: S.Message.getFieldWithDefault(r, 1, 0),
                action: S.Message.getFieldWithDefault(r, 2, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.OraclePrayer.ClickModal.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.OraclePrayer.ClickModal;
        return proto.cade_api.rpc.OraclePrayer.ClickModal.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.ClickModal.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setModalid(n);
                    break;
                case 2:
                    var n = r.readEnum();
                    t.setAction(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.OraclePrayer.ClickModal.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.OraclePrayer.ClickModal.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.OraclePrayer.ClickModal.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getModalid(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getAction(),
            i !== 0 && r.writeEnum(2, i)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.ClickModal.prototype.getModalid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.ClickModal.prototype.setModalid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.ClickModal.prototype.getAction = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.ClickModal.prototype.setAction = function (t) {
        return S.Message.setProto3EnumField(this, 2, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.OraclePrayer.InfoRequest.prototype.toObject = function (t) {
        return proto.cade_api.rpc.OraclePrayer.InfoRequest.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.OraclePrayer.InfoRequest.toObject = function (t, r) {
            var i, n = {};
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.OraclePrayer.InfoRequest.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.OraclePrayer.InfoRequest;
        return proto.cade_api.rpc.OraclePrayer.InfoRequest.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.InfoRequest.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.OraclePrayer.InfoRequest.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.OraclePrayer.InfoRequest.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.OraclePrayer.InfoRequest.serializeBinaryToWriter = function (t, r) {
        var i = void 0
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch.prototype.toObject = function (t) {
        return proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch.toObject = function (t, r) {
            var i, n = {
                restorewindow: S.Message.getBooleanFieldWithDefault(r, 1, !1)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch;
        return proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readBool();
                    t.setRestorewindow(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getRestorewindow(),
            i && r.writeBool(1, i)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch.prototype.getRestorewindow = function () {
        return S.Message.getBooleanFieldWithDefault(this, 1, !1)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch.prototype.setRestorewindow = function (t) {
        return S.Message.setProto3BooleanField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.prototype.getClearinstalleraction = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.OraclePrayer.ClearInstallerAction, 1)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.prototype.setClearinstalleraction = function (t) {
        return S.Message.setOneofWrapperField(this, 1, proto.cade_api.rpc.OraclePrayer.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.prototype.clearClearinstalleraction = function () {
        return this.setClearinstalleraction(void 0)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.prototype.hasClearinstalleraction = function () {
        return S.Message.getField(this, 1) != null
    }
        ;
    proto.cade_api.rpc.OraclePrayer.prototype.getClickmodal = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.OraclePrayer.ClickModal, 2)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.prototype.setClickmodal = function (t) {
        return S.Message.setOneofWrapperField(this, 2, proto.cade_api.rpc.OraclePrayer.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.prototype.clearClickmodal = function () {
        return this.setClickmodal(void 0)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.prototype.hasClickmodal = function () {
        return S.Message.getField(this, 2) != null
    }
        ;
    proto.cade_api.rpc.OraclePrayer.prototype.getInforequest = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.OraclePrayer.InfoRequest, 3)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.prototype.setInforequest = function (t) {
        return S.Message.setOneofWrapperField(this, 3, proto.cade_api.rpc.OraclePrayer.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.prototype.clearInforequest = function () {
        return this.setInforequest(void 0)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.prototype.hasInforequest = function () {
        return S.Message.getField(this, 3) != null
    }
        ;
    proto.cade_api.rpc.OraclePrayer.prototype.getConfigdisconnectswitch = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.OraclePrayer.ConfigDisconnectSwitch, 4)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.prototype.setConfigdisconnectswitch = function (t) {
        return S.Message.setOneofWrapperField(this, 4, proto.cade_api.rpc.OraclePrayer.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.prototype.clearConfigdisconnectswitch = function () {
        return this.setConfigdisconnectswitch(void 0)
    }
        ;
    proto.cade_api.rpc.OraclePrayer.prototype.hasConfigdisconnectswitch = function () {
        return S.Message.getField(this, 4) != null
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.SelectedGameInfo.prototype.toObject = function (t) {
        return proto.cade_api.rpc.SelectedGameInfo.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.SelectedGameInfo.toObject = function (t, r) {
            var i, n = {
                enumvalue: S.Message.getFieldWithDefault(r, 1, 0),
                modepath: S.Message.getFieldWithDefault(r, 2, "")
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.SelectedGameInfo.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.SelectedGameInfo;
        return proto.cade_api.rpc.SelectedGameInfo.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.SelectedGameInfo.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readEnum();
                    t.setEnumvalue(n);
                    break;
                case 2:
                    var n = r.readString();
                    t.setModepath(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.SelectedGameInfo.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.SelectedGameInfo.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.SelectedGameInfo.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getEnumvalue(),
            i !== 0 && r.writeEnum(1, i),
            i = t.getModepath(),
            i.length > 0 && r.writeString(2, i)
    }
        ;
    proto.cade_api.rpc.SelectedGameInfo.prototype.getEnumvalue = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.SelectedGameInfo.prototype.setEnumvalue = function (t) {
        return S.Message.setProto3EnumField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.SelectedGameInfo.prototype.getModepath = function () {
        return S.Message.getFieldWithDefault(this, 2, "")
    }
        ;
    proto.cade_api.rpc.SelectedGameInfo.prototype.setModepath = function (t) {
        return S.Message.setProto3StringField(this, 2, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.CurrentReplay.prototype.toObject = function (t) {
        return proto.cade_api.rpc.CurrentReplay.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.CurrentReplay.toObject = function (t, r) {
            var i, n = {
                replayfile: S.Message.getFieldWithDefault(r, 1, "")
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.CurrentReplay.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.CurrentReplay;
        return proto.cade_api.rpc.CurrentReplay.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.CurrentReplay.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readString();
                    t.setReplayfile(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.CurrentReplay.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.CurrentReplay.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.CurrentReplay.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getReplayfile(),
            i.length > 0 && r.writeString(1, i)
    }
        ;
    proto.cade_api.rpc.CurrentReplay.prototype.getReplayfile = function () {
        return S.Message.getFieldWithDefault(this, 1, "")
    }
        ;
    proto.cade_api.rpc.CurrentReplay.prototype.setReplayfile = function (t) {
        return S.Message.setProto3StringField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.oneofGroups_ = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]];
    proto.cade_api.rpc.OracleMessage.ContentCase = {
        CONTENT_NOT_SET: 0,
        OBSERVERLEAVE: 1,
        OBSERVERLOBBY: 2,
        INSTALLERACTION: 3,
        GAMEPAUSED: 4,
        CURRENTWINDOWSTATE: 5,
        CURRENTSCREENSTATE: 6,
        CURRENTMODAL: 7,
        GAMETYPE: 8,
        GAMESTATE: 9,
        INFORESPONSE: 10,
        EMPTYCURRENTMODAL: 11,
        MODALCLICKRESULT: 12,
        CURRENTREPLAY: 13,
        SELECTEDGAME: 14
    };
    proto.cade_api.rpc.OracleMessage.prototype.getContentCase = function () {
        return S.Message.computeOneofCase(this, proto.cade_api.rpc.OracleMessage.oneofGroups_[0])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.OracleMessage.prototype.toObject = function (t) {
        return proto.cade_api.rpc.OracleMessage.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.OracleMessage.toObject = function (t, r) {
            var i, n = {
                observerleave: (i = r.getObserverleave()) && proto.cade_api.rpc.OracleMessage.ObserverLeave.toObject(t, i),
                observerlobby: (i = r.getObserverlobby()) && proto.cade_api.rpc.OracleMessage.ObserverLobby.toObject(t, i),
                installeraction: (i = r.getInstalleraction()) && proto.cade_api.rpc.OracleMessage.InstallerAction.toObject(t, i),
                gamepaused: (i = r.getGamepaused()) && proto.cade_api.rpc.OracleMessage.GamePaused.toObject(t, i),
                currentwindowstate: (i = r.getCurrentwindowstate()) && proto.cade_api.rpc.WindowState.toObject(t, i),
                currentscreenstate: (i = r.getCurrentscreenstate()) && proto.cade_api.rpc.ScreenState.toObject(t, i),
                currentmodal: (i = r.getCurrentmodal()) && proto.cade_api.rpc.Modal.toObject(t, i),
                gametype: S.Message.getFieldWithDefault(r, 8, 0),
                gamestate: S.Message.getFieldWithDefault(r, 9, 0),
                inforesponse: (i = r.getInforesponse()) && proto.cade_api.rpc.OracleMessage.InfoResponse.toObject(t, i),
                emptycurrentmodal: (i = r.getEmptycurrentmodal()) && proto.cade_api.rpc.OracleMessage.EmptyModal.toObject(t, i),
                modalclickresult: (i = r.getModalclickresult()) && proto.cade_api.rpc.OracleMessage.ModalClickResult.toObject(t, i),
                currentreplay: (i = r.getCurrentreplay()) && proto.cade_api.rpc.CurrentReplay.toObject(t, i),
                selectedgame: (i = r.getSelectedgame()) && proto.cade_api.rpc.SelectedGameInfo.toObject(t, i)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.OracleMessage.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.OracleMessage;
        return proto.cade_api.rpc.OracleMessage.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.OracleMessage.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = new proto.cade_api.rpc.OracleMessage.ObserverLeave;
                    r.readMessage(n, proto.cade_api.rpc.OracleMessage.ObserverLeave.deserializeBinaryFromReader),
                        t.setObserverleave(n);
                    break;
                case 2:
                    var n = new proto.cade_api.rpc.OracleMessage.ObserverLobby;
                    r.readMessage(n, proto.cade_api.rpc.OracleMessage.ObserverLobby.deserializeBinaryFromReader),
                        t.setObserverlobby(n);
                    break;
                case 3:
                    var n = new proto.cade_api.rpc.OracleMessage.InstallerAction;
                    r.readMessage(n, proto.cade_api.rpc.OracleMessage.InstallerAction.deserializeBinaryFromReader),
                        t.setInstalleraction(n);
                    break;
                case 4:
                    var n = new proto.cade_api.rpc.OracleMessage.GamePaused;
                    r.readMessage(n, proto.cade_api.rpc.OracleMessage.GamePaused.deserializeBinaryFromReader),
                        t.setGamepaused(n);
                    break;
                case 5:
                    var n = new proto.cade_api.rpc.WindowState;
                    r.readMessage(n, proto.cade_api.rpc.WindowState.deserializeBinaryFromReader),
                        t.setCurrentwindowstate(n);
                    break;
                case 6:
                    var n = new proto.cade_api.rpc.ScreenState;
                    r.readMessage(n, proto.cade_api.rpc.ScreenState.deserializeBinaryFromReader),
                        t.setCurrentscreenstate(n);
                    break;
                case 7:
                    var n = new proto.cade_api.rpc.Modal;
                    r.readMessage(n, proto.cade_api.rpc.Modal.deserializeBinaryFromReader),
                        t.setCurrentmodal(n);
                    break;
                case 8:
                    var n = r.readEnum();
                    t.setGametype(n);
                    break;
                case 9:
                    var n = r.readEnum();
                    t.setGamestate(n);
                    break;
                case 10:
                    var n = new proto.cade_api.rpc.OracleMessage.InfoResponse;
                    r.readMessage(n, proto.cade_api.rpc.OracleMessage.InfoResponse.deserializeBinaryFromReader),
                        t.setInforesponse(n);
                    break;
                case 11:
                    var n = new proto.cade_api.rpc.OracleMessage.EmptyModal;
                    r.readMessage(n, proto.cade_api.rpc.OracleMessage.EmptyModal.deserializeBinaryFromReader),
                        t.setEmptycurrentmodal(n);
                    break;
                case 12:
                    var n = new proto.cade_api.rpc.OracleMessage.ModalClickResult;
                    r.readMessage(n, proto.cade_api.rpc.OracleMessage.ModalClickResult.deserializeBinaryFromReader),
                        t.setModalclickresult(n);
                    break;
                case 13:
                    var n = new proto.cade_api.rpc.CurrentReplay;
                    r.readMessage(n, proto.cade_api.rpc.CurrentReplay.deserializeBinaryFromReader),
                        t.setCurrentreplay(n);
                    break;
                case 14:
                    var n = new proto.cade_api.rpc.SelectedGameInfo;
                    r.readMessage(n, proto.cade_api.rpc.SelectedGameInfo.deserializeBinaryFromReader),
                        t.setSelectedgame(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.OracleMessage.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.OracleMessage.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getObserverleave(),
            i != null && r.writeMessage(1, i, proto.cade_api.rpc.OracleMessage.ObserverLeave.serializeBinaryToWriter),
            i = t.getObserverlobby(),
            i != null && r.writeMessage(2, i, proto.cade_api.rpc.OracleMessage.ObserverLobby.serializeBinaryToWriter),
            i = t.getInstalleraction(),
            i != null && r.writeMessage(3, i, proto.cade_api.rpc.OracleMessage.InstallerAction.serializeBinaryToWriter),
            i = t.getGamepaused(),
            i != null && r.writeMessage(4, i, proto.cade_api.rpc.OracleMessage.GamePaused.serializeBinaryToWriter),
            i = t.getCurrentwindowstate(),
            i != null && r.writeMessage(5, i, proto.cade_api.rpc.WindowState.serializeBinaryToWriter),
            i = t.getCurrentscreenstate(),
            i != null && r.writeMessage(6, i, proto.cade_api.rpc.ScreenState.serializeBinaryToWriter),
            i = t.getCurrentmodal(),
            i != null && r.writeMessage(7, i, proto.cade_api.rpc.Modal.serializeBinaryToWriter),
            i = S.Message.getField(t, 8),
            i != null && r.writeEnum(8, i),
            i = S.Message.getField(t, 9),
            i != null && r.writeEnum(9, i),
            i = t.getInforesponse(),
            i != null && r.writeMessage(10, i, proto.cade_api.rpc.OracleMessage.InfoResponse.serializeBinaryToWriter),
            i = t.getEmptycurrentmodal(),
            i != null && r.writeMessage(11, i, proto.cade_api.rpc.OracleMessage.EmptyModal.serializeBinaryToWriter),
            i = t.getModalclickresult(),
            i != null && r.writeMessage(12, i, proto.cade_api.rpc.OracleMessage.ModalClickResult.serializeBinaryToWriter),
            i = t.getCurrentreplay(),
            i != null && r.writeMessage(13, i, proto.cade_api.rpc.CurrentReplay.serializeBinaryToWriter),
            i = t.getSelectedgame(),
            i != null && r.writeMessage(14, i, proto.cade_api.rpc.SelectedGameInfo.serializeBinaryToWriter)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.OracleMessage.EmptyModal.prototype.toObject = function (t) {
        return proto.cade_api.rpc.OracleMessage.EmptyModal.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.OracleMessage.EmptyModal.toObject = function (t, r) {
            var i, n = {};
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.OracleMessage.EmptyModal.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.OracleMessage.EmptyModal;
        return proto.cade_api.rpc.OracleMessage.EmptyModal.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.OracleMessage.EmptyModal.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.OracleMessage.EmptyModal.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.OracleMessage.EmptyModal.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.OracleMessage.EmptyModal.serializeBinaryToWriter = function (t, r) {
        var i = void 0
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.OracleMessage.ModalClickResult.prototype.toObject = function (t) {
        return proto.cade_api.rpc.OracleMessage.ModalClickResult.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.OracleMessage.ModalClickResult.toObject = function (t, r) {
            var i, n = {
                modalid: S.Message.getFieldWithDefault(r, 1, 0),
                action: S.Message.getFieldWithDefault(r, 2, 0),
                success: S.Message.getBooleanFieldWithDefault(r, 3, !1)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.OracleMessage.ModalClickResult.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.OracleMessage.ModalClickResult;
        return proto.cade_api.rpc.OracleMessage.ModalClickResult.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.OracleMessage.ModalClickResult.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setModalid(n);
                    break;
                case 2:
                    var n = r.readEnum();
                    t.setAction(n);
                    break;
                case 3:
                    var n = r.readBool();
                    t.setSuccess(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.OracleMessage.ModalClickResult.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.OracleMessage.ModalClickResult.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.OracleMessage.ModalClickResult.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getModalid(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getAction(),
            i !== 0 && r.writeEnum(2, i),
            i = t.getSuccess(),
            i && r.writeBool(3, i)
    }
        ;
    proto.cade_api.rpc.OracleMessage.ModalClickResult.prototype.getModalid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.ModalClickResult.prototype.setModalid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.ModalClickResult.prototype.getAction = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.ModalClickResult.prototype.setAction = function (t) {
        return S.Message.setProto3EnumField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.ModalClickResult.prototype.getSuccess = function () {
        return S.Message.getBooleanFieldWithDefault(this, 3, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.ModalClickResult.prototype.setSuccess = function (t) {
        return S.Message.setProto3BooleanField(this, 3, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.OracleMessage.ObserverLeave.prototype.toObject = function (t) {
        return proto.cade_api.rpc.OracleMessage.ObserverLeave.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.OracleMessage.ObserverLeave.toObject = function (t, r) {
            var i, n = {};
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.OracleMessage.ObserverLeave.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.OracleMessage.ObserverLeave;
        return proto.cade_api.rpc.OracleMessage.ObserverLeave.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.OracleMessage.ObserverLeave.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.OracleMessage.ObserverLeave.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.OracleMessage.ObserverLeave.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.OracleMessage.ObserverLeave.serializeBinaryToWriter = function (t, r) {
        var i = void 0
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.OracleMessage.ObserverLobby.prototype.toObject = function (t) {
        return proto.cade_api.rpc.OracleMessage.ObserverLobby.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.OracleMessage.ObserverLobby.toObject = function (t, r) {
            var i, n = {
                matchstarttime: S.Message.getFieldWithDefault(r, 1, ""),
                jointime: S.Message.getFieldWithDefault(r, 2, ""),
                lobbyinfo: (i = r.getLobbyinfo()) && proto.cade_api.rpc.OracleMessage.LobbyInfo.toObject(t, i)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.OracleMessage.ObserverLobby.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.OracleMessage.ObserverLobby;
        return proto.cade_api.rpc.OracleMessage.ObserverLobby.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.OracleMessage.ObserverLobby.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readString();
                    t.setMatchstarttime(n);
                    break;
                case 2:
                    var n = r.readString();
                    t.setJointime(n);
                    break;
                case 3:
                    var n = new proto.cade_api.rpc.OracleMessage.LobbyInfo;
                    r.readMessage(n, proto.cade_api.rpc.OracleMessage.LobbyInfo.deserializeBinaryFromReader),
                        t.setLobbyinfo(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.OracleMessage.ObserverLobby.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.OracleMessage.ObserverLobby.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.OracleMessage.ObserverLobby.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getMatchstarttime(),
            i.length > 0 && r.writeString(1, i),
            i = t.getJointime(),
            i.length > 0 && r.writeString(2, i),
            i = t.getLobbyinfo(),
            i != null && r.writeMessage(3, i, proto.cade_api.rpc.OracleMessage.LobbyInfo.serializeBinaryToWriter)
    }
        ;
    proto.cade_api.rpc.OracleMessage.ObserverLobby.prototype.getMatchstarttime = function () {
        return S.Message.getFieldWithDefault(this, 1, "")
    }
        ;
    proto.cade_api.rpc.OracleMessage.ObserverLobby.prototype.setMatchstarttime = function (t) {
        return S.Message.setProto3StringField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.ObserverLobby.prototype.getJointime = function () {
        return S.Message.getFieldWithDefault(this, 2, "")
    }
        ;
    proto.cade_api.rpc.OracleMessage.ObserverLobby.prototype.setJointime = function (t) {
        return S.Message.setProto3StringField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.ObserverLobby.prototype.getLobbyinfo = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.OracleMessage.LobbyInfo, 3)
    }
        ;
    proto.cade_api.rpc.OracleMessage.ObserverLobby.prototype.setLobbyinfo = function (t) {
        return S.Message.setWrapperField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.ObserverLobby.prototype.clearLobbyinfo = function () {
        return this.setLobbyinfo(void 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.ObserverLobby.prototype.hasLobbyinfo = function () {
        return S.Message.getField(this, 3) != null
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.repeatedFields_ = [3];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.toObject = function (t) {
        return proto.cade_api.rpc.OracleMessage.LobbyInfo.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.OracleMessage.LobbyInfo.toObject = function (t, r) {
            var i, n = {
                sessionid: S.Message.getFieldWithDefault(r, 1, ""),
                playercount: S.Message.getFieldWithDefault(r, 2, 0),
                slotsList: S.Message.toObjectList(r.getSlotsList(), proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.toObject, t),
                spectatable: S.Message.getBooleanFieldWithDefault(r, 4, !1),
                spectatorcount: S.Message.getFieldWithDefault(r, 5, 0),
                ingame: S.Message.getBooleanFieldWithDefault(r, 6, !1),
                scenarioname: S.Message.getFieldWithDefault(r, 7, ""),
                rankedtype: S.Message.getFieldWithDefault(r, 8, 0),
                dataset: S.Message.getFieldWithDefault(r, 9, 0),
                chosenmaptype: S.Message.getFieldWithDefault(r, 10, 0),
                chosenmaptypestringid: S.Message.getFieldWithDefault(r, 43, 0),
                custommapname: S.Message.getFieldWithDefault(r, 11, ""),
                hostlanguage: S.Message.getFieldWithDefault(r, 12, ""),
                server: S.Message.getFieldWithDefault(r, 13, ""),
                gameid: S.Message.getFieldWithDefault(r, 14, ""),
                gamemode: S.Message.getFieldWithDefault(r, 15, 0),
                mapstyle: S.Message.getFieldWithDefault(r, 16, 0),
                mapsize: S.Message.getFieldWithDefault(r, 17, 0),
                difficulty: S.Message.getFieldWithDefault(r, 18, 0),
                resources: S.Message.getFieldWithDefault(r, 19, 0),
                populationcap: S.Message.getFieldWithDefault(r, 20, 0),
                gamespeed: S.Message.getFieldWithDefault(r, 21, 0),
                visibility: S.Message.getFieldWithDefault(r, 22, 0),
                startingage: S.Message.getFieldWithDefault(r, 23, 0),
                endingage: S.Message.getFieldWithDefault(r, 24, 0),
                treatylength: S.Message.getFieldWithDefault(r, 25, 0),
                victorytype: S.Message.getFieldWithDefault(r, 26, 0),
                victoryamount: S.Message.getFieldWithDefault(r, 27, 0),
                lockteams: S.Message.getBooleanFieldWithDefault(r, 28, !1),
                teamtogether: S.Message.getBooleanFieldWithDefault(r, 29, !1),
                teampositions: S.Message.getBooleanFieldWithDefault(r, 30, !1),
                sharedexploration: S.Message.getBooleanFieldWithDefault(r, 31, !1),
                speedlocked: S.Message.getBooleanFieldWithDefault(r, 32, !1),
                cheatsenabled: S.Message.getBooleanFieldWithDefault(r, 33, !1),
                turboenabled: S.Message.getBooleanFieldWithDefault(r, 34, !1),
                alltechsenabled: S.Message.getBooleanFieldWithDefault(r, 35, !1),
                recordgame: S.Message.getBooleanFieldWithDefault(r, 36, !1),
                hascustomcontent: S.Message.getBooleanFieldWithDefault(r, 37, !1),
                hiddencivs: S.Message.getBooleanFieldWithDefault(r, 38, !1),
                empirewarsmode: S.Message.getBooleanFieldWithDefault(r, 39, !1),
                suddendeathmode: S.Message.getBooleanFieldWithDefault(r, 40, !1),
                regicidemode: S.Message.getBooleanFieldWithDefault(r, 41, !1),
                battleroyaletime: S.Message.getFieldWithDefault(r, 42, 0),
                selectedgame: S.Message.getFieldWithDefault(r, 44, 0),
                handicap: S.Message.getBooleanFieldWithDefault(r, 45, !1),
                walkablefarms: S.Message.getBooleanFieldWithDefault(r, 46, !1)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.OracleMessage.LobbyInfo.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.OracleMessage.LobbyInfo;
        return proto.cade_api.rpc.OracleMessage.LobbyInfo.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readString();
                    t.setSessionid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setPlayercount(n);
                    break;
                case 3:
                    var n = new proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot;
                    r.readMessage(n, proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.deserializeBinaryFromReader),
                        t.addSlots(n);
                    break;
                case 4:
                    var n = r.readBool();
                    t.setSpectatable(n);
                    break;
                case 5:
                    var n = r.readInt32();
                    t.setSpectatorcount(n);
                    break;
                case 6:
                    var n = r.readBool();
                    t.setIngame(n);
                    break;
                case 7:
                    var n = r.readString();
                    t.setScenarioname(n);
                    break;
                case 8:
                    var n = r.readEnum();
                    t.setRankedtype(n);
                    break;
                case 9:
                    var n = r.readInt32();
                    t.setDataset(n);
                    break;
                case 10:
                    var n = r.readInt32();
                    t.setChosenmaptype(n);
                    break;
                case 43:
                    var n = r.readInt32();
                    t.setChosenmaptypestringid(n);
                    break;
                case 11:
                    var n = r.readString();
                    t.setCustommapname(n);
                    break;
                case 12:
                    var n = r.readString();
                    t.setHostlanguage(n);
                    break;
                case 13:
                    var n = r.readString();
                    t.setServer(n);
                    break;
                case 14:
                    var n = r.readString();
                    t.setGameid(n);
                    break;
                case 15:
                    var n = r.readInt32();
                    t.setGamemode(n);
                    break;
                case 16:
                    var n = r.readInt32();
                    t.setMapstyle(n);
                    break;
                case 17:
                    var n = r.readInt32();
                    t.setMapsize(n);
                    break;
                case 18:
                    var n = r.readInt32();
                    t.setDifficulty(n);
                    break;
                case 19:
                    var n = r.readInt32();
                    t.setResources(n);
                    break;
                case 20:
                    var n = r.readInt32();
                    t.setPopulationcap(n);
                    break;
                case 21:
                    var n = r.readInt32();
                    t.setGamespeed(n);
                    break;
                case 22:
                    var n = r.readInt32();
                    t.setVisibility(n);
                    break;
                case 23:
                    var n = r.readInt32();
                    t.setStartingage(n);
                    break;
                case 24:
                    var n = r.readInt32();
                    t.setEndingage(n);
                    break;
                case 25:
                    var n = r.readInt32();
                    t.setTreatylength(n);
                    break;
                case 26:
                    var n = r.readInt32();
                    t.setVictorytype(n);
                    break;
                case 27:
                    var n = r.readInt32();
                    t.setVictoryamount(n);
                    break;
                case 28:
                    var n = r.readBool();
                    t.setLockteams(n);
                    break;
                case 29:
                    var n = r.readBool();
                    t.setTeamtogether(n);
                    break;
                case 30:
                    var n = r.readBool();
                    t.setTeampositions(n);
                    break;
                case 31:
                    var n = r.readBool();
                    t.setSharedexploration(n);
                    break;
                case 32:
                    var n = r.readBool();
                    t.setSpeedlocked(n);
                    break;
                case 33:
                    var n = r.readBool();
                    t.setCheatsenabled(n);
                    break;
                case 34:
                    var n = r.readBool();
                    t.setTurboenabled(n);
                    break;
                case 35:
                    var n = r.readBool();
                    t.setAlltechsenabled(n);
                    break;
                case 36:
                    var n = r.readBool();
                    t.setRecordgame(n);
                    break;
                case 37:
                    var n = r.readBool();
                    t.setHascustomcontent(n);
                    break;
                case 38:
                    var n = r.readBool();
                    t.setHiddencivs(n);
                    break;
                case 39:
                    var n = r.readBool();
                    t.setEmpirewarsmode(n);
                    break;
                case 40:
                    var n = r.readBool();
                    t.setSuddendeathmode(n);
                    break;
                case 41:
                    var n = r.readBool();
                    t.setRegicidemode(n);
                    break;
                case 42:
                    var n = r.readInt32();
                    t.setBattleroyaletime(n);
                    break;
                case 44:
                    var n = r.readEnum();
                    t.setSelectedgame(n);
                    break;
                case 45:
                    var n = r.readBool();
                    t.setHandicap(n);
                    break;
                case 46:
                    var n = r.readBool();
                    t.setWalkablefarms(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.OracleMessage.LobbyInfo.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getSessionid(),
            i.length > 0 && r.writeString(1, i),
            i = t.getPlayercount(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getSlotsList(),
            i.length > 0 && r.writeRepeatedMessage(3, i, proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.serializeBinaryToWriter),
            i = t.getSpectatable(),
            i && r.writeBool(4, i),
            i = t.getSpectatorcount(),
            i !== 0 && r.writeInt32(5, i),
            i = t.getIngame(),
            i && r.writeBool(6, i),
            i = t.getScenarioname(),
            i.length > 0 && r.writeString(7, i),
            i = t.getRankedtype(),
            i !== 0 && r.writeEnum(8, i),
            i = t.getDataset(),
            i !== 0 && r.writeInt32(9, i),
            i = t.getChosenmaptype(),
            i !== 0 && r.writeInt32(10, i),
            i = t.getChosenmaptypestringid(),
            i !== 0 && r.writeInt32(43, i),
            i = t.getCustommapname(),
            i.length > 0 && r.writeString(11, i),
            i = t.getHostlanguage(),
            i.length > 0 && r.writeString(12, i),
            i = t.getServer(),
            i.length > 0 && r.writeString(13, i),
            i = t.getGameid(),
            i.length > 0 && r.writeString(14, i),
            i = t.getGamemode(),
            i !== 0 && r.writeInt32(15, i),
            i = t.getMapstyle(),
            i !== 0 && r.writeInt32(16, i),
            i = t.getMapsize(),
            i !== 0 && r.writeInt32(17, i),
            i = t.getDifficulty(),
            i !== 0 && r.writeInt32(18, i),
            i = t.getResources(),
            i !== 0 && r.writeInt32(19, i),
            i = t.getPopulationcap(),
            i !== 0 && r.writeInt32(20, i),
            i = t.getGamespeed(),
            i !== 0 && r.writeInt32(21, i),
            i = t.getVisibility(),
            i !== 0 && r.writeInt32(22, i),
            i = t.getStartingage(),
            i !== 0 && r.writeInt32(23, i),
            i = t.getEndingage(),
            i !== 0 && r.writeInt32(24, i),
            i = t.getTreatylength(),
            i !== 0 && r.writeInt32(25, i),
            i = t.getVictorytype(),
            i !== 0 && r.writeInt32(26, i),
            i = t.getVictoryamount(),
            i !== 0 && r.writeInt32(27, i),
            i = t.getLockteams(),
            i && r.writeBool(28, i),
            i = t.getTeamtogether(),
            i && r.writeBool(29, i),
            i = t.getTeampositions(),
            i && r.writeBool(30, i),
            i = t.getSharedexploration(),
            i && r.writeBool(31, i),
            i = t.getSpeedlocked(),
            i && r.writeBool(32, i),
            i = t.getCheatsenabled(),
            i && r.writeBool(33, i),
            i = t.getTurboenabled(),
            i && r.writeBool(34, i),
            i = t.getAlltechsenabled(),
            i && r.writeBool(35, i),
            i = t.getRecordgame(),
            i && r.writeBool(36, i),
            i = t.getHascustomcontent(),
            i && r.writeBool(37, i),
            i = t.getHiddencivs(),
            i && r.writeBool(38, i),
            i = t.getEmpirewarsmode(),
            i && r.writeBool(39, i),
            i = t.getSuddendeathmode(),
            i && r.writeBool(40, i),
            i = t.getRegicidemode(),
            i && r.writeBool(41, i),
            i = t.getBattleroyaletime(),
            i !== 0 && r.writeInt32(42, i),
            i = t.getSelectedgame(),
            i !== 0 && r.writeEnum(44, i),
            i = t.getHandicap(),
            i && r.writeBool(45, i),
            i = t.getWalkablefarms(),
            i && r.writeBool(46, i)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.RankedType = {
        UNKNOWN: 0,
        UNRANKED: 1,
        RANDOM_MAP: 2,
        DEATH_MATCH: 3,
        EMPIRE_WARS: 4,
        BATTLE_ROYALE: 5,
        POMPEII_CUSTOM: 6
    };
    proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.oneofGroups_ = [[1]];
    proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.ContentCase = {
        CONTENT_NOT_SET: 0,
        USED: 1
    };
    proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.prototype.getContentCase = function () {
        return S.Message.computeOneofCase(this, proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.oneofGroups_[0])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.prototype.toObject = function (t) {
        return proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.toObject = function (t, r) {
            var i, n = {
                used: (i = r.getUsed()) && proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.toObject(t, i)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot;
        return proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = new proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed;
                    r.readMessage(n, proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.deserializeBinaryFromReader),
                        t.setUsed(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getUsed(),
            i != null && r.writeMessage(1, i, proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.serializeBinaryToWriter)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.prototype.getUsed = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed, 1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.prototype.setUsed = function (t) {
        return S.Message.setOneofWrapperField(this, 1, proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.prototype.clearUsed = function () {
        return this.setUsed(void 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot.prototype.hasUsed = function () {
        return S.Message.getField(this, 1) != null
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.prototype.toObject = function (t) {
        return proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.toObject = function (t, r) {
            var i, n = {
                name: S.Message.getFieldWithDefault(r, 1, ""),
                teamid: S.Message.getFieldWithDefault(r, 2, 0),
                color: S.Message.getFieldWithDefault(r, 3, 0),
                civid: S.Message.getFieldWithDefault(r, 4, 0),
                platform: S.Message.getFieldWithDefault(r, 5, 0),
                iconid: S.Message.getFieldWithDefault(r, 6, "")
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed;
        return proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readString();
                    t.setName(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setTeamid(n);
                    break;
                case 3:
                    var n = r.readInt32();
                    t.setColor(n);
                    break;
                case 4:
                    var n = r.readInt32();
                    t.setCivid(n);
                    break;
                case 5:
                    var n = r.readInt32();
                    t.setPlatform(n);
                    break;
                case 6:
                    var n = r.readString();
                    t.setIconid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getName(),
            i.length > 0 && r.writeString(1, i),
            i = t.getTeamid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getColor(),
            i !== 0 && r.writeInt32(3, i),
            i = t.getCivid(),
            i !== 0 && r.writeInt32(4, i),
            i = t.getPlatform(),
            i !== 0 && r.writeInt32(5, i),
            i = t.getIconid(),
            i.length > 0 && r.writeString(6, i)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.prototype.getName = function () {
        return S.Message.getFieldWithDefault(this, 1, "")
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.prototype.setName = function (t) {
        return S.Message.setProto3StringField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.prototype.getTeamid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.prototype.setTeamid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.prototype.getColor = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.prototype.setColor = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.prototype.getCivid = function () {
        return S.Message.getFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.prototype.setCivid = function (t) {
        return S.Message.setProto3IntField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.prototype.getPlatform = function () {
        return S.Message.getFieldWithDefault(this, 5, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.prototype.setPlatform = function (t) {
        return S.Message.setProto3IntField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.prototype.getIconid = function () {
        return S.Message.getFieldWithDefault(this, 6, "")
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.SlotUsed.prototype.setIconid = function (t) {
        return S.Message.setProto3StringField(this, 6, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getSessionid = function () {
        return S.Message.getFieldWithDefault(this, 1, "")
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setSessionid = function (t) {
        return S.Message.setProto3StringField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getPlayercount = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setPlayercount = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getSlotsList = function () {
        return S.Message.getRepeatedWrapperField(this, proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot, 3)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setSlotsList = function (t) {
        return S.Message.setRepeatedWrapperField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.addSlots = function (t, r) {
        return S.Message.addToRepeatedWrapperField(this, 3, t, proto.cade_api.rpc.OracleMessage.LobbyInfo.Slot, r)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.clearSlotsList = function () {
        return this.setSlotsList([])
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getSpectatable = function () {
        return S.Message.getBooleanFieldWithDefault(this, 4, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setSpectatable = function (t) {
        return S.Message.setProto3BooleanField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getSpectatorcount = function () {
        return S.Message.getFieldWithDefault(this, 5, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setSpectatorcount = function (t) {
        return S.Message.setProto3IntField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getIngame = function () {
        return S.Message.getBooleanFieldWithDefault(this, 6, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setIngame = function (t) {
        return S.Message.setProto3BooleanField(this, 6, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getScenarioname = function () {
        return S.Message.getFieldWithDefault(this, 7, "")
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setScenarioname = function (t) {
        return S.Message.setProto3StringField(this, 7, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getRankedtype = function () {
        return S.Message.getFieldWithDefault(this, 8, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setRankedtype = function (t) {
        return S.Message.setProto3EnumField(this, 8, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getDataset = function () {
        return S.Message.getFieldWithDefault(this, 9, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setDataset = function (t) {
        return S.Message.setProto3IntField(this, 9, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getChosenmaptype = function () {
        return S.Message.getFieldWithDefault(this, 10, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setChosenmaptype = function (t) {
        return S.Message.setProto3IntField(this, 10, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getChosenmaptypestringid = function () {
        return S.Message.getFieldWithDefault(this, 43, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setChosenmaptypestringid = function (t) {
        return S.Message.setProto3IntField(this, 43, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getCustommapname = function () {
        return S.Message.getFieldWithDefault(this, 11, "")
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setCustommapname = function (t) {
        return S.Message.setProto3StringField(this, 11, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getHostlanguage = function () {
        return S.Message.getFieldWithDefault(this, 12, "")
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setHostlanguage = function (t) {
        return S.Message.setProto3StringField(this, 12, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getServer = function () {
        return S.Message.getFieldWithDefault(this, 13, "")
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setServer = function (t) {
        return S.Message.setProto3StringField(this, 13, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getGameid = function () {
        return S.Message.getFieldWithDefault(this, 14, "")
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setGameid = function (t) {
        return S.Message.setProto3StringField(this, 14, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getGamemode = function () {
        return S.Message.getFieldWithDefault(this, 15, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setGamemode = function (t) {
        return S.Message.setProto3IntField(this, 15, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getMapstyle = function () {
        return S.Message.getFieldWithDefault(this, 16, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setMapstyle = function (t) {
        return S.Message.setProto3IntField(this, 16, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getMapsize = function () {
        return S.Message.getFieldWithDefault(this, 17, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setMapsize = function (t) {
        return S.Message.setProto3IntField(this, 17, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getDifficulty = function () {
        return S.Message.getFieldWithDefault(this, 18, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setDifficulty = function (t) {
        return S.Message.setProto3IntField(this, 18, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getResources = function () {
        return S.Message.getFieldWithDefault(this, 19, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setResources = function (t) {
        return S.Message.setProto3IntField(this, 19, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getPopulationcap = function () {
        return S.Message.getFieldWithDefault(this, 20, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setPopulationcap = function (t) {
        return S.Message.setProto3IntField(this, 20, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getGamespeed = function () {
        return S.Message.getFieldWithDefault(this, 21, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setGamespeed = function (t) {
        return S.Message.setProto3IntField(this, 21, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getVisibility = function () {
        return S.Message.getFieldWithDefault(this, 22, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setVisibility = function (t) {
        return S.Message.setProto3IntField(this, 22, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getStartingage = function () {
        return S.Message.getFieldWithDefault(this, 23, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setStartingage = function (t) {
        return S.Message.setProto3IntField(this, 23, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getEndingage = function () {
        return S.Message.getFieldWithDefault(this, 24, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setEndingage = function (t) {
        return S.Message.setProto3IntField(this, 24, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getTreatylength = function () {
        return S.Message.getFieldWithDefault(this, 25, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setTreatylength = function (t) {
        return S.Message.setProto3IntField(this, 25, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getVictorytype = function () {
        return S.Message.getFieldWithDefault(this, 26, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setVictorytype = function (t) {
        return S.Message.setProto3IntField(this, 26, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getVictoryamount = function () {
        return S.Message.getFieldWithDefault(this, 27, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setVictoryamount = function (t) {
        return S.Message.setProto3IntField(this, 27, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getLockteams = function () {
        return S.Message.getBooleanFieldWithDefault(this, 28, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setLockteams = function (t) {
        return S.Message.setProto3BooleanField(this, 28, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getTeamtogether = function () {
        return S.Message.getBooleanFieldWithDefault(this, 29, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setTeamtogether = function (t) {
        return S.Message.setProto3BooleanField(this, 29, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getTeampositions = function () {
        return S.Message.getBooleanFieldWithDefault(this, 30, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setTeampositions = function (t) {
        return S.Message.setProto3BooleanField(this, 30, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getSharedexploration = function () {
        return S.Message.getBooleanFieldWithDefault(this, 31, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setSharedexploration = function (t) {
        return S.Message.setProto3BooleanField(this, 31, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getSpeedlocked = function () {
        return S.Message.getBooleanFieldWithDefault(this, 32, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setSpeedlocked = function (t) {
        return S.Message.setProto3BooleanField(this, 32, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getCheatsenabled = function () {
        return S.Message.getBooleanFieldWithDefault(this, 33, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setCheatsenabled = function (t) {
        return S.Message.setProto3BooleanField(this, 33, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getTurboenabled = function () {
        return S.Message.getBooleanFieldWithDefault(this, 34, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setTurboenabled = function (t) {
        return S.Message.setProto3BooleanField(this, 34, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getAlltechsenabled = function () {
        return S.Message.getBooleanFieldWithDefault(this, 35, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setAlltechsenabled = function (t) {
        return S.Message.setProto3BooleanField(this, 35, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getRecordgame = function () {
        return S.Message.getBooleanFieldWithDefault(this, 36, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setRecordgame = function (t) {
        return S.Message.setProto3BooleanField(this, 36, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getHascustomcontent = function () {
        return S.Message.getBooleanFieldWithDefault(this, 37, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setHascustomcontent = function (t) {
        return S.Message.setProto3BooleanField(this, 37, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getHiddencivs = function () {
        return S.Message.getBooleanFieldWithDefault(this, 38, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setHiddencivs = function (t) {
        return S.Message.setProto3BooleanField(this, 38, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getEmpirewarsmode = function () {
        return S.Message.getBooleanFieldWithDefault(this, 39, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setEmpirewarsmode = function (t) {
        return S.Message.setProto3BooleanField(this, 39, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getSuddendeathmode = function () {
        return S.Message.getBooleanFieldWithDefault(this, 40, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setSuddendeathmode = function (t) {
        return S.Message.setProto3BooleanField(this, 40, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getRegicidemode = function () {
        return S.Message.getBooleanFieldWithDefault(this, 41, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setRegicidemode = function (t) {
        return S.Message.setProto3BooleanField(this, 41, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getBattleroyaletime = function () {
        return S.Message.getFieldWithDefault(this, 42, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setBattleroyaletime = function (t) {
        return S.Message.setProto3IntField(this, 42, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getSelectedgame = function () {
        return S.Message.getFieldWithDefault(this, 44, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setSelectedgame = function (t) {
        return S.Message.setProto3EnumField(this, 44, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getHandicap = function () {
        return S.Message.getBooleanFieldWithDefault(this, 45, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setHandicap = function (t) {
        return S.Message.setProto3BooleanField(this, 45, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.getWalkablefarms = function () {
        return S.Message.getBooleanFieldWithDefault(this, 46, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.LobbyInfo.prototype.setWalkablefarms = function (t) {
        return S.Message.setProto3BooleanField(this, 46, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.OracleMessage.InstallerAction.prototype.toObject = function (t) {
        return proto.cade_api.rpc.OracleMessage.InstallerAction.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.OracleMessage.InstallerAction.toObject = function (t, r) {
            var i, n = {
                url: S.Message.getFieldWithDefault(r, 1, "")
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.OracleMessage.InstallerAction.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.OracleMessage.InstallerAction;
        return proto.cade_api.rpc.OracleMessage.InstallerAction.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.OracleMessage.InstallerAction.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readString();
                    t.setUrl(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.OracleMessage.InstallerAction.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.OracleMessage.InstallerAction.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.OracleMessage.InstallerAction.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getUrl(),
            i.length > 0 && r.writeString(1, i)
    }
        ;
    proto.cade_api.rpc.OracleMessage.InstallerAction.prototype.getUrl = function () {
        return S.Message.getFieldWithDefault(this, 1, "")
    }
        ;
    proto.cade_api.rpc.OracleMessage.InstallerAction.prototype.setUrl = function (t) {
        return S.Message.setProto3StringField(this, 1, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.OracleMessage.GamePaused.prototype.toObject = function (t) {
        return proto.cade_api.rpc.OracleMessage.GamePaused.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.OracleMessage.GamePaused.toObject = function (t, r) {
            var i, n = {
                paused: S.Message.getBooleanFieldWithDefault(r, 1, !1),
                nomoredata: S.Message.getBooleanFieldWithDefault(r, 2, !1)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.OracleMessage.GamePaused.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.OracleMessage.GamePaused;
        return proto.cade_api.rpc.OracleMessage.GamePaused.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.OracleMessage.GamePaused.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readBool();
                    t.setPaused(n);
                    break;
                case 2:
                    var n = r.readBool();
                    t.setNomoredata(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.OracleMessage.GamePaused.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.OracleMessage.GamePaused.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.OracleMessage.GamePaused.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getPaused(),
            i && r.writeBool(1, i),
            i = t.getNomoredata(),
            i && r.writeBool(2, i)
    }
        ;
    proto.cade_api.rpc.OracleMessage.GamePaused.prototype.getPaused = function () {
        return S.Message.getBooleanFieldWithDefault(this, 1, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.GamePaused.prototype.setPaused = function (t) {
        return S.Message.setProto3BooleanField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.GamePaused.prototype.getNomoredata = function () {
        return S.Message.getBooleanFieldWithDefault(this, 2, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.GamePaused.prototype.setNomoredata = function (t) {
        return S.Message.setProto3BooleanField(this, 2, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.OracleMessage.InfoResponse.prototype.toObject = function (t) {
        return proto.cade_api.rpc.OracleMessage.InfoResponse.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.OracleMessage.InfoResponse.toObject = function (t, r) {
            var i, n = {
                localplayerrelicid: S.Message.getFieldWithDefault(r, 1, ""),
                restorewindowondisconnect: S.Message.getBooleanFieldWithDefault(r, 2, !1)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.OracleMessage.InfoResponse.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.OracleMessage.InfoResponse;
        return proto.cade_api.rpc.OracleMessage.InfoResponse.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.OracleMessage.InfoResponse.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readString();
                    t.setLocalplayerrelicid(n);
                    break;
                case 2:
                    var n = r.readBool();
                    t.setRestorewindowondisconnect(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.OracleMessage.InfoResponse.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.OracleMessage.InfoResponse.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.OracleMessage.InfoResponse.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getLocalplayerrelicid(),
            i.length > 0 && r.writeString(1, i),
            i = t.getRestorewindowondisconnect(),
            i && r.writeBool(2, i)
    }
        ;
    proto.cade_api.rpc.OracleMessage.InfoResponse.prototype.getLocalplayerrelicid = function () {
        return S.Message.getFieldWithDefault(this, 1, "")
    }
        ;
    proto.cade_api.rpc.OracleMessage.InfoResponse.prototype.setLocalplayerrelicid = function (t) {
        return S.Message.setProto3StringField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.InfoResponse.prototype.getRestorewindowondisconnect = function () {
        return S.Message.getBooleanFieldWithDefault(this, 2, !1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.InfoResponse.prototype.setRestorewindowondisconnect = function (t) {
        return S.Message.setProto3BooleanField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.getObserverleave = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.OracleMessage.ObserverLeave, 1)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.setObserverleave = function (t) {
        return S.Message.setOneofWrapperField(this, 1, proto.cade_api.rpc.OracleMessage.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.clearObserverleave = function () {
        return this.setObserverleave(void 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.hasObserverleave = function () {
        return S.Message.getField(this, 1) != null
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.getObserverlobby = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.OracleMessage.ObserverLobby, 2)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.setObserverlobby = function (t) {
        return S.Message.setOneofWrapperField(this, 2, proto.cade_api.rpc.OracleMessage.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.clearObserverlobby = function () {
        return this.setObserverlobby(void 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.hasObserverlobby = function () {
        return S.Message.getField(this, 2) != null
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.getInstalleraction = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.OracleMessage.InstallerAction, 3)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.setInstalleraction = function (t) {
        return S.Message.setOneofWrapperField(this, 3, proto.cade_api.rpc.OracleMessage.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.clearInstalleraction = function () {
        return this.setInstalleraction(void 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.hasInstalleraction = function () {
        return S.Message.getField(this, 3) != null
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.getGamepaused = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.OracleMessage.GamePaused, 4)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.setGamepaused = function (t) {
        return S.Message.setOneofWrapperField(this, 4, proto.cade_api.rpc.OracleMessage.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.clearGamepaused = function () {
        return this.setGamepaused(void 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.hasGamepaused = function () {
        return S.Message.getField(this, 4) != null
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.getCurrentwindowstate = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.WindowState, 5)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.setCurrentwindowstate = function (t) {
        return S.Message.setOneofWrapperField(this, 5, proto.cade_api.rpc.OracleMessage.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.clearCurrentwindowstate = function () {
        return this.setCurrentwindowstate(void 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.hasCurrentwindowstate = function () {
        return S.Message.getField(this, 5) != null
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.getCurrentscreenstate = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.ScreenState, 6)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.setCurrentscreenstate = function (t) {
        return S.Message.setOneofWrapperField(this, 6, proto.cade_api.rpc.OracleMessage.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.clearCurrentscreenstate = function () {
        return this.setCurrentscreenstate(void 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.hasCurrentscreenstate = function () {
        return S.Message.getField(this, 6) != null
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.getCurrentmodal = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Modal, 7)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.setCurrentmodal = function (t) {
        return S.Message.setOneofWrapperField(this, 7, proto.cade_api.rpc.OracleMessage.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.clearCurrentmodal = function () {
        return this.setCurrentmodal(void 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.hasCurrentmodal = function () {
        return S.Message.getField(this, 7) != null
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.getGametype = function () {
        return S.Message.getFieldWithDefault(this, 8, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.setGametype = function (t) {
        return S.Message.setOneofField(this, 8, proto.cade_api.rpc.OracleMessage.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.clearGametype = function () {
        return S.Message.setOneofField(this, 8, proto.cade_api.rpc.OracleMessage.oneofGroups_[0], void 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.hasGametype = function () {
        return S.Message.getField(this, 8) != null
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.getGamestate = function () {
        return S.Message.getFieldWithDefault(this, 9, 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.setGamestate = function (t) {
        return S.Message.setOneofField(this, 9, proto.cade_api.rpc.OracleMessage.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.clearGamestate = function () {
        return S.Message.setOneofField(this, 9, proto.cade_api.rpc.OracleMessage.oneofGroups_[0], void 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.hasGamestate = function () {
        return S.Message.getField(this, 9) != null
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.getInforesponse = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.OracleMessage.InfoResponse, 10)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.setInforesponse = function (t) {
        return S.Message.setOneofWrapperField(this, 10, proto.cade_api.rpc.OracleMessage.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.clearInforesponse = function () {
        return this.setInforesponse(void 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.hasInforesponse = function () {
        return S.Message.getField(this, 10) != null
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.getEmptycurrentmodal = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.OracleMessage.EmptyModal, 11)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.setEmptycurrentmodal = function (t) {
        return S.Message.setOneofWrapperField(this, 11, proto.cade_api.rpc.OracleMessage.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.clearEmptycurrentmodal = function () {
        return this.setEmptycurrentmodal(void 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.hasEmptycurrentmodal = function () {
        return S.Message.getField(this, 11) != null
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.getModalclickresult = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.OracleMessage.ModalClickResult, 12)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.setModalclickresult = function (t) {
        return S.Message.setOneofWrapperField(this, 12, proto.cade_api.rpc.OracleMessage.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.clearModalclickresult = function () {
        return this.setModalclickresult(void 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.hasModalclickresult = function () {
        return S.Message.getField(this, 12) != null
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.getCurrentreplay = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.CurrentReplay, 13)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.setCurrentreplay = function (t) {
        return S.Message.setOneofWrapperField(this, 13, proto.cade_api.rpc.OracleMessage.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.clearCurrentreplay = function () {
        return this.setCurrentreplay(void 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.hasCurrentreplay = function () {
        return S.Message.getField(this, 13) != null
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.getSelectedgame = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.SelectedGameInfo, 14)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.setSelectedgame = function (t) {
        return S.Message.setOneofWrapperField(this, 14, proto.cade_api.rpc.OracleMessage.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.clearSelectedgame = function () {
        return this.setSelectedgame(void 0)
    }
        ;
    proto.cade_api.rpc.OracleMessage.prototype.hasSelectedgame = function () {
        return S.Message.getField(this, 14) != null
    }
        ;
    proto.cade_api.rpc.FramesRequest.repeatedFields_ = [1, 4];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.FramesRequest.prototype.toObject = function (t) {
        return proto.cade_api.rpc.FramesRequest.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.FramesRequest.toObject = function (t, r) {
            var i, n = {
                desiredresolutionsList: S.Message.toObjectList(r.getDesiredresolutionsList(), proto.cade_api.rpc.FramesRequest.ResolutionEntry.toObject, t),
                disablecommands: S.Message.getBooleanFieldWithDefault(r, 2, !1),
                disableparticles: S.Message.getBooleanFieldWithDefault(r, 3, !1),
                particledefinitionwhitelistList: (i = S.Message.getRepeatedField(r, 4)) == null ? void 0 : i,
                disableparticleculling: S.Message.getBooleanFieldWithDefault(r, 5, !1),
                processattacknotificationsforallplayers: S.Message.getBooleanFieldWithDefault(r, 6, !1)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.FramesRequest.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.FramesRequest;
        return proto.cade_api.rpc.FramesRequest.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.FramesRequest.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = new proto.cade_api.rpc.FramesRequest.ResolutionEntry;
                    r.readMessage(n, proto.cade_api.rpc.FramesRequest.ResolutionEntry.deserializeBinaryFromReader),
                        t.addDesiredresolutions(n);
                    break;
                case 2:
                    var n = r.readBool();
                    t.setDisablecommands(n);
                    break;
                case 3:
                    var n = r.readBool();
                    t.setDisableparticles(n);
                    break;
                case 4:
                    var n = r.readString();
                    t.addParticledefinitionwhitelist(n);
                    break;
                case 5:
                    var n = r.readBool();
                    t.setDisableparticleculling(n);
                    break;
                case 6:
                    var n = r.readBool();
                    t.setProcessattacknotificationsforallplayers(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.FramesRequest.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.FramesRequest.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.FramesRequest.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getDesiredresolutionsList(),
            i.length > 0 && r.writeRepeatedMessage(1, i, proto.cade_api.rpc.FramesRequest.ResolutionEntry.serializeBinaryToWriter),
            i = t.getDisablecommands(),
            i && r.writeBool(2, i),
            i = t.getDisableparticles(),
            i && r.writeBool(3, i),
            i = t.getParticledefinitionwhitelistList(),
            i.length > 0 && r.writeRepeatedString(4, i),
            i = t.getDisableparticleculling(),
            i && r.writeBool(5, i),
            i = t.getProcessattacknotificationsforallplayers(),
            i && r.writeBool(6, i)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.FramesRequest.ResolutionEntry.prototype.toObject = function (t) {
        return proto.cade_api.rpc.FramesRequest.ResolutionEntry.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.FramesRequest.ResolutionEntry.toObject = function (t, r) {
            var i, n = {
                key: S.Message.getFieldWithDefault(r, 1, 0),
                gametimeresolution: S.Message.getFieldWithDefault(r, 2, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.FramesRequest.ResolutionEntry.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.FramesRequest.ResolutionEntry;
        return proto.cade_api.rpc.FramesRequest.ResolutionEntry.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.FramesRequest.ResolutionEntry.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readEnum();
                    t.setKey(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setGametimeresolution(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.FramesRequest.ResolutionEntry.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.FramesRequest.ResolutionEntry.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.FramesRequest.ResolutionEntry.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getKey(),
            i !== 0 && r.writeEnum(1, i),
            i = t.getGametimeresolution(),
            i !== 0 && r.writeInt32(2, i)
    }
        ;
    proto.cade_api.rpc.FramesRequest.ResolutionEntry.Category = {
        TIME_STEP: 0,
        LOW_PRIORITY: 1,
        SLEEPING_UNIT: 2,
        PARTICLES: 3,
        GAME_OPTIONS: 4,
        PARTICLES_SIMULATION_OUTPUT: 5,
        LOW_PRIORITY_2: 6
    };
    proto.cade_api.rpc.FramesRequest.ResolutionEntry.prototype.getKey = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.FramesRequest.ResolutionEntry.prototype.setKey = function (t) {
        return S.Message.setProto3EnumField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.FramesRequest.ResolutionEntry.prototype.getGametimeresolution = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.FramesRequest.ResolutionEntry.prototype.setGametimeresolution = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.FramesRequest.prototype.getDesiredresolutionsList = function () {
        return S.Message.getRepeatedWrapperField(this, proto.cade_api.rpc.FramesRequest.ResolutionEntry, 1)
    }
        ;
    proto.cade_api.rpc.FramesRequest.prototype.setDesiredresolutionsList = function (t) {
        return S.Message.setRepeatedWrapperField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.FramesRequest.prototype.addDesiredresolutions = function (t, r) {
        return S.Message.addToRepeatedWrapperField(this, 1, t, proto.cade_api.rpc.FramesRequest.ResolutionEntry, r)
    }
        ;
    proto.cade_api.rpc.FramesRequest.prototype.clearDesiredresolutionsList = function () {
        return this.setDesiredresolutionsList([])
    }
        ;
    proto.cade_api.rpc.FramesRequest.prototype.getDisablecommands = function () {
        return S.Message.getBooleanFieldWithDefault(this, 2, !1)
    }
        ;
    proto.cade_api.rpc.FramesRequest.prototype.setDisablecommands = function (t) {
        return S.Message.setProto3BooleanField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.FramesRequest.prototype.getDisableparticles = function () {
        return S.Message.getBooleanFieldWithDefault(this, 3, !1)
    }
        ;
    proto.cade_api.rpc.FramesRequest.prototype.setDisableparticles = function (t) {
        return S.Message.setProto3BooleanField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.FramesRequest.prototype.getParticledefinitionwhitelistList = function () {
        return S.Message.getRepeatedField(this, 4)
    }
        ;
    proto.cade_api.rpc.FramesRequest.prototype.setParticledefinitionwhitelistList = function (t) {
        return S.Message.setField(this, 4, t || [])
    }
        ;
    proto.cade_api.rpc.FramesRequest.prototype.addParticledefinitionwhitelist = function (t, r) {
        return S.Message.addToRepeatedField(this, 4, t, r)
    }
        ;
    proto.cade_api.rpc.FramesRequest.prototype.clearParticledefinitionwhitelistList = function () {
        return this.setParticledefinitionwhitelistList([])
    }
        ;
    proto.cade_api.rpc.FramesRequest.prototype.getDisableparticleculling = function () {
        return S.Message.getBooleanFieldWithDefault(this, 5, !1)
    }
        ;
    proto.cade_api.rpc.FramesRequest.prototype.setDisableparticleculling = function (t) {
        return S.Message.setProto3BooleanField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.FramesRequest.prototype.getProcessattacknotificationsforallplayers = function () {
        return S.Message.getBooleanFieldWithDefault(this, 6, !1)
    }
        ;
    proto.cade_api.rpc.FramesRequest.prototype.setProcessattacknotificationsforallplayers = function (t) {
        return S.Message.setProto3BooleanField(this, 6, t)
    }
        ;
    proto.cade_api.rpc.FrameSequence.repeatedFields_ = [1];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.FrameSequence.prototype.toObject = function (t) {
        return proto.cade_api.rpc.FrameSequence.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.FrameSequence.toObject = function (t, r) {
            var i, n = {
                frameList: S.Message.toObjectList(r.getFrameList(), proto.cade_api.rpc.Frame.toObject, t),
                sendingworldtime: S.Message.getFieldWithDefault(r, 2, 0),
                numberofframesqueued: S.Message.getFieldWithDefault(r, 3, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.FrameSequence.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.FrameSequence;
        return proto.cade_api.rpc.FrameSequence.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.FrameSequence.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = new proto.cade_api.rpc.Frame;
                    r.readMessage(n, proto.cade_api.rpc.Frame.deserializeBinaryFromReader),
                        t.addFrame(n);
                    break;
                case 2:
                    var n = r.readUint32();
                    t.setSendingworldtime(n);
                    break;
                case 3:
                    var n = r.readUint32();
                    t.setNumberofframesqueued(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.FrameSequence.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.FrameSequence.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.FrameSequence.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getFrameList(),
            i.length > 0 && r.writeRepeatedMessage(1, i, proto.cade_api.rpc.Frame.serializeBinaryToWriter),
            i = t.getSendingworldtime(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getNumberofframesqueued(),
            i !== 0 && r.writeUint32(3, i)
    }
        ;
    proto.cade_api.rpc.FrameSequence.prototype.getFrameList = function () {
        return S.Message.getRepeatedWrapperField(this, proto.cade_api.rpc.Frame, 1)
    }
        ;
    proto.cade_api.rpc.FrameSequence.prototype.setFrameList = function (t) {
        return S.Message.setRepeatedWrapperField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.FrameSequence.prototype.addFrame = function (t, r) {
        return S.Message.addToRepeatedWrapperField(this, 1, t, proto.cade_api.rpc.Frame, r)
    }
        ;
    proto.cade_api.rpc.FrameSequence.prototype.clearFrameList = function () {
        return this.setFrameList([])
    }
        ;
    proto.cade_api.rpc.FrameSequence.prototype.getSendingworldtime = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.FrameSequence.prototype.setSendingworldtime = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.FrameSequence.prototype.getNumberofframesqueued = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.FrameSequence.prototype.setNumberofframesqueued = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Frame.repeatedFields_ = [3, 8, 5, 6];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Frame.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Frame.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Frame.toObject = function (t, r) {
            var i, n = {
                time: S.Message.getFieldWithDefault(r, 1, 0),
                patch: r.getPatch_asB64(),
                eventList: S.Message.toObjectList(r.getEventList(), proto.cade_api.rpc.Event.toObject, t),
                reversepatch: r.getReversepatch_asB64(),
                timestepsskipped: S.Message.getFieldWithDefault(r, 7, 0),
                skippedtimestepsList: (i = S.Message.getRepeatedField(r, 8)) == null ? void 0 : i,
                metricsList: S.Message.toObjectList(r.getMetricsList(), proto.cade_api.rpc.Frame.MetricEntry.toObject, t),
                commandList: S.Message.toObjectList(r.getCommandList(), proto.cade_api.rpc.Command.toObject, t)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Frame.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Frame;
        return proto.cade_api.rpc.Frame.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Frame.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setTime(n);
                    break;
                case 2:
                    var n = r.readBytes();
                    t.setPatch(n);
                    break;
                case 3:
                    var n = new proto.cade_api.rpc.Event;
                    r.readMessage(n, proto.cade_api.rpc.Event.deserializeBinaryFromReader),
                        t.addEvent(n);
                    break;
                case 4:
                    var n = r.readBytes();
                    t.setReversepatch(n);
                    break;
                case 7:
                    var n = r.readUint32();
                    t.setTimestepsskipped(n);
                    break;
                case 8:
                    var n = r.readPackedUint32();
                    t.setSkippedtimestepsList(n);
                    break;
                case 5:
                    var n = new proto.cade_api.rpc.Frame.MetricEntry;
                    r.readMessage(n, proto.cade_api.rpc.Frame.MetricEntry.deserializeBinaryFromReader),
                        t.addMetrics(n);
                    break;
                case 6:
                    var n = new proto.cade_api.rpc.Command;
                    r.readMessage(n, proto.cade_api.rpc.Command.deserializeBinaryFromReader),
                        t.addCommand(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Frame.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Frame.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Frame.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getTime(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getPatch_asU8(),
            i.length > 0 && r.writeBytes(2, i),
            i = t.getEventList(),
            i.length > 0 && r.writeRepeatedMessage(3, i, proto.cade_api.rpc.Event.serializeBinaryToWriter),
            i = t.getReversepatch_asU8(),
            i.length > 0 && r.writeBytes(4, i),
            i = t.getTimestepsskipped(),
            i !== 0 && r.writeUint32(7, i),
            i = t.getSkippedtimestepsList(),
            i.length > 0 && r.writePackedUint32(8, i),
            i = t.getMetricsList(),
            i.length > 0 && r.writeRepeatedMessage(5, i, proto.cade_api.rpc.Frame.MetricEntry.serializeBinaryToWriter),
            i = t.getCommandList(),
            i.length > 0 && r.writeRepeatedMessage(6, i, proto.cade_api.rpc.Command.serializeBinaryToWriter)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Frame.MetricEntry.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Frame.MetricEntry.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Frame.MetricEntry.toObject = function (t, r) {
            var i, n = {
                key: S.Message.getFieldWithDefault(r, 1, 0),
                timemeasured: S.Message.getFieldWithDefault(r, 2, 0),
                count: S.Message.getFieldWithDefault(r, 3, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Frame.MetricEntry.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Frame.MetricEntry;
        return proto.cade_api.rpc.Frame.MetricEntry.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Frame.MetricEntry.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readEnum();
                    t.setKey(n);
                    break;
                case 2:
                    var n = r.readUint32();
                    t.setTimemeasured(n);
                    break;
                case 3:
                    var n = r.readUint32();
                    t.setCount(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Frame.MetricEntry.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Frame.MetricEntry.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Frame.MetricEntry.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getKey(),
            i !== 0 && r.writeEnum(1, i),
            i = t.getTimemeasured(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getCount(),
            i !== 0 && r.writeUint32(3, i)
    }
        ;
    proto.cade_api.rpc.Frame.MetricEntry.Region = {
        ALL: 0,
        ENTITIES: 1,
        SLEEPING_ENTITIES: 2,
        MAP_TILES: 3,
        UNIFIED_VISIBLE_MAP: 4,
        PARTICLES: 5,
        MASTER_ENTITIES: 6,
        RESEARCH_STATES: 7,
        VICTORY_POINTS: 8,
        APPLY_PATCH: 9,
        GAME_OPTIONS: 10
    };
    proto.cade_api.rpc.Frame.MetricEntry.prototype.getKey = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Frame.MetricEntry.prototype.setKey = function (t) {
        return S.Message.setProto3EnumField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Frame.MetricEntry.prototype.getTimemeasured = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Frame.MetricEntry.prototype.setTimemeasured = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Frame.MetricEntry.prototype.getCount = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Frame.MetricEntry.prototype.setCount = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Frame.prototype.getTime = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Frame.prototype.setTime = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Frame.prototype.getPatch = function () {
        return S.Message.getFieldWithDefault(this, 2, "")
    }
        ;
    proto.cade_api.rpc.Frame.prototype.getPatch_asB64 = function () {
        return S.Message.bytesAsB64(this.getPatch())
    }
        ;
    proto.cade_api.rpc.Frame.prototype.getPatch_asU8 = function () {
        return S.Message.bytesAsU8(this.getPatch())
    }
        ;
    proto.cade_api.rpc.Frame.prototype.setPatch = function (t) {
        return S.Message.setProto3BytesField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Frame.prototype.getEventList = function () {
        return S.Message.getRepeatedWrapperField(this, proto.cade_api.rpc.Event, 3)
    }
        ;
    proto.cade_api.rpc.Frame.prototype.setEventList = function (t) {
        return S.Message.setRepeatedWrapperField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Frame.prototype.addEvent = function (t, r) {
        return S.Message.addToRepeatedWrapperField(this, 3, t, proto.cade_api.rpc.Event, r)
    }
        ;
    proto.cade_api.rpc.Frame.prototype.clearEventList = function () {
        return this.setEventList([])
    }
        ;
    proto.cade_api.rpc.Frame.prototype.getReversepatch = function () {
        return S.Message.getFieldWithDefault(this, 4, "")
    }
        ;
    proto.cade_api.rpc.Frame.prototype.getReversepatch_asB64 = function () {
        return S.Message.bytesAsB64(this.getReversepatch())
    }
        ;
    proto.cade_api.rpc.Frame.prototype.getReversepatch_asU8 = function () {
        return S.Message.bytesAsU8(this.getReversepatch())
    }
        ;
    proto.cade_api.rpc.Frame.prototype.setReversepatch = function (t) {
        return S.Message.setProto3BytesField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Frame.prototype.getTimestepsskipped = function () {
        return S.Message.getFieldWithDefault(this, 7, 0)
    }
        ;
    proto.cade_api.rpc.Frame.prototype.setTimestepsskipped = function (t) {
        return S.Message.setProto3IntField(this, 7, t)
    }
        ;
    proto.cade_api.rpc.Frame.prototype.getSkippedtimestepsList = function () {
        return S.Message.getRepeatedField(this, 8)
    }
        ;
    proto.cade_api.rpc.Frame.prototype.setSkippedtimestepsList = function (t) {
        return S.Message.setField(this, 8, t || [])
    }
        ;
    proto.cade_api.rpc.Frame.prototype.addSkippedtimesteps = function (t, r) {
        return S.Message.addToRepeatedField(this, 8, t, r)
    }
        ;
    proto.cade_api.rpc.Frame.prototype.clearSkippedtimestepsList = function () {
        return this.setSkippedtimestepsList([])
    }
        ;
    proto.cade_api.rpc.Frame.prototype.getMetricsList = function () {
        return S.Message.getRepeatedWrapperField(this, proto.cade_api.rpc.Frame.MetricEntry, 5)
    }
        ;
    proto.cade_api.rpc.Frame.prototype.setMetricsList = function (t) {
        return S.Message.setRepeatedWrapperField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.Frame.prototype.addMetrics = function (t, r) {
        return S.Message.addToRepeatedWrapperField(this, 5, t, proto.cade_api.rpc.Frame.MetricEntry, r)
    }
        ;
    proto.cade_api.rpc.Frame.prototype.clearMetricsList = function () {
        return this.setMetricsList([])
    }
        ;
    proto.cade_api.rpc.Frame.prototype.getCommandList = function () {
        return S.Message.getRepeatedWrapperField(this, proto.cade_api.rpc.Command, 6)
    }
        ;
    proto.cade_api.rpc.Frame.prototype.setCommandList = function (t) {
        return S.Message.setRepeatedWrapperField(this, 6, t)
    }
        ;
    proto.cade_api.rpc.Frame.prototype.addCommand = function (t, r) {
        return S.Message.addToRepeatedWrapperField(this, 6, t, proto.cade_api.rpc.Command, r)
    }
        ;
    proto.cade_api.rpc.Frame.prototype.clearCommandList = function () {
        return this.setCommandList([])
    }
        ;
    proto.cade_api.rpc.StoredPatchTimeEntry.repeatedFields_ = [6, 7];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.StoredPatchTimeEntry.prototype.toObject = function (t) {
        return proto.cade_api.rpc.StoredPatchTimeEntry.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.StoredPatchTimeEntry.toObject = function (t, r) {
            var i, n = {
                eventList: S.Message.toObjectList(r.getEventList(), proto.cade_api.rpc.Event.toObject, t),
                commandList: S.Message.toObjectList(r.getCommandList(), proto.cade_api.rpc.Command.toObject, t)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.StoredPatchTimeEntry.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.StoredPatchTimeEntry;
        return proto.cade_api.rpc.StoredPatchTimeEntry.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.StoredPatchTimeEntry.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 6:
                    var n = new proto.cade_api.rpc.Event;
                    r.readMessage(n, proto.cade_api.rpc.Event.deserializeBinaryFromReader),
                        t.addEvent(n);
                    break;
                case 7:
                    var n = new proto.cade_api.rpc.Command;
                    r.readMessage(n, proto.cade_api.rpc.Command.deserializeBinaryFromReader),
                        t.addCommand(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.StoredPatchTimeEntry.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.StoredPatchTimeEntry.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.StoredPatchTimeEntry.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getEventList(),
            i.length > 0 && r.writeRepeatedMessage(6, i, proto.cade_api.rpc.Event.serializeBinaryToWriter),
            i = t.getCommandList(),
            i.length > 0 && r.writeRepeatedMessage(7, i, proto.cade_api.rpc.Command.serializeBinaryToWriter)
    }
        ;
    proto.cade_api.rpc.StoredPatchTimeEntry.prototype.getEventList = function () {
        return S.Message.getRepeatedWrapperField(this, proto.cade_api.rpc.Event, 6)
    }
        ;
    proto.cade_api.rpc.StoredPatchTimeEntry.prototype.setEventList = function (t) {
        return S.Message.setRepeatedWrapperField(this, 6, t)
    }
        ;
    proto.cade_api.rpc.StoredPatchTimeEntry.prototype.addEvent = function (t, r) {
        return S.Message.addToRepeatedWrapperField(this, 6, t, proto.cade_api.rpc.Event, r)
    }
        ;
    proto.cade_api.rpc.StoredPatchTimeEntry.prototype.clearEventList = function () {
        return this.setEventList([])
    }
        ;
    proto.cade_api.rpc.StoredPatchTimeEntry.prototype.getCommandList = function () {
        return S.Message.getRepeatedWrapperField(this, proto.cade_api.rpc.Command, 7)
    }
        ;
    proto.cade_api.rpc.StoredPatchTimeEntry.prototype.setCommandList = function (t) {
        return S.Message.setRepeatedWrapperField(this, 7, t)
    }
        ;
    proto.cade_api.rpc.StoredPatchTimeEntry.prototype.addCommand = function (t, r) {
        return S.Message.addToRepeatedWrapperField(this, 7, t, proto.cade_api.rpc.Command, r)
    }
        ;
    proto.cade_api.rpc.StoredPatchTimeEntry.prototype.clearCommandList = function () {
        return this.setCommandList([])
    }
        ;
    proto.cade_api.rpc.Event.oneofGroups_ = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]];
    proto.cade_api.rpc.Event.EventCase = {
        EVENT_NOT_SET: 0,
        ENTITYKILLED: 1,
        MARKETTRANSACTION: 2,
        TRIBUTE: 3,
        PLAYERCHAT: 4,
        COMBATNOTIFICATIONSOUND: 5,
        DAMAGE: 6,
        MONKCONVERSION: 7,
        NOTIFICATIONTRAINDONE: 8,
        NOTIFICATIONRESEARCHDONE: 9,
        NOTIFICATIONFARMORFISHTRAPDIED: 10,
        NOTIFICATIONWONDER: 11
    };
    proto.cade_api.rpc.Event.prototype.getEventCase = function () {
        return S.Message.computeOneofCase(this, proto.cade_api.rpc.Event.oneofGroups_[0])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Event.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Event.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Event.toObject = function (t, r) {
            var i, n = {
                entitykilled: (i = r.getEntitykilled()) && proto.cade_api.rpc.Event.EntityKilled.toObject(t, i),
                markettransaction: (i = r.getMarkettransaction()) && proto.cade_api.rpc.Event.MarketTransaction.toObject(t, i),
                tribute: (i = r.getTribute()) && proto.cade_api.rpc.Event.Tribute.toObject(t, i),
                playerchat: (i = r.getPlayerchat()) && proto.cade_api.rpc.Event.PlayerChat.toObject(t, i),
                combatnotificationsound: (i = r.getCombatnotificationsound()) && proto.cade_api.rpc.Event.CombatNotificationSound.toObject(t, i),
                damage: (i = r.getDamage()) && proto.cade_api.rpc.Event.Damage.toObject(t, i),
                monkconversion: (i = r.getMonkconversion()) && proto.cade_api.rpc.Event.MonkConversion.toObject(t, i),
                notificationtraindone: (i = r.getNotificationtraindone()) && proto.cade_api.rpc.Event.NotificationTrainDone.toObject(t, i),
                notificationresearchdone: (i = r.getNotificationresearchdone()) && proto.cade_api.rpc.Event.NotificationResearchDone.toObject(t, i),
                notificationfarmorfishtrapdied: (i = r.getNotificationfarmorfishtrapdied()) && proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied.toObject(t, i),
                notificationwonder: (i = r.getNotificationwonder()) && proto.cade_api.rpc.Event.NotificationWonder.toObject(t, i)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Event.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Event;
        return proto.cade_api.rpc.Event.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Event.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = new proto.cade_api.rpc.Event.EntityKilled;
                    r.readMessage(n, proto.cade_api.rpc.Event.EntityKilled.deserializeBinaryFromReader),
                        t.setEntitykilled(n);
                    break;
                case 2:
                    var n = new proto.cade_api.rpc.Event.MarketTransaction;
                    r.readMessage(n, proto.cade_api.rpc.Event.MarketTransaction.deserializeBinaryFromReader),
                        t.setMarkettransaction(n);
                    break;
                case 3:
                    var n = new proto.cade_api.rpc.Event.Tribute;
                    r.readMessage(n, proto.cade_api.rpc.Event.Tribute.deserializeBinaryFromReader),
                        t.setTribute(n);
                    break;
                case 4:
                    var n = new proto.cade_api.rpc.Event.PlayerChat;
                    r.readMessage(n, proto.cade_api.rpc.Event.PlayerChat.deserializeBinaryFromReader),
                        t.setPlayerchat(n);
                    break;
                case 5:
                    var n = new proto.cade_api.rpc.Event.CombatNotificationSound;
                    r.readMessage(n, proto.cade_api.rpc.Event.CombatNotificationSound.deserializeBinaryFromReader),
                        t.setCombatnotificationsound(n);
                    break;
                case 6:
                    var n = new proto.cade_api.rpc.Event.Damage;
                    r.readMessage(n, proto.cade_api.rpc.Event.Damage.deserializeBinaryFromReader),
                        t.setDamage(n);
                    break;
                case 7:
                    var n = new proto.cade_api.rpc.Event.MonkConversion;
                    r.readMessage(n, proto.cade_api.rpc.Event.MonkConversion.deserializeBinaryFromReader),
                        t.setMonkconversion(n);
                    break;
                case 8:
                    var n = new proto.cade_api.rpc.Event.NotificationTrainDone;
                    r.readMessage(n, proto.cade_api.rpc.Event.NotificationTrainDone.deserializeBinaryFromReader),
                        t.setNotificationtraindone(n);
                    break;
                case 9:
                    var n = new proto.cade_api.rpc.Event.NotificationResearchDone;
                    r.readMessage(n, proto.cade_api.rpc.Event.NotificationResearchDone.deserializeBinaryFromReader),
                        t.setNotificationresearchdone(n);
                    break;
                case 10:
                    var n = new proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied;
                    r.readMessage(n, proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied.deserializeBinaryFromReader),
                        t.setNotificationfarmorfishtrapdied(n);
                    break;
                case 11:
                    var n = new proto.cade_api.rpc.Event.NotificationWonder;
                    r.readMessage(n, proto.cade_api.rpc.Event.NotificationWonder.deserializeBinaryFromReader),
                        t.setNotificationwonder(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Event.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Event.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Event.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getEntitykilled(),
            i != null && r.writeMessage(1, i, proto.cade_api.rpc.Event.EntityKilled.serializeBinaryToWriter),
            i = t.getMarkettransaction(),
            i != null && r.writeMessage(2, i, proto.cade_api.rpc.Event.MarketTransaction.serializeBinaryToWriter),
            i = t.getTribute(),
            i != null && r.writeMessage(3, i, proto.cade_api.rpc.Event.Tribute.serializeBinaryToWriter),
            i = t.getPlayerchat(),
            i != null && r.writeMessage(4, i, proto.cade_api.rpc.Event.PlayerChat.serializeBinaryToWriter),
            i = t.getCombatnotificationsound(),
            i != null && r.writeMessage(5, i, proto.cade_api.rpc.Event.CombatNotificationSound.serializeBinaryToWriter),
            i = t.getDamage(),
            i != null && r.writeMessage(6, i, proto.cade_api.rpc.Event.Damage.serializeBinaryToWriter),
            i = t.getMonkconversion(),
            i != null && r.writeMessage(7, i, proto.cade_api.rpc.Event.MonkConversion.serializeBinaryToWriter),
            i = t.getNotificationtraindone(),
            i != null && r.writeMessage(8, i, proto.cade_api.rpc.Event.NotificationTrainDone.serializeBinaryToWriter),
            i = t.getNotificationresearchdone(),
            i != null && r.writeMessage(9, i, proto.cade_api.rpc.Event.NotificationResearchDone.serializeBinaryToWriter),
            i = t.getNotificationfarmorfishtrapdied(),
            i != null && r.writeMessage(10, i, proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied.serializeBinaryToWriter),
            i = t.getNotificationwonder(),
            i != null && r.writeMessage(11, i, proto.cade_api.rpc.Event.NotificationWonder.serializeBinaryToWriter)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Event.EntityKilled.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Event.EntityKilled.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Event.EntityKilled.toObject = function (t, r) {
            var i, n = {
                id: S.Message.getFieldWithDefault(r, 1, 0),
                killerid: S.Message.getFieldWithDefault(r, 2, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Event.EntityKilled.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Event.EntityKilled;
        return proto.cade_api.rpc.Event.EntityKilled.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Event.EntityKilled.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setId(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setKillerid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Event.EntityKilled.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Event.EntityKilled.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Event.EntityKilled.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getId(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getKillerid(),
            i !== 0 && r.writeInt32(2, i)
    }
        ;
    proto.cade_api.rpc.Event.EntityKilled.prototype.getId = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Event.EntityKilled.prototype.setId = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Event.EntityKilled.prototype.getKillerid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Event.EntityKilled.prototype.setKillerid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Event.MarketTransaction.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Event.MarketTransaction.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Event.MarketTransaction.toObject = function (t, r) {
            var i, n = {
                playerid: S.Message.getFieldWithDefault(r, 1, 0),
                attributetype: S.Message.getFieldWithDefault(r, 2, 0),
                attributebefore: S.Message.getFloatingPointFieldWithDefault(r, 3, 0),
                goldbefore: S.Message.getFloatingPointFieldWithDefault(r, 4, 0),
                attributeexchanged: S.Message.getFloatingPointFieldWithDefault(r, 5, 0),
                goldrate: S.Message.getFloatingPointFieldWithDefault(r, 6, 0),
                goldexchanged: S.Message.getFloatingPointFieldWithDefault(r, 7, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Event.MarketTransaction.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Event.MarketTransaction;
        return proto.cade_api.rpc.Event.MarketTransaction.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Event.MarketTransaction.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setPlayerid(n);
                    break;
                case 2:
                    var n = r.readUint32();
                    t.setAttributetype(n);
                    break;
                case 3:
                    var n = r.readFloat();
                    t.setAttributebefore(n);
                    break;
                case 4:
                    var n = r.readFloat();
                    t.setGoldbefore(n);
                    break;
                case 5:
                    var n = r.readFloat();
                    t.setAttributeexchanged(n);
                    break;
                case 6:
                    var n = r.readFloat();
                    t.setGoldrate(n);
                    break;
                case 7:
                    var n = r.readFloat();
                    t.setGoldexchanged(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Event.MarketTransaction.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Event.MarketTransaction.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Event.MarketTransaction.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getPlayerid(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getAttributetype(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getAttributebefore(),
            i !== 0 && r.writeFloat(3, i),
            i = t.getGoldbefore(),
            i !== 0 && r.writeFloat(4, i),
            i = t.getAttributeexchanged(),
            i !== 0 && r.writeFloat(5, i),
            i = t.getGoldrate(),
            i !== 0 && r.writeFloat(6, i),
            i = t.getGoldexchanged(),
            i !== 0 && r.writeFloat(7, i)
    }
        ;
    proto.cade_api.rpc.Event.MarketTransaction.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Event.MarketTransaction.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Event.MarketTransaction.prototype.getAttributetype = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Event.MarketTransaction.prototype.setAttributetype = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Event.MarketTransaction.prototype.getAttributebefore = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Event.MarketTransaction.prototype.setAttributebefore = function (t) {
        return S.Message.setProto3FloatField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Event.MarketTransaction.prototype.getGoldbefore = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Event.MarketTransaction.prototype.setGoldbefore = function (t) {
        return S.Message.setProto3FloatField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Event.MarketTransaction.prototype.getAttributeexchanged = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 5, 0)
    }
        ;
    proto.cade_api.rpc.Event.MarketTransaction.prototype.setAttributeexchanged = function (t) {
        return S.Message.setProto3FloatField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.Event.MarketTransaction.prototype.getGoldrate = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 6, 0)
    }
        ;
    proto.cade_api.rpc.Event.MarketTransaction.prototype.setGoldrate = function (t) {
        return S.Message.setProto3FloatField(this, 6, t)
    }
        ;
    proto.cade_api.rpc.Event.MarketTransaction.prototype.getGoldexchanged = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 7, 0)
    }
        ;
    proto.cade_api.rpc.Event.MarketTransaction.prototype.setGoldexchanged = function (t) {
        return S.Message.setProto3FloatField(this, 7, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Event.Tribute.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Event.Tribute.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Event.Tribute.toObject = function (t, r) {
            var i, n = {
                senderid: S.Message.getFieldWithDefault(r, 1, 0),
                receiverid: S.Message.getFieldWithDefault(r, 2, 0),
                attributetype: S.Message.getFieldWithDefault(r, 3, 0),
                sendervaluebefore: S.Message.getFloatingPointFieldWithDefault(r, 4, 0),
                sendervaluechange: S.Message.getFloatingPointFieldWithDefault(r, 5, 0),
                receivervaluebefore: S.Message.getFloatingPointFieldWithDefault(r, 6, 0),
                receivervaluechange: S.Message.getFloatingPointFieldWithDefault(r, 7, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Event.Tribute.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Event.Tribute;
        return proto.cade_api.rpc.Event.Tribute.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Event.Tribute.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setSenderid(n);
                    break;
                case 2:
                    var n = r.readUint32();
                    t.setReceiverid(n);
                    break;
                case 3:
                    var n = r.readUint32();
                    t.setAttributetype(n);
                    break;
                case 4:
                    var n = r.readFloat();
                    t.setSendervaluebefore(n);
                    break;
                case 5:
                    var n = r.readFloat();
                    t.setSendervaluechange(n);
                    break;
                case 6:
                    var n = r.readFloat();
                    t.setReceivervaluebefore(n);
                    break;
                case 7:
                    var n = r.readFloat();
                    t.setReceivervaluechange(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Event.Tribute.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Event.Tribute.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Event.Tribute.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getSenderid(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getReceiverid(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getAttributetype(),
            i !== 0 && r.writeUint32(3, i),
            i = t.getSendervaluebefore(),
            i !== 0 && r.writeFloat(4, i),
            i = t.getSendervaluechange(),
            i !== 0 && r.writeFloat(5, i),
            i = t.getReceivervaluebefore(),
            i !== 0 && r.writeFloat(6, i),
            i = t.getReceivervaluechange(),
            i !== 0 && r.writeFloat(7, i)
    }
        ;
    proto.cade_api.rpc.Event.Tribute.prototype.getSenderid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Event.Tribute.prototype.setSenderid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Event.Tribute.prototype.getReceiverid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Event.Tribute.prototype.setReceiverid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Event.Tribute.prototype.getAttributetype = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Event.Tribute.prototype.setAttributetype = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Event.Tribute.prototype.getSendervaluebefore = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Event.Tribute.prototype.setSendervaluebefore = function (t) {
        return S.Message.setProto3FloatField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Event.Tribute.prototype.getSendervaluechange = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 5, 0)
    }
        ;
    proto.cade_api.rpc.Event.Tribute.prototype.setSendervaluechange = function (t) {
        return S.Message.setProto3FloatField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.Event.Tribute.prototype.getReceivervaluebefore = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 6, 0)
    }
        ;
    proto.cade_api.rpc.Event.Tribute.prototype.setReceivervaluebefore = function (t) {
        return S.Message.setProto3FloatField(this, 6, t)
    }
        ;
    proto.cade_api.rpc.Event.Tribute.prototype.getReceivervaluechange = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 7, 0)
    }
        ;
    proto.cade_api.rpc.Event.Tribute.prototype.setReceivervaluechange = function (t) {
        return S.Message.setProto3FloatField(this, 7, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Event.PlayerChat.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Event.PlayerChat.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Event.PlayerChat.toObject = function (t, r) {
            var i, n = {
                playerid: S.Message.getFieldWithDefault(r, 1, 0),
                commplayerid: S.Message.getFieldWithDefault(r, 2, 0),
                channel: S.Message.getFieldWithDefault(r, 3, 0),
                text: S.Message.getFieldWithDefault(r, 4, ""),
                taunt: S.Message.getFieldWithDefault(r, 5, 0),
                destinationmap: S.Message.getFieldWithDefault(r, 6, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Event.PlayerChat.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Event.PlayerChat;
        return proto.cade_api.rpc.Event.PlayerChat.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Event.PlayerChat.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setPlayerid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setCommplayerid(n);
                    break;
                case 3:
                    var n = r.readEnum();
                    t.setChannel(n);
                    break;
                case 4:
                    var n = r.readString();
                    t.setText(n);
                    break;
                case 5:
                    var n = r.readInt32();
                    t.setTaunt(n);
                    break;
                case 6:
                    var n = r.readUint32();
                    t.setDestinationmap(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Event.PlayerChat.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Event.PlayerChat.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Event.PlayerChat.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getPlayerid(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getCommplayerid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getChannel(),
            i !== 0 && r.writeEnum(3, i),
            i = t.getText(),
            i.length > 0 && r.writeString(4, i),
            i = t.getTaunt(),
            i !== 0 && r.writeInt32(5, i),
            i = t.getDestinationmap(),
            i !== 0 && r.writeUint32(6, i)
    }
        ;
    proto.cade_api.rpc.Event.PlayerChat.Channel = {
        DEFAULT: 0,
        ALLCHAT: 1,
        TEAMCHAT: 2,
        ENEMYCHAT: 3
    };
    proto.cade_api.rpc.Event.PlayerChat.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Event.PlayerChat.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Event.PlayerChat.prototype.getCommplayerid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Event.PlayerChat.prototype.setCommplayerid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Event.PlayerChat.prototype.getChannel = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Event.PlayerChat.prototype.setChannel = function (t) {
        return S.Message.setProto3EnumField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Event.PlayerChat.prototype.getText = function () {
        return S.Message.getFieldWithDefault(this, 4, "")
    }
        ;
    proto.cade_api.rpc.Event.PlayerChat.prototype.setText = function (t) {
        return S.Message.setProto3StringField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Event.PlayerChat.prototype.getTaunt = function () {
        return S.Message.getFieldWithDefault(this, 5, 0)
    }
        ;
    proto.cade_api.rpc.Event.PlayerChat.prototype.setTaunt = function (t) {
        return S.Message.setProto3IntField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.Event.PlayerChat.prototype.getDestinationmap = function () {
        return S.Message.getFieldWithDefault(this, 6, 0)
    }
        ;
    proto.cade_api.rpc.Event.PlayerChat.prototype.setDestinationmap = function (t) {
        return S.Message.setProto3IntField(this, 6, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Event.CombatNotificationSound.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Event.CombatNotificationSound.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Event.CombatNotificationSound.toObject = function (t, r) {
            var i, n = {
                receiverid: S.Message.getFieldWithDefault(r, 1, 0),
                type: S.Message.getFieldWithDefault(r, 2, 0),
                attackedobjectid: S.Message.getFieldWithDefault(r, 3, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Event.CombatNotificationSound.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Event.CombatNotificationSound;
        return proto.cade_api.rpc.Event.CombatNotificationSound.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Event.CombatNotificationSound.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setReceiverid(n);
                    break;
                case 2:
                    var n = r.readEnum();
                    t.setType(n);
                    break;
                case 3:
                    var n = r.readInt32();
                    t.setAttackedobjectid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Event.CombatNotificationSound.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Event.CombatNotificationSound.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Event.CombatNotificationSound.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getReceiverid(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getType(),
            i !== 0 && r.writeEnum(2, i),
            i = t.getAttackedobjectid(),
            i !== 0 && r.writeInt32(3, i)
    }
        ;
    proto.cade_api.rpc.Event.CombatNotificationSound.Type = {
        NORMAL: 0,
        WOLF: 1,
        TOWN: 2
    };
    proto.cade_api.rpc.Event.CombatNotificationSound.prototype.getReceiverid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Event.CombatNotificationSound.prototype.setReceiverid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Event.CombatNotificationSound.prototype.getType = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Event.CombatNotificationSound.prototype.setType = function (t) {
        return S.Message.setProto3EnumField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Event.CombatNotificationSound.prototype.getAttackedobjectid = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Event.CombatNotificationSound.prototype.setAttackedobjectid = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Event.Damage.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Event.Damage.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Event.Damage.toObject = function (t, r) {
            var i, n = {
                entityid: S.Message.getFieldWithDefault(r, 1, 0),
                attackerid: S.Message.getFieldWithDefault(r, 2, 0),
                damage: S.Message.getFloatingPointFieldWithDefault(r, 3, 0),
                hpafterdamage: S.Message.getFloatingPointFieldWithDefault(r, 4, 0),
                iskillingblow: S.Message.getBooleanFieldWithDefault(r, 5, !1),
                missileid: S.Message.getFieldWithDefault(r, 6, 0),
                isprimarymissile: S.Message.getBooleanFieldWithDefault(r, 7, !1)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Event.Damage.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Event.Damage;
        return proto.cade_api.rpc.Event.Damage.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Event.Damage.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setEntityid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setAttackerid(n);
                    break;
                case 3:
                    var n = r.readFloat();
                    t.setDamage(n);
                    break;
                case 4:
                    var n = r.readFloat();
                    t.setHpafterdamage(n);
                    break;
                case 5:
                    var n = r.readBool();
                    t.setIskillingblow(n);
                    break;
                case 6:
                    var n = r.readInt32();
                    t.setMissileid(n);
                    break;
                case 7:
                    var n = r.readBool();
                    t.setIsprimarymissile(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Event.Damage.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Event.Damage.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Event.Damage.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getEntityid(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getAttackerid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getDamage(),
            i !== 0 && r.writeFloat(3, i),
            i = t.getHpafterdamage(),
            i !== 0 && r.writeFloat(4, i),
            i = t.getIskillingblow(),
            i && r.writeBool(5, i),
            i = t.getMissileid(),
            i !== 0 && r.writeInt32(6, i),
            i = t.getIsprimarymissile(),
            i && r.writeBool(7, i)
    }
        ;
    proto.cade_api.rpc.Event.Damage.prototype.getEntityid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Event.Damage.prototype.setEntityid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Event.Damage.prototype.getAttackerid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Event.Damage.prototype.setAttackerid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Event.Damage.prototype.getDamage = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Event.Damage.prototype.setDamage = function (t) {
        return S.Message.setProto3FloatField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Event.Damage.prototype.getHpafterdamage = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Event.Damage.prototype.setHpafterdamage = function (t) {
        return S.Message.setProto3FloatField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Event.Damage.prototype.getIskillingblow = function () {
        return S.Message.getBooleanFieldWithDefault(this, 5, !1)
    }
        ;
    proto.cade_api.rpc.Event.Damage.prototype.setIskillingblow = function (t) {
        return S.Message.setProto3BooleanField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.Event.Damage.prototype.getMissileid = function () {
        return S.Message.getFieldWithDefault(this, 6, 0)
    }
        ;
    proto.cade_api.rpc.Event.Damage.prototype.setMissileid = function (t) {
        return S.Message.setProto3IntField(this, 6, t)
    }
        ;
    proto.cade_api.rpc.Event.Damage.prototype.getIsprimarymissile = function () {
        return S.Message.getBooleanFieldWithDefault(this, 7, !1)
    }
        ;
    proto.cade_api.rpc.Event.Damage.prototype.setIsprimarymissile = function (t) {
        return S.Message.setProto3BooleanField(this, 7, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Event.MonkConversion.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Event.MonkConversion.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Event.MonkConversion.toObject = function (t, r) {
            var i, n = {
                monkid: S.Message.getFieldWithDefault(r, 1, 0),
                monkownerid: S.Message.getFieldWithDefault(r, 2, 0),
                targetid: S.Message.getFieldWithDefault(r, 3, 0),
                targetownerid: S.Message.getFieldWithDefault(r, 4, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Event.MonkConversion.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Event.MonkConversion;
        return proto.cade_api.rpc.Event.MonkConversion.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Event.MonkConversion.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setMonkid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setMonkownerid(n);
                    break;
                case 3:
                    var n = r.readInt32();
                    t.setTargetid(n);
                    break;
                case 4:
                    var n = r.readInt32();
                    t.setTargetownerid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Event.MonkConversion.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Event.MonkConversion.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Event.MonkConversion.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getMonkid(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getMonkownerid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getTargetid(),
            i !== 0 && r.writeInt32(3, i),
            i = t.getTargetownerid(),
            i !== 0 && r.writeInt32(4, i)
    }
        ;
    proto.cade_api.rpc.Event.MonkConversion.prototype.getMonkid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Event.MonkConversion.prototype.setMonkid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Event.MonkConversion.prototype.getMonkownerid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Event.MonkConversion.prototype.setMonkownerid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Event.MonkConversion.prototype.getTargetid = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Event.MonkConversion.prototype.setTargetid = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Event.MonkConversion.prototype.getTargetownerid = function () {
        return S.Message.getFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Event.MonkConversion.prototype.setTargetownerid = function (t) {
        return S.Message.setProto3IntField(this, 4, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Event.NotificationTrainDone.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Event.NotificationTrainDone.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Event.NotificationTrainDone.toObject = function (t, r) {
            var i, n = {
                ownerid: S.Message.getFieldWithDefault(r, 1, 0),
                masterid: S.Message.getFieldWithDefault(r, 2, 0),
                buildingid: S.Message.getFieldWithDefault(r, 3, 0),
                objid: S.Message.getFieldWithDefault(r, 4, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Event.NotificationTrainDone.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Event.NotificationTrainDone;
        return proto.cade_api.rpc.Event.NotificationTrainDone.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Event.NotificationTrainDone.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setOwnerid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setMasterid(n);
                    break;
                case 3:
                    var n = r.readInt32();
                    t.setBuildingid(n);
                    break;
                case 4:
                    var n = r.readInt32();
                    t.setObjid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Event.NotificationTrainDone.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Event.NotificationTrainDone.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Event.NotificationTrainDone.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getOwnerid(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getMasterid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getBuildingid(),
            i !== 0 && r.writeInt32(3, i),
            i = t.getObjid(),
            i !== 0 && r.writeInt32(4, i)
    }
        ;
    proto.cade_api.rpc.Event.NotificationTrainDone.prototype.getOwnerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Event.NotificationTrainDone.prototype.setOwnerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Event.NotificationTrainDone.prototype.getMasterid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Event.NotificationTrainDone.prototype.setMasterid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Event.NotificationTrainDone.prototype.getBuildingid = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Event.NotificationTrainDone.prototype.setBuildingid = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Event.NotificationTrainDone.prototype.getObjid = function () {
        return S.Message.getFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Event.NotificationTrainDone.prototype.setObjid = function (t) {
        return S.Message.setProto3IntField(this, 4, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Event.NotificationResearchDone.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Event.NotificationResearchDone.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Event.NotificationResearchDone.toObject = function (t, r) {
            var i, n = {
                ownerid: S.Message.getFieldWithDefault(r, 1, 0),
                techid: S.Message.getFieldWithDefault(r, 2, 0),
                buildingid: S.Message.getFieldWithDefault(r, 3, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Event.NotificationResearchDone.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Event.NotificationResearchDone;
        return proto.cade_api.rpc.Event.NotificationResearchDone.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Event.NotificationResearchDone.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setOwnerid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setTechid(n);
                    break;
                case 3:
                    var n = r.readInt32();
                    t.setBuildingid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Event.NotificationResearchDone.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Event.NotificationResearchDone.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Event.NotificationResearchDone.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getOwnerid(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getTechid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getBuildingid(),
            i !== 0 && r.writeInt32(3, i)
    }
        ;
    proto.cade_api.rpc.Event.NotificationResearchDone.prototype.getOwnerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Event.NotificationResearchDone.prototype.setOwnerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Event.NotificationResearchDone.prototype.getTechid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Event.NotificationResearchDone.prototype.setTechid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Event.NotificationResearchDone.prototype.getBuildingid = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Event.NotificationResearchDone.prototype.setBuildingid = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied.toObject = function (t, r) {
            var i, n = {
                ownerid: S.Message.getFieldWithDefault(r, 1, 0),
                objid: S.Message.getFieldWithDefault(r, 2, 0),
                farm: S.Message.getBooleanFieldWithDefault(r, 3, !1)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied;
        return proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setOwnerid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setObjid(n);
                    break;
                case 3:
                    var n = r.readBool();
                    t.setFarm(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getOwnerid(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getObjid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getFarm(),
            i && r.writeBool(3, i)
    }
        ;
    proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied.prototype.getOwnerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied.prototype.setOwnerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied.prototype.getObjid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied.prototype.setObjid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied.prototype.getFarm = function () {
        return S.Message.getBooleanFieldWithDefault(this, 3, !1)
    }
        ;
    proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied.prototype.setFarm = function (t) {
        return S.Message.setProto3BooleanField(this, 3, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Event.NotificationWonder.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Event.NotificationWonder.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Event.NotificationWonder.toObject = function (t, r) {
            var i, n = {
                ownerid: S.Message.getFieldWithDefault(r, 1, 0),
                remainingtime: S.Message.getFieldWithDefault(r, 2, 0),
                objid: S.Message.getFieldWithDefault(r, 3, 0),
                type: S.Message.getFieldWithDefault(r, 4, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Event.NotificationWonder.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Event.NotificationWonder;
        return proto.cade_api.rpc.Event.NotificationWonder.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Event.NotificationWonder.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setOwnerid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setRemainingtime(n);
                    break;
                case 3:
                    var n = r.readInt32();
                    t.setObjid(n);
                    break;
                case 4:
                    var n = r.readEnum();
                    t.setType(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Event.NotificationWonder.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Event.NotificationWonder.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Event.NotificationWonder.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getOwnerid(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getRemainingtime(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getObjid(),
            i !== 0 && r.writeInt32(3, i),
            i = t.getType(),
            i !== 0 && r.writeEnum(4, i)
    }
        ;
    proto.cade_api.rpc.Event.NotificationWonder.Type = {
        WONDER_STARTED: 0,
        WONDER_COMPLETED: 1,
        WONDER_DESTROYED: 2,
        ARTIFACTS_HELD: 3,
        ARTIFACTS_LOST: 4,
        RUINS_HELD: 5,
        RUINS_LOST: 6
    };
    proto.cade_api.rpc.Event.NotificationWonder.prototype.getOwnerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Event.NotificationWonder.prototype.setOwnerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Event.NotificationWonder.prototype.getRemainingtime = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Event.NotificationWonder.prototype.setRemainingtime = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Event.NotificationWonder.prototype.getObjid = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Event.NotificationWonder.prototype.setObjid = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Event.NotificationWonder.prototype.getType = function () {
        return S.Message.getFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Event.NotificationWonder.prototype.setType = function (t) {
        return S.Message.setProto3EnumField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Event.prototype.getEntitykilled = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Event.EntityKilled, 1)
    }
        ;
    proto.cade_api.rpc.Event.prototype.setEntitykilled = function (t) {
        return S.Message.setOneofWrapperField(this, 1, proto.cade_api.rpc.Event.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Event.prototype.clearEntitykilled = function () {
        return this.setEntitykilled(void 0)
    }
        ;
    proto.cade_api.rpc.Event.prototype.hasEntitykilled = function () {
        return S.Message.getField(this, 1) != null
    }
        ;
    proto.cade_api.rpc.Event.prototype.getMarkettransaction = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Event.MarketTransaction, 2)
    }
        ;
    proto.cade_api.rpc.Event.prototype.setMarkettransaction = function (t) {
        return S.Message.setOneofWrapperField(this, 2, proto.cade_api.rpc.Event.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Event.prototype.clearMarkettransaction = function () {
        return this.setMarkettransaction(void 0)
    }
        ;
    proto.cade_api.rpc.Event.prototype.hasMarkettransaction = function () {
        return S.Message.getField(this, 2) != null
    }
        ;
    proto.cade_api.rpc.Event.prototype.getTribute = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Event.Tribute, 3)
    }
        ;
    proto.cade_api.rpc.Event.prototype.setTribute = function (t) {
        return S.Message.setOneofWrapperField(this, 3, proto.cade_api.rpc.Event.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Event.prototype.clearTribute = function () {
        return this.setTribute(void 0)
    }
        ;
    proto.cade_api.rpc.Event.prototype.hasTribute = function () {
        return S.Message.getField(this, 3) != null
    }
        ;
    proto.cade_api.rpc.Event.prototype.getPlayerchat = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Event.PlayerChat, 4)
    }
        ;
    proto.cade_api.rpc.Event.prototype.setPlayerchat = function (t) {
        return S.Message.setOneofWrapperField(this, 4, proto.cade_api.rpc.Event.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Event.prototype.clearPlayerchat = function () {
        return this.setPlayerchat(void 0)
    }
        ;
    proto.cade_api.rpc.Event.prototype.hasPlayerchat = function () {
        return S.Message.getField(this, 4) != null
    }
        ;
    proto.cade_api.rpc.Event.prototype.getCombatnotificationsound = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Event.CombatNotificationSound, 5)
    }
        ;
    proto.cade_api.rpc.Event.prototype.setCombatnotificationsound = function (t) {
        return S.Message.setOneofWrapperField(this, 5, proto.cade_api.rpc.Event.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Event.prototype.clearCombatnotificationsound = function () {
        return this.setCombatnotificationsound(void 0)
    }
        ;
    proto.cade_api.rpc.Event.prototype.hasCombatnotificationsound = function () {
        return S.Message.getField(this, 5) != null
    }
        ;
    proto.cade_api.rpc.Event.prototype.getDamage = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Event.Damage, 6)
    }
        ;
    proto.cade_api.rpc.Event.prototype.setDamage = function (t) {
        return S.Message.setOneofWrapperField(this, 6, proto.cade_api.rpc.Event.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Event.prototype.clearDamage = function () {
        return this.setDamage(void 0)
    }
        ;
    proto.cade_api.rpc.Event.prototype.hasDamage = function () {
        return S.Message.getField(this, 6) != null
    }
        ;
    proto.cade_api.rpc.Event.prototype.getMonkconversion = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Event.MonkConversion, 7)
    }
        ;
    proto.cade_api.rpc.Event.prototype.setMonkconversion = function (t) {
        return S.Message.setOneofWrapperField(this, 7, proto.cade_api.rpc.Event.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Event.prototype.clearMonkconversion = function () {
        return this.setMonkconversion(void 0)
    }
        ;
    proto.cade_api.rpc.Event.prototype.hasMonkconversion = function () {
        return S.Message.getField(this, 7) != null
    }
        ;
    proto.cade_api.rpc.Event.prototype.getNotificationtraindone = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Event.NotificationTrainDone, 8)
    }
        ;
    proto.cade_api.rpc.Event.prototype.setNotificationtraindone = function (t) {
        return S.Message.setOneofWrapperField(this, 8, proto.cade_api.rpc.Event.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Event.prototype.clearNotificationtraindone = function () {
        return this.setNotificationtraindone(void 0)
    }
        ;
    proto.cade_api.rpc.Event.prototype.hasNotificationtraindone = function () {
        return S.Message.getField(this, 8) != null
    }
        ;
    proto.cade_api.rpc.Event.prototype.getNotificationresearchdone = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Event.NotificationResearchDone, 9)
    }
        ;
    proto.cade_api.rpc.Event.prototype.setNotificationresearchdone = function (t) {
        return S.Message.setOneofWrapperField(this, 9, proto.cade_api.rpc.Event.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Event.prototype.clearNotificationresearchdone = function () {
        return this.setNotificationresearchdone(void 0)
    }
        ;
    proto.cade_api.rpc.Event.prototype.hasNotificationresearchdone = function () {
        return S.Message.getField(this, 9) != null
    }
        ;
    proto.cade_api.rpc.Event.prototype.getNotificationfarmorfishtrapdied = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Event.NotificationFarmOrFishTrapDied, 10)
    }
        ;
    proto.cade_api.rpc.Event.prototype.setNotificationfarmorfishtrapdied = function (t) {
        return S.Message.setOneofWrapperField(this, 10, proto.cade_api.rpc.Event.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Event.prototype.clearNotificationfarmorfishtrapdied = function () {
        return this.setNotificationfarmorfishtrapdied(void 0)
    }
        ;
    proto.cade_api.rpc.Event.prototype.hasNotificationfarmorfishtrapdied = function () {
        return S.Message.getField(this, 10) != null
    }
        ;
    proto.cade_api.rpc.Event.prototype.getNotificationwonder = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Event.NotificationWonder, 11)
    }
        ;
    proto.cade_api.rpc.Event.prototype.setNotificationwonder = function (t) {
        return S.Message.setOneofWrapperField(this, 11, proto.cade_api.rpc.Event.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Event.prototype.clearNotificationwonder = function () {
        return this.setNotificationwonder(void 0)
    }
        ;
    proto.cade_api.rpc.Event.prototype.hasNotificationwonder = function () {
        return S.Message.getField(this, 11) != null
    }
        ;
    proto.cade_api.rpc.Command.oneofGroups_ = [[1e3, 1001, 1002, 1003, 1004, 1005, 1010, 1011, 112, 1013, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1025, 1026, 1027, 1031, 1032, 1033, 1034, 1035, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1196, 2e3]];
    proto.cade_api.rpc.Command.CommandCase = {
        COMMAND_NOT_SET: 0,
        INTERACT: 1e3,
        STOP: 1001,
        WORK: 1002,
        MOVE: 1003,
        CREATE: 1004,
        ADDATTRIBUTE: 1005,
        AIORDER: 1010,
        RESIGN: 1011,
        ADDWAYPOINT: 112,
        PAUSE: 1013,
        GROUPWAYPOINT: 1016,
        GROUPAIORDER: 1017,
        UNITAISTATE: 1018,
        GUARD: 1019,
        FOLLOW: 1020,
        PATROL: 1021,
        SCOUT: 1022,
        FORMFORMATION: 1023,
        WHEELFORMATION: 1025,
        ABOUTFACEFORMATION: 1026,
        MULTIPLAYERSAVE: 1027,
        GROUPMULTIWAYPOINTS: 1031,
        CHAPTER: 1032,
        ATTACKMOVE: 1033,
        ATTACKMOVETARGET: 1034,
        RETREAT: 1035,
        UNITTYPEAISTATE: 1037,
        AUTOSCOUT: 1038,
        STOPALL: 1039,
        MORETECHS: 1040,
        TRANSFORMOBJECT: 1041,
        TRIGGER: 1042,
        TRANSFORMOBJECTS: 1043,
        MAKE: 1100,
        RESEARCH: 1101,
        BUILD: 1102,
        GAME: 1103,
        EXPLORE: 1104,
        BUILDWALL: 1105,
        CANCELBUILD: 1106,
        ATTACKGROUND: 1107,
        GIVEATTRIBUTE2: 1108,
        TRADEATTRIBUTE: 1109,
        REPAIR: 1110,
        UNLOAD: 1111,
        GATE: 1114,
        FLARE: 1115,
        SPECIAL: 1116,
        UNITORDER: 1117,
        DIPLOMACY: 1118,
        QUEUE: 1119,
        SETGATHERPOINT: 1120,
        SETRETREATPOINT: 1121,
        SELLCOMMODITY: 1122,
        BUYCOMMODITY: 1123,
        UNITTRANSFORM: 1125,
        DROPRELIC: 1126,
        TOWNBELL: 1127,
        GOBACKTOWORK: 1128,
        MULTIQUEUE: 1129,
        SETGATHERSTATE: 1130,
        DELETEOBJECTS: 1131,
        RESETBUILDINGS: 1132,
        MULTIGATE: 1133,
        GOBACKTOWORK2: 1134,
        CHANGEPLAYERNAME: 1135,
        SENDAISIGNAL: 1136,
        AIEFFECTAMOUNT: 1137,
        AIEFFECTPERCENT: 1138,
        GIVEATTRIBUTES: 1196,
        UNKNOWNCOMMAND: 2e3
    };
    proto.cade_api.rpc.Command.prototype.getCommandCase = function () {
        return S.Message.computeOneofCase(this, proto.cade_api.rpc.Command.oneofGroups_[0])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.toObject = function (t, r) {
            var i, n = {
                commplayerid: S.Message.getFieldWithDefault(r, 1, 0),
                interact: (i = r.getInteract()) && proto.cade_api.rpc.Command.Interact.toObject(t, i),
                stop: (i = r.getStop()) && proto.cade_api.rpc.Command.Stop.toObject(t, i),
                work: (i = r.getWork()) && proto.cade_api.rpc.Command.Work.toObject(t, i),
                move: (i = r.getMove()) && proto.cade_api.rpc.Command.Move.toObject(t, i),
                create: (i = r.getCreate()) && proto.cade_api.rpc.Command.Create.toObject(t, i),
                addattribute: (i = r.getAddattribute()) && proto.cade_api.rpc.Command.AddAttribute.toObject(t, i),
                aiorder: (i = r.getAiorder()) && proto.cade_api.rpc.Command.AiOrder.toObject(t, i),
                resign: (i = r.getResign()) && proto.cade_api.rpc.Command.Resign.toObject(t, i),
                addwaypoint: (i = r.getAddwaypoint()) && proto.cade_api.rpc.Command.AddWaypoint.toObject(t, i),
                pause: (i = r.getPause()) && proto.cade_api.rpc.Command.Pause.toObject(t, i),
                groupwaypoint: (i = r.getGroupwaypoint()) && proto.cade_api.rpc.Command.GroupWaypoint.toObject(t, i),
                groupaiorder: (i = r.getGroupaiorder()) && proto.cade_api.rpc.Command.GroupAiOrder.toObject(t, i),
                unitaistate: (i = r.getUnitaistate()) && proto.cade_api.rpc.Command.UnitAiState.toObject(t, i),
                guard: (i = r.getGuard()) && proto.cade_api.rpc.Command.Guard.toObject(t, i),
                follow: (i = r.getFollow()) && proto.cade_api.rpc.Command.Follow.toObject(t, i),
                patrol: (i = r.getPatrol()) && proto.cade_api.rpc.Command.Patrol.toObject(t, i),
                scout: (i = r.getScout()) && proto.cade_api.rpc.Command.Scout.toObject(t, i),
                formformation: (i = r.getFormformation()) && proto.cade_api.rpc.Command.FormFormation.toObject(t, i),
                wheelformation: (i = r.getWheelformation()) && proto.cade_api.rpc.Command.WheelFormation.toObject(t, i),
                aboutfaceformation: (i = r.getAboutfaceformation()) && proto.cade_api.rpc.Command.AboutFaceFormation.toObject(t, i),
                multiplayersave: (i = r.getMultiplayersave()) && proto.cade_api.rpc.Command.MultiplayerSave.toObject(t, i),
                groupmultiwaypoints: (i = r.getGroupmultiwaypoints()) && proto.cade_api.rpc.Command.GroupMultiWaypoints.toObject(t, i),
                chapter: (i = r.getChapter()) && proto.cade_api.rpc.Command.Chapter.toObject(t, i),
                attackmove: (i = r.getAttackmove()) && proto.cade_api.rpc.Command.AttackMove.toObject(t, i),
                attackmovetarget: (i = r.getAttackmovetarget()) && proto.cade_api.rpc.Command.AttackMoveTarget.toObject(t, i),
                retreat: (i = r.getRetreat()) && proto.cade_api.rpc.Command.Retreat.toObject(t, i),
                unittypeaistate: (i = r.getUnittypeaistate()) && proto.cade_api.rpc.Command.UnitTypeAiState.toObject(t, i),
                autoscout: (i = r.getAutoscout()) && proto.cade_api.rpc.Command.AutoScout.toObject(t, i),
                stopall: (i = r.getStopall()) && proto.cade_api.rpc.Command.StopAll.toObject(t, i),
                moretechs: (i = r.getMoretechs()) && proto.cade_api.rpc.Command.MoreTechs.toObject(t, i),
                transformobject: (i = r.getTransformobject()) && proto.cade_api.rpc.Command.TransformObject.toObject(t, i),
                trigger: (i = r.getTrigger()) && proto.cade_api.rpc.Command.Trigger.toObject(t, i),
                transformobjects: (i = r.getTransformobjects()) && proto.cade_api.rpc.Command.TransformObjects.toObject(t, i),
                make: (i = r.getMake()) && proto.cade_api.rpc.Command.Make.toObject(t, i),
                research: (i = r.getResearch()) && proto.cade_api.rpc.Command.Research.toObject(t, i),
                build: (i = r.getBuild()) && proto.cade_api.rpc.Command.Build.toObject(t, i),
                game: (i = r.getGame()) && proto.cade_api.rpc.Command.Game.toObject(t, i),
                explore: (i = r.getExplore()) && proto.cade_api.rpc.Command.Explore.toObject(t, i),
                buildwall: (i = r.getBuildwall()) && proto.cade_api.rpc.Command.BuildWall.toObject(t, i),
                cancelbuild: (i = r.getCancelbuild()) && proto.cade_api.rpc.Command.CancelBuild.toObject(t, i),
                attackground: (i = r.getAttackground()) && proto.cade_api.rpc.Command.AttackGround.toObject(t, i),
                giveattribute2: (i = r.getGiveattribute2()) && proto.cade_api.rpc.Command.GiveAttribute2.toObject(t, i),
                tradeattribute: (i = r.getTradeattribute()) && proto.cade_api.rpc.Command.TradeAttribute.toObject(t, i),
                repair: (i = r.getRepair()) && proto.cade_api.rpc.Command.Repair.toObject(t, i),
                unload: (i = r.getUnload()) && proto.cade_api.rpc.Command.Unload.toObject(t, i),
                gate: (i = r.getGate()) && proto.cade_api.rpc.Command.Gate.toObject(t, i),
                flare: (i = r.getFlare()) && proto.cade_api.rpc.Command.Flare.toObject(t, i),
                special: (i = r.getSpecial()) && proto.cade_api.rpc.Command.Special.toObject(t, i),
                unitorder: (i = r.getUnitorder()) && proto.cade_api.rpc.Command.UnitOrder.toObject(t, i),
                diplomacy: (i = r.getDiplomacy()) && proto.cade_api.rpc.Command.Diplomacy.toObject(t, i),
                queue: (i = r.getQueue()) && proto.cade_api.rpc.Command.Queue.toObject(t, i),
                setgatherpoint: (i = r.getSetgatherpoint()) && proto.cade_api.rpc.Command.SetGatherPoint.toObject(t, i),
                setretreatpoint: (i = r.getSetretreatpoint()) && proto.cade_api.rpc.Command.SetRetreatPoint.toObject(t, i),
                sellcommodity: (i = r.getSellcommodity()) && proto.cade_api.rpc.Command.SellCommodity.toObject(t, i),
                buycommodity: (i = r.getBuycommodity()) && proto.cade_api.rpc.Command.BuyCommodity.toObject(t, i),
                unittransform: (i = r.getUnittransform()) && proto.cade_api.rpc.Command.UnitTransform.toObject(t, i),
                droprelic: (i = r.getDroprelic()) && proto.cade_api.rpc.Command.DropRelic.toObject(t, i),
                townbell: (i = r.getTownbell()) && proto.cade_api.rpc.Command.TownBell.toObject(t, i),
                gobacktowork: (i = r.getGobacktowork()) && proto.cade_api.rpc.Command.GoBackToWork.toObject(t, i),
                multiqueue: (i = r.getMultiqueue()) && proto.cade_api.rpc.Command.MultiQueue.toObject(t, i),
                setgatherstate: (i = r.getSetgatherstate()) && proto.cade_api.rpc.Command.SetGatherState.toObject(t, i),
                deleteobjects: (i = r.getDeleteobjects()) && proto.cade_api.rpc.Command.DeleteObjects.toObject(t, i),
                resetbuildings: (i = r.getResetbuildings()) && proto.cade_api.rpc.Command.ResetBuildings.toObject(t, i),
                multigate: (i = r.getMultigate()) && proto.cade_api.rpc.Command.MultiGate.toObject(t, i),
                gobacktowork2: (i = r.getGobacktowork2()) && proto.cade_api.rpc.Command.GoBackToWork2.toObject(t, i),
                changeplayername: (i = r.getChangeplayername()) && proto.cade_api.rpc.Command.ChangePlayerName.toObject(t, i),
                sendaisignal: (i = r.getSendaisignal()) && proto.cade_api.rpc.Command.SendAiSignal.toObject(t, i),
                aieffectamount: (i = r.getAieffectamount()) && proto.cade_api.rpc.Command.AiEffectAmount.toObject(t, i),
                aieffectpercent: (i = r.getAieffectpercent()) && proto.cade_api.rpc.Command.AiEffectPercent.toObject(t, i),
                giveattributes: (i = r.getGiveattributes()) && proto.cade_api.rpc.Command.GiveAttributes.toObject(t, i),
                unknowncommand: (i = r.getUnknowncommand()) && proto.cade_api.rpc.Command.UnknownCommand.toObject(t, i)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command;
        return proto.cade_api.rpc.Command.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setCommplayerid(n);
                    break;
                case 1e3:
                    var n = new proto.cade_api.rpc.Command.Interact;
                    r.readMessage(n, proto.cade_api.rpc.Command.Interact.deserializeBinaryFromReader),
                        t.setInteract(n);
                    break;
                case 1001:
                    var n = new proto.cade_api.rpc.Command.Stop;
                    r.readMessage(n, proto.cade_api.rpc.Command.Stop.deserializeBinaryFromReader),
                        t.setStop(n);
                    break;
                case 1002:
                    var n = new proto.cade_api.rpc.Command.Work;
                    r.readMessage(n, proto.cade_api.rpc.Command.Work.deserializeBinaryFromReader),
                        t.setWork(n);
                    break;
                case 1003:
                    var n = new proto.cade_api.rpc.Command.Move;
                    r.readMessage(n, proto.cade_api.rpc.Command.Move.deserializeBinaryFromReader),
                        t.setMove(n);
                    break;
                case 1004:
                    var n = new proto.cade_api.rpc.Command.Create;
                    r.readMessage(n, proto.cade_api.rpc.Command.Create.deserializeBinaryFromReader),
                        t.setCreate(n);
                    break;
                case 1005:
                    var n = new proto.cade_api.rpc.Command.AddAttribute;
                    r.readMessage(n, proto.cade_api.rpc.Command.AddAttribute.deserializeBinaryFromReader),
                        t.setAddattribute(n);
                    break;
                case 1010:
                    var n = new proto.cade_api.rpc.Command.AiOrder;
                    r.readMessage(n, proto.cade_api.rpc.Command.AiOrder.deserializeBinaryFromReader),
                        t.setAiorder(n);
                    break;
                case 1011:
                    var n = new proto.cade_api.rpc.Command.Resign;
                    r.readMessage(n, proto.cade_api.rpc.Command.Resign.deserializeBinaryFromReader),
                        t.setResign(n);
                    break;
                case 112:
                    var n = new proto.cade_api.rpc.Command.AddWaypoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.AddWaypoint.deserializeBinaryFromReader),
                        t.setAddwaypoint(n);
                    break;
                case 1013:
                    var n = new proto.cade_api.rpc.Command.Pause;
                    r.readMessage(n, proto.cade_api.rpc.Command.Pause.deserializeBinaryFromReader),
                        t.setPause(n);
                    break;
                case 1016:
                    var n = new proto.cade_api.rpc.Command.GroupWaypoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.GroupWaypoint.deserializeBinaryFromReader),
                        t.setGroupwaypoint(n);
                    break;
                case 1017:
                    var n = new proto.cade_api.rpc.Command.GroupAiOrder;
                    r.readMessage(n, proto.cade_api.rpc.Command.GroupAiOrder.deserializeBinaryFromReader),
                        t.setGroupaiorder(n);
                    break;
                case 1018:
                    var n = new proto.cade_api.rpc.Command.UnitAiState;
                    r.readMessage(n, proto.cade_api.rpc.Command.UnitAiState.deserializeBinaryFromReader),
                        t.setUnitaistate(n);
                    break;
                case 1019:
                    var n = new proto.cade_api.rpc.Command.Guard;
                    r.readMessage(n, proto.cade_api.rpc.Command.Guard.deserializeBinaryFromReader),
                        t.setGuard(n);
                    break;
                case 1020:
                    var n = new proto.cade_api.rpc.Command.Follow;
                    r.readMessage(n, proto.cade_api.rpc.Command.Follow.deserializeBinaryFromReader),
                        t.setFollow(n);
                    break;
                case 1021:
                    var n = new proto.cade_api.rpc.Command.Patrol;
                    r.readMessage(n, proto.cade_api.rpc.Command.Patrol.deserializeBinaryFromReader),
                        t.setPatrol(n);
                    break;
                case 1022:
                    var n = new proto.cade_api.rpc.Command.Scout;
                    r.readMessage(n, proto.cade_api.rpc.Command.Scout.deserializeBinaryFromReader),
                        t.setScout(n);
                    break;
                case 1023:
                    var n = new proto.cade_api.rpc.Command.FormFormation;
                    r.readMessage(n, proto.cade_api.rpc.Command.FormFormation.deserializeBinaryFromReader),
                        t.setFormformation(n);
                    break;
                case 1025:
                    var n = new proto.cade_api.rpc.Command.WheelFormation;
                    r.readMessage(n, proto.cade_api.rpc.Command.WheelFormation.deserializeBinaryFromReader),
                        t.setWheelformation(n);
                    break;
                case 1026:
                    var n = new proto.cade_api.rpc.Command.AboutFaceFormation;
                    r.readMessage(n, proto.cade_api.rpc.Command.AboutFaceFormation.deserializeBinaryFromReader),
                        t.setAboutfaceformation(n);
                    break;
                case 1027:
                    var n = new proto.cade_api.rpc.Command.MultiplayerSave;
                    r.readMessage(n, proto.cade_api.rpc.Command.MultiplayerSave.deserializeBinaryFromReader),
                        t.setMultiplayersave(n);
                    break;
                case 1031:
                    var n = new proto.cade_api.rpc.Command.GroupMultiWaypoints;
                    r.readMessage(n, proto.cade_api.rpc.Command.GroupMultiWaypoints.deserializeBinaryFromReader),
                        t.setGroupmultiwaypoints(n);
                    break;
                case 1032:
                    var n = new proto.cade_api.rpc.Command.Chapter;
                    r.readMessage(n, proto.cade_api.rpc.Command.Chapter.deserializeBinaryFromReader),
                        t.setChapter(n);
                    break;
                case 1033:
                    var n = new proto.cade_api.rpc.Command.AttackMove;
                    r.readMessage(n, proto.cade_api.rpc.Command.AttackMove.deserializeBinaryFromReader),
                        t.setAttackmove(n);
                    break;
                case 1034:
                    var n = new proto.cade_api.rpc.Command.AttackMoveTarget;
                    r.readMessage(n, proto.cade_api.rpc.Command.AttackMoveTarget.deserializeBinaryFromReader),
                        t.setAttackmovetarget(n);
                    break;
                case 1035:
                    var n = new proto.cade_api.rpc.Command.Retreat;
                    r.readMessage(n, proto.cade_api.rpc.Command.Retreat.deserializeBinaryFromReader),
                        t.setRetreat(n);
                    break;
                case 1037:
                    var n = new proto.cade_api.rpc.Command.UnitTypeAiState;
                    r.readMessage(n, proto.cade_api.rpc.Command.UnitTypeAiState.deserializeBinaryFromReader),
                        t.setUnittypeaistate(n);
                    break;
                case 1038:
                    var n = new proto.cade_api.rpc.Command.AutoScout;
                    r.readMessage(n, proto.cade_api.rpc.Command.AutoScout.deserializeBinaryFromReader),
                        t.setAutoscout(n);
                    break;
                case 1039:
                    var n = new proto.cade_api.rpc.Command.StopAll;
                    r.readMessage(n, proto.cade_api.rpc.Command.StopAll.deserializeBinaryFromReader),
                        t.setStopall(n);
                    break;
                case 1040:
                    var n = new proto.cade_api.rpc.Command.MoreTechs;
                    r.readMessage(n, proto.cade_api.rpc.Command.MoreTechs.deserializeBinaryFromReader),
                        t.setMoretechs(n);
                    break;
                case 1041:
                    var n = new proto.cade_api.rpc.Command.TransformObject;
                    r.readMessage(n, proto.cade_api.rpc.Command.TransformObject.deserializeBinaryFromReader),
                        t.setTransformobject(n);
                    break;
                case 1042:
                    var n = new proto.cade_api.rpc.Command.Trigger;
                    r.readMessage(n, proto.cade_api.rpc.Command.Trigger.deserializeBinaryFromReader),
                        t.setTrigger(n);
                    break;
                case 1043:
                    var n = new proto.cade_api.rpc.Command.TransformObjects;
                    r.readMessage(n, proto.cade_api.rpc.Command.TransformObjects.deserializeBinaryFromReader),
                        t.setTransformobjects(n);
                    break;
                case 1100:
                    var n = new proto.cade_api.rpc.Command.Make;
                    r.readMessage(n, proto.cade_api.rpc.Command.Make.deserializeBinaryFromReader),
                        t.setMake(n);
                    break;
                case 1101:
                    var n = new proto.cade_api.rpc.Command.Research;
                    r.readMessage(n, proto.cade_api.rpc.Command.Research.deserializeBinaryFromReader),
                        t.setResearch(n);
                    break;
                case 1102:
                    var n = new proto.cade_api.rpc.Command.Build;
                    r.readMessage(n, proto.cade_api.rpc.Command.Build.deserializeBinaryFromReader),
                        t.setBuild(n);
                    break;
                case 1103:
                    var n = new proto.cade_api.rpc.Command.Game;
                    r.readMessage(n, proto.cade_api.rpc.Command.Game.deserializeBinaryFromReader),
                        t.setGame(n);
                    break;
                case 1104:
                    var n = new proto.cade_api.rpc.Command.Explore;
                    r.readMessage(n, proto.cade_api.rpc.Command.Explore.deserializeBinaryFromReader),
                        t.setExplore(n);
                    break;
                case 1105:
                    var n = new proto.cade_api.rpc.Command.BuildWall;
                    r.readMessage(n, proto.cade_api.rpc.Command.BuildWall.deserializeBinaryFromReader),
                        t.setBuildwall(n);
                    break;
                case 1106:
                    var n = new proto.cade_api.rpc.Command.CancelBuild;
                    r.readMessage(n, proto.cade_api.rpc.Command.CancelBuild.deserializeBinaryFromReader),
                        t.setCancelbuild(n);
                    break;
                case 1107:
                    var n = new proto.cade_api.rpc.Command.AttackGround;
                    r.readMessage(n, proto.cade_api.rpc.Command.AttackGround.deserializeBinaryFromReader),
                        t.setAttackground(n);
                    break;
                case 1108:
                    var n = new proto.cade_api.rpc.Command.GiveAttribute2;
                    r.readMessage(n, proto.cade_api.rpc.Command.GiveAttribute2.deserializeBinaryFromReader),
                        t.setGiveattribute2(n);
                    break;
                case 1109:
                    var n = new proto.cade_api.rpc.Command.TradeAttribute;
                    r.readMessage(n, proto.cade_api.rpc.Command.TradeAttribute.deserializeBinaryFromReader),
                        t.setTradeattribute(n);
                    break;
                case 1110:
                    var n = new proto.cade_api.rpc.Command.Repair;
                    r.readMessage(n, proto.cade_api.rpc.Command.Repair.deserializeBinaryFromReader),
                        t.setRepair(n);
                    break;
                case 1111:
                    var n = new proto.cade_api.rpc.Command.Unload;
                    r.readMessage(n, proto.cade_api.rpc.Command.Unload.deserializeBinaryFromReader),
                        t.setUnload(n);
                    break;
                case 1114:
                    var n = new proto.cade_api.rpc.Command.Gate;
                    r.readMessage(n, proto.cade_api.rpc.Command.Gate.deserializeBinaryFromReader),
                        t.setGate(n);
                    break;
                case 1115:
                    var n = new proto.cade_api.rpc.Command.Flare;
                    r.readMessage(n, proto.cade_api.rpc.Command.Flare.deserializeBinaryFromReader),
                        t.setFlare(n);
                    break;
                case 1116:
                    var n = new proto.cade_api.rpc.Command.Special;
                    r.readMessage(n, proto.cade_api.rpc.Command.Special.deserializeBinaryFromReader),
                        t.setSpecial(n);
                    break;
                case 1117:
                    var n = new proto.cade_api.rpc.Command.UnitOrder;
                    r.readMessage(n, proto.cade_api.rpc.Command.UnitOrder.deserializeBinaryFromReader),
                        t.setUnitorder(n);
                    break;
                case 1118:
                    var n = new proto.cade_api.rpc.Command.Diplomacy;
                    r.readMessage(n, proto.cade_api.rpc.Command.Diplomacy.deserializeBinaryFromReader),
                        t.setDiplomacy(n);
                    break;
                case 1119:
                    var n = new proto.cade_api.rpc.Command.Queue;
                    r.readMessage(n, proto.cade_api.rpc.Command.Queue.deserializeBinaryFromReader),
                        t.setQueue(n);
                    break;
                case 1120:
                    var n = new proto.cade_api.rpc.Command.SetGatherPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.SetGatherPoint.deserializeBinaryFromReader),
                        t.setSetgatherpoint(n);
                    break;
                case 1121:
                    var n = new proto.cade_api.rpc.Command.SetRetreatPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.SetRetreatPoint.deserializeBinaryFromReader),
                        t.setSetretreatpoint(n);
                    break;
                case 1122:
                    var n = new proto.cade_api.rpc.Command.SellCommodity;
                    r.readMessage(n, proto.cade_api.rpc.Command.SellCommodity.deserializeBinaryFromReader),
                        t.setSellcommodity(n);
                    break;
                case 1123:
                    var n = new proto.cade_api.rpc.Command.BuyCommodity;
                    r.readMessage(n, proto.cade_api.rpc.Command.BuyCommodity.deserializeBinaryFromReader),
                        t.setBuycommodity(n);
                    break;
                case 1125:
                    var n = new proto.cade_api.rpc.Command.UnitTransform;
                    r.readMessage(n, proto.cade_api.rpc.Command.UnitTransform.deserializeBinaryFromReader),
                        t.setUnittransform(n);
                    break;
                case 1126:
                    var n = new proto.cade_api.rpc.Command.DropRelic;
                    r.readMessage(n, proto.cade_api.rpc.Command.DropRelic.deserializeBinaryFromReader),
                        t.setDroprelic(n);
                    break;
                case 1127:
                    var n = new proto.cade_api.rpc.Command.TownBell;
                    r.readMessage(n, proto.cade_api.rpc.Command.TownBell.deserializeBinaryFromReader),
                        t.setTownbell(n);
                    break;
                case 1128:
                    var n = new proto.cade_api.rpc.Command.GoBackToWork;
                    r.readMessage(n, proto.cade_api.rpc.Command.GoBackToWork.deserializeBinaryFromReader),
                        t.setGobacktowork(n);
                    break;
                case 1129:
                    var n = new proto.cade_api.rpc.Command.MultiQueue;
                    r.readMessage(n, proto.cade_api.rpc.Command.MultiQueue.deserializeBinaryFromReader),
                        t.setMultiqueue(n);
                    break;
                case 1130:
                    var n = new proto.cade_api.rpc.Command.SetGatherState;
                    r.readMessage(n, proto.cade_api.rpc.Command.SetGatherState.deserializeBinaryFromReader),
                        t.setSetgatherstate(n);
                    break;
                case 1131:
                    var n = new proto.cade_api.rpc.Command.DeleteObjects;
                    r.readMessage(n, proto.cade_api.rpc.Command.DeleteObjects.deserializeBinaryFromReader),
                        t.setDeleteobjects(n);
                    break;
                case 1132:
                    var n = new proto.cade_api.rpc.Command.ResetBuildings;
                    r.readMessage(n, proto.cade_api.rpc.Command.ResetBuildings.deserializeBinaryFromReader),
                        t.setResetbuildings(n);
                    break;
                case 1133:
                    var n = new proto.cade_api.rpc.Command.MultiGate;
                    r.readMessage(n, proto.cade_api.rpc.Command.MultiGate.deserializeBinaryFromReader),
                        t.setMultigate(n);
                    break;
                case 1134:
                    var n = new proto.cade_api.rpc.Command.GoBackToWork2;
                    r.readMessage(n, proto.cade_api.rpc.Command.GoBackToWork2.deserializeBinaryFromReader),
                        t.setGobacktowork2(n);
                    break;
                case 1135:
                    var n = new proto.cade_api.rpc.Command.ChangePlayerName;
                    r.readMessage(n, proto.cade_api.rpc.Command.ChangePlayerName.deserializeBinaryFromReader),
                        t.setChangeplayername(n);
                    break;
                case 1136:
                    var n = new proto.cade_api.rpc.Command.SendAiSignal;
                    r.readMessage(n, proto.cade_api.rpc.Command.SendAiSignal.deserializeBinaryFromReader),
                        t.setSendaisignal(n);
                    break;
                case 1137:
                    var n = new proto.cade_api.rpc.Command.AiEffectAmount;
                    r.readMessage(n, proto.cade_api.rpc.Command.AiEffectAmount.deserializeBinaryFromReader),
                        t.setAieffectamount(n);
                    break;
                case 1138:
                    var n = new proto.cade_api.rpc.Command.AiEffectPercent;
                    r.readMessage(n, proto.cade_api.rpc.Command.AiEffectPercent.deserializeBinaryFromReader),
                        t.setAieffectpercent(n);
                    break;
                case 1196:
                    var n = new proto.cade_api.rpc.Command.GiveAttributes;
                    r.readMessage(n, proto.cade_api.rpc.Command.GiveAttributes.deserializeBinaryFromReader),
                        t.setGiveattributes(n);
                    break;
                case 2e3:
                    var n = new proto.cade_api.rpc.Command.UnknownCommand;
                    r.readMessage(n, proto.cade_api.rpc.Command.UnknownCommand.deserializeBinaryFromReader),
                        t.setUnknowncommand(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getCommplayerid(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getInteract(),
            i != null && r.writeMessage(1e3, i, proto.cade_api.rpc.Command.Interact.serializeBinaryToWriter),
            i = t.getStop(),
            i != null && r.writeMessage(1001, i, proto.cade_api.rpc.Command.Stop.serializeBinaryToWriter),
            i = t.getWork(),
            i != null && r.writeMessage(1002, i, proto.cade_api.rpc.Command.Work.serializeBinaryToWriter),
            i = t.getMove(),
            i != null && r.writeMessage(1003, i, proto.cade_api.rpc.Command.Move.serializeBinaryToWriter),
            i = t.getCreate(),
            i != null && r.writeMessage(1004, i, proto.cade_api.rpc.Command.Create.serializeBinaryToWriter),
            i = t.getAddattribute(),
            i != null && r.writeMessage(1005, i, proto.cade_api.rpc.Command.AddAttribute.serializeBinaryToWriter),
            i = t.getAiorder(),
            i != null && r.writeMessage(1010, i, proto.cade_api.rpc.Command.AiOrder.serializeBinaryToWriter),
            i = t.getResign(),
            i != null && r.writeMessage(1011, i, proto.cade_api.rpc.Command.Resign.serializeBinaryToWriter),
            i = t.getAddwaypoint(),
            i != null && r.writeMessage(112, i, proto.cade_api.rpc.Command.AddWaypoint.serializeBinaryToWriter),
            i = t.getPause(),
            i != null && r.writeMessage(1013, i, proto.cade_api.rpc.Command.Pause.serializeBinaryToWriter),
            i = t.getGroupwaypoint(),
            i != null && r.writeMessage(1016, i, proto.cade_api.rpc.Command.GroupWaypoint.serializeBinaryToWriter),
            i = t.getGroupaiorder(),
            i != null && r.writeMessage(1017, i, proto.cade_api.rpc.Command.GroupAiOrder.serializeBinaryToWriter),
            i = t.getUnitaistate(),
            i != null && r.writeMessage(1018, i, proto.cade_api.rpc.Command.UnitAiState.serializeBinaryToWriter),
            i = t.getGuard(),
            i != null && r.writeMessage(1019, i, proto.cade_api.rpc.Command.Guard.serializeBinaryToWriter),
            i = t.getFollow(),
            i != null && r.writeMessage(1020, i, proto.cade_api.rpc.Command.Follow.serializeBinaryToWriter),
            i = t.getPatrol(),
            i != null && r.writeMessage(1021, i, proto.cade_api.rpc.Command.Patrol.serializeBinaryToWriter),
            i = t.getScout(),
            i != null && r.writeMessage(1022, i, proto.cade_api.rpc.Command.Scout.serializeBinaryToWriter),
            i = t.getFormformation(),
            i != null && r.writeMessage(1023, i, proto.cade_api.rpc.Command.FormFormation.serializeBinaryToWriter),
            i = t.getWheelformation(),
            i != null && r.writeMessage(1025, i, proto.cade_api.rpc.Command.WheelFormation.serializeBinaryToWriter),
            i = t.getAboutfaceformation(),
            i != null && r.writeMessage(1026, i, proto.cade_api.rpc.Command.AboutFaceFormation.serializeBinaryToWriter),
            i = t.getMultiplayersave(),
            i != null && r.writeMessage(1027, i, proto.cade_api.rpc.Command.MultiplayerSave.serializeBinaryToWriter),
            i = t.getGroupmultiwaypoints(),
            i != null && r.writeMessage(1031, i, proto.cade_api.rpc.Command.GroupMultiWaypoints.serializeBinaryToWriter),
            i = t.getChapter(),
            i != null && r.writeMessage(1032, i, proto.cade_api.rpc.Command.Chapter.serializeBinaryToWriter),
            i = t.getAttackmove(),
            i != null && r.writeMessage(1033, i, proto.cade_api.rpc.Command.AttackMove.serializeBinaryToWriter),
            i = t.getAttackmovetarget(),
            i != null && r.writeMessage(1034, i, proto.cade_api.rpc.Command.AttackMoveTarget.serializeBinaryToWriter),
            i = t.getRetreat(),
            i != null && r.writeMessage(1035, i, proto.cade_api.rpc.Command.Retreat.serializeBinaryToWriter),
            i = t.getUnittypeaistate(),
            i != null && r.writeMessage(1037, i, proto.cade_api.rpc.Command.UnitTypeAiState.serializeBinaryToWriter),
            i = t.getAutoscout(),
            i != null && r.writeMessage(1038, i, proto.cade_api.rpc.Command.AutoScout.serializeBinaryToWriter),
            i = t.getStopall(),
            i != null && r.writeMessage(1039, i, proto.cade_api.rpc.Command.StopAll.serializeBinaryToWriter),
            i = t.getMoretechs(),
            i != null && r.writeMessage(1040, i, proto.cade_api.rpc.Command.MoreTechs.serializeBinaryToWriter),
            i = t.getTransformobject(),
            i != null && r.writeMessage(1041, i, proto.cade_api.rpc.Command.TransformObject.serializeBinaryToWriter),
            i = t.getTrigger(),
            i != null && r.writeMessage(1042, i, proto.cade_api.rpc.Command.Trigger.serializeBinaryToWriter),
            i = t.getTransformobjects(),
            i != null && r.writeMessage(1043, i, proto.cade_api.rpc.Command.TransformObjects.serializeBinaryToWriter),
            i = t.getMake(),
            i != null && r.writeMessage(1100, i, proto.cade_api.rpc.Command.Make.serializeBinaryToWriter),
            i = t.getResearch(),
            i != null && r.writeMessage(1101, i, proto.cade_api.rpc.Command.Research.serializeBinaryToWriter),
            i = t.getBuild(),
            i != null && r.writeMessage(1102, i, proto.cade_api.rpc.Command.Build.serializeBinaryToWriter),
            i = t.getGame(),
            i != null && r.writeMessage(1103, i, proto.cade_api.rpc.Command.Game.serializeBinaryToWriter),
            i = t.getExplore(),
            i != null && r.writeMessage(1104, i, proto.cade_api.rpc.Command.Explore.serializeBinaryToWriter),
            i = t.getBuildwall(),
            i != null && r.writeMessage(1105, i, proto.cade_api.rpc.Command.BuildWall.serializeBinaryToWriter),
            i = t.getCancelbuild(),
            i != null && r.writeMessage(1106, i, proto.cade_api.rpc.Command.CancelBuild.serializeBinaryToWriter),
            i = t.getAttackground(),
            i != null && r.writeMessage(1107, i, proto.cade_api.rpc.Command.AttackGround.serializeBinaryToWriter),
            i = t.getGiveattribute2(),
            i != null && r.writeMessage(1108, i, proto.cade_api.rpc.Command.GiveAttribute2.serializeBinaryToWriter),
            i = t.getTradeattribute(),
            i != null && r.writeMessage(1109, i, proto.cade_api.rpc.Command.TradeAttribute.serializeBinaryToWriter),
            i = t.getRepair(),
            i != null && r.writeMessage(1110, i, proto.cade_api.rpc.Command.Repair.serializeBinaryToWriter),
            i = t.getUnload(),
            i != null && r.writeMessage(1111, i, proto.cade_api.rpc.Command.Unload.serializeBinaryToWriter),
            i = t.getGate(),
            i != null && r.writeMessage(1114, i, proto.cade_api.rpc.Command.Gate.serializeBinaryToWriter),
            i = t.getFlare(),
            i != null && r.writeMessage(1115, i, proto.cade_api.rpc.Command.Flare.serializeBinaryToWriter),
            i = t.getSpecial(),
            i != null && r.writeMessage(1116, i, proto.cade_api.rpc.Command.Special.serializeBinaryToWriter),
            i = t.getUnitorder(),
            i != null && r.writeMessage(1117, i, proto.cade_api.rpc.Command.UnitOrder.serializeBinaryToWriter),
            i = t.getDiplomacy(),
            i != null && r.writeMessage(1118, i, proto.cade_api.rpc.Command.Diplomacy.serializeBinaryToWriter),
            i = t.getQueue(),
            i != null && r.writeMessage(1119, i, proto.cade_api.rpc.Command.Queue.serializeBinaryToWriter),
            i = t.getSetgatherpoint(),
            i != null && r.writeMessage(1120, i, proto.cade_api.rpc.Command.SetGatherPoint.serializeBinaryToWriter),
            i = t.getSetretreatpoint(),
            i != null && r.writeMessage(1121, i, proto.cade_api.rpc.Command.SetRetreatPoint.serializeBinaryToWriter),
            i = t.getSellcommodity(),
            i != null && r.writeMessage(1122, i, proto.cade_api.rpc.Command.SellCommodity.serializeBinaryToWriter),
            i = t.getBuycommodity(),
            i != null && r.writeMessage(1123, i, proto.cade_api.rpc.Command.BuyCommodity.serializeBinaryToWriter),
            i = t.getUnittransform(),
            i != null && r.writeMessage(1125, i, proto.cade_api.rpc.Command.UnitTransform.serializeBinaryToWriter),
            i = t.getDroprelic(),
            i != null && r.writeMessage(1126, i, proto.cade_api.rpc.Command.DropRelic.serializeBinaryToWriter),
            i = t.getTownbell(),
            i != null && r.writeMessage(1127, i, proto.cade_api.rpc.Command.TownBell.serializeBinaryToWriter),
            i = t.getGobacktowork(),
            i != null && r.writeMessage(1128, i, proto.cade_api.rpc.Command.GoBackToWork.serializeBinaryToWriter),
            i = t.getMultiqueue(),
            i != null && r.writeMessage(1129, i, proto.cade_api.rpc.Command.MultiQueue.serializeBinaryToWriter),
            i = t.getSetgatherstate(),
            i != null && r.writeMessage(1130, i, proto.cade_api.rpc.Command.SetGatherState.serializeBinaryToWriter),
            i = t.getDeleteobjects(),
            i != null && r.writeMessage(1131, i, proto.cade_api.rpc.Command.DeleteObjects.serializeBinaryToWriter),
            i = t.getResetbuildings(),
            i != null && r.writeMessage(1132, i, proto.cade_api.rpc.Command.ResetBuildings.serializeBinaryToWriter),
            i = t.getMultigate(),
            i != null && r.writeMessage(1133, i, proto.cade_api.rpc.Command.MultiGate.serializeBinaryToWriter),
            i = t.getGobacktowork2(),
            i != null && r.writeMessage(1134, i, proto.cade_api.rpc.Command.GoBackToWork2.serializeBinaryToWriter),
            i = t.getChangeplayername(),
            i != null && r.writeMessage(1135, i, proto.cade_api.rpc.Command.ChangePlayerName.serializeBinaryToWriter),
            i = t.getSendaisignal(),
            i != null && r.writeMessage(1136, i, proto.cade_api.rpc.Command.SendAiSignal.serializeBinaryToWriter),
            i = t.getAieffectamount(),
            i != null && r.writeMessage(1137, i, proto.cade_api.rpc.Command.AiEffectAmount.serializeBinaryToWriter),
            i = t.getAieffectpercent(),
            i != null && r.writeMessage(1138, i, proto.cade_api.rpc.Command.AiEffectPercent.serializeBinaryToWriter),
            i = t.getGiveattributes(),
            i != null && r.writeMessage(1196, i, proto.cade_api.rpc.Command.GiveAttributes.serializeBinaryToWriter),
            i = t.getUnknowncommand(),
            i != null && r.writeMessage(2e3, i, proto.cade_api.rpc.Command.UnknownCommand.serializeBinaryToWriter)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.XyzUintPoint.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.XyzUintPoint.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.XyzUintPoint.toObject = function (t, r) {
            var i, n = {
                x: S.Message.getFieldWithDefault(r, 1, 0),
                y: S.Message.getFieldWithDefault(r, 2, 0),
                z: S.Message.getFieldWithDefault(r, 3, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.XyzUintPoint.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.XyzUintPoint;
        return proto.cade_api.rpc.Command.XyzUintPoint.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.XyzUintPoint.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setX(n);
                    break;
                case 2:
                    var n = r.readUint32();
                    t.setY(n);
                    break;
                case 3:
                    var n = r.readUint32();
                    t.setZ(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.XyzUintPoint.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.XyzUintPoint.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.XyzUintPoint.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getX(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getY(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getZ(),
            i !== 0 && r.writeUint32(3, i)
    }
        ;
    proto.cade_api.rpc.Command.XyzUintPoint.prototype.getX = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.XyzUintPoint.prototype.setX = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.XyzUintPoint.prototype.getY = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.XyzUintPoint.prototype.setY = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.XyzUintPoint.prototype.getZ = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Command.XyzUintPoint.prototype.setZ = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.XyzFloatPoint.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.XyzFloatPoint.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.XyzFloatPoint.toObject = function (t, r) {
            var i, n = {
                x: S.Message.getFloatingPointFieldWithDefault(r, 1, 0),
                y: S.Message.getFloatingPointFieldWithDefault(r, 2, 0),
                z: S.Message.getFloatingPointFieldWithDefault(r, 3, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.XyzFloatPoint.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.XyzFloatPoint;
        return proto.cade_api.rpc.Command.XyzFloatPoint.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.XyzFloatPoint.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readFloat();
                    t.setX(n);
                    break;
                case 2:
                    var n = r.readFloat();
                    t.setY(n);
                    break;
                case 3:
                    var n = r.readFloat();
                    t.setZ(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.XyzFloatPoint.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.XyzFloatPoint.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.XyzFloatPoint.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getX(),
            i !== 0 && r.writeFloat(1, i),
            i = t.getY(),
            i !== 0 && r.writeFloat(2, i),
            i = t.getZ(),
            i !== 0 && r.writeFloat(3, i)
    }
        ;
    proto.cade_api.rpc.Command.XyzFloatPoint.prototype.getX = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.XyzFloatPoint.prototype.setX = function (t) {
        return S.Message.setProto3FloatField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.XyzFloatPoint.prototype.getY = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.XyzFloatPoint.prototype.setY = function (t) {
        return S.Message.setProto3FloatField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.XyzFloatPoint.prototype.getZ = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Command.XyzFloatPoint.prototype.setZ = function (t) {
        return S.Message.setProto3FloatField(this, 3, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.XyUintPoint.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.XyUintPoint.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.XyUintPoint.toObject = function (t, r) {
            var i, n = {
                x: S.Message.getFieldWithDefault(r, 1, 0),
                y: S.Message.getFieldWithDefault(r, 2, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.XyUintPoint.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.XyUintPoint;
        return proto.cade_api.rpc.Command.XyUintPoint.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.XyUintPoint.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setX(n);
                    break;
                case 2:
                    var n = r.readUint32();
                    t.setY(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.XyUintPoint.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.XyUintPoint.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.XyUintPoint.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getX(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getY(),
            i !== 0 && r.writeUint32(2, i)
    }
        ;
    proto.cade_api.rpc.Command.XyUintPoint.prototype.getX = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.XyUintPoint.prototype.setX = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.XyUintPoint.prototype.getY = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.XyUintPoint.prototype.setY = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.XyFloatPoint.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.XyFloatPoint.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.XyFloatPoint.toObject = function (t, r) {
            var i, n = {
                x: S.Message.getFloatingPointFieldWithDefault(r, 1, 0),
                y: S.Message.getFloatingPointFieldWithDefault(r, 2, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.XyFloatPoint.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.XyFloatPoint;
        return proto.cade_api.rpc.Command.XyFloatPoint.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.XyFloatPoint.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readFloat();
                    t.setX(n);
                    break;
                case 2:
                    var n = r.readFloat();
                    t.setY(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.XyFloatPoint.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.XyFloatPoint.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.XyFloatPoint.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getX(),
            i !== 0 && r.writeFloat(1, i),
            i = t.getY(),
            i !== 0 && r.writeFloat(2, i)
    }
        ;
    proto.cade_api.rpc.Command.XyFloatPoint.prototype.getX = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.XyFloatPoint.prototype.setX = function (t) {
        return S.Message.setProto3FloatField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.XyFloatPoint.prototype.getY = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.XyFloatPoint.prototype.setY = function (t) {
        return S.Message.setProto3FloatField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.Interact.repeatedFields_ = [9];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Interact.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Interact.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Interact.toObject = function (t, r) {
            var i, n = {
                commplayerid: S.Message.getFieldWithDefault(r, 1, 0),
                targetid: S.Message.getFieldWithDefault(r, 2, 0),
                location: (i = r.getLocation()) && proto.cade_api.rpc.Command.XyFloatPoint.toObject(t, i),
                extend: S.Message.getBooleanFieldWithDefault(r, 5, !1),
                instant: S.Message.getBooleanFieldWithDefault(r, 6, !1),
                humanorder: S.Message.getBooleanFieldWithDefault(r, 7, !1),
                controlheld: S.Message.getBooleanFieldWithDefault(r, 8, !1),
                unitidsList: (i = S.Message.getRepeatedField(r, 9)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Interact.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Interact;
        return proto.cade_api.rpc.Command.Interact.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Interact.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setCommplayerid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setTargetid(n);
                    break;
                case 4:
                    var n = new proto.cade_api.rpc.Command.XyFloatPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyFloatPoint.deserializeBinaryFromReader),
                        t.setLocation(n);
                    break;
                case 5:
                    var n = r.readBool();
                    t.setExtend(n);
                    break;
                case 6:
                    var n = r.readBool();
                    t.setInstant(n);
                    break;
                case 7:
                    var n = r.readBool();
                    t.setHumanorder(n);
                    break;
                case 8:
                    var n = r.readBool();
                    t.setControlheld(n);
                    break;
                case 9:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Interact.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Interact.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Interact.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getCommplayerid(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getTargetid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getLocation(),
            i != null && r.writeMessage(4, i, proto.cade_api.rpc.Command.XyFloatPoint.serializeBinaryToWriter),
            i = t.getExtend(),
            i && r.writeBool(5, i),
            i = t.getInstant(),
            i && r.writeBool(6, i),
            i = t.getHumanorder(),
            i && r.writeBool(7, i),
            i = t.getControlheld(),
            i && r.writeBool(8, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(9, i)
    }
        ;
    proto.cade_api.rpc.Command.Interact.prototype.getCommplayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.Interact.prototype.setCommplayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.Interact.prototype.getTargetid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.Interact.prototype.setTargetid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.Interact.prototype.getLocation = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.XyFloatPoint, 4)
    }
        ;
    proto.cade_api.rpc.Command.Interact.prototype.setLocation = function (t) {
        return S.Message.setWrapperField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.Interact.prototype.clearLocation = function () {
        return this.setLocation(void 0)
    }
        ;
    proto.cade_api.rpc.Command.Interact.prototype.hasLocation = function () {
        return S.Message.getField(this, 4) != null
    }
        ;
    proto.cade_api.rpc.Command.Interact.prototype.getExtend = function () {
        return S.Message.getBooleanFieldWithDefault(this, 5, !1)
    }
        ;
    proto.cade_api.rpc.Command.Interact.prototype.setExtend = function (t) {
        return S.Message.setProto3BooleanField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.Command.Interact.prototype.getInstant = function () {
        return S.Message.getBooleanFieldWithDefault(this, 6, !1)
    }
        ;
    proto.cade_api.rpc.Command.Interact.prototype.setInstant = function (t) {
        return S.Message.setProto3BooleanField(this, 6, t)
    }
        ;
    proto.cade_api.rpc.Command.Interact.prototype.getHumanorder = function () {
        return S.Message.getBooleanFieldWithDefault(this, 7, !1)
    }
        ;
    proto.cade_api.rpc.Command.Interact.prototype.setHumanorder = function (t) {
        return S.Message.setProto3BooleanField(this, 7, t)
    }
        ;
    proto.cade_api.rpc.Command.Interact.prototype.getControlheld = function () {
        return S.Message.getBooleanFieldWithDefault(this, 8, !1)
    }
        ;
    proto.cade_api.rpc.Command.Interact.prototype.setControlheld = function (t) {
        return S.Message.setProto3BooleanField(this, 8, t)
    }
        ;
    proto.cade_api.rpc.Command.Interact.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 9)
    }
        ;
    proto.cade_api.rpc.Command.Interact.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 9, t || [])
    }
        ;
    proto.cade_api.rpc.Command.Interact.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 9, t, r)
    }
        ;
    proto.cade_api.rpc.Command.Interact.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.Stop.repeatedFields_ = [2];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Stop.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Stop.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Stop.toObject = function (t, r) {
            var i, n = {
                unitidsList: (i = S.Message.getRepeatedField(r, 2)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Stop.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Stop;
        return proto.cade_api.rpc.Command.Stop.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Stop.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Stop.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Stop.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Stop.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(2, i)
    }
        ;
    proto.cade_api.rpc.Command.Stop.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 2)
    }
        ;
    proto.cade_api.rpc.Command.Stop.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 2, t || [])
    }
        ;
    proto.cade_api.rpc.Command.Stop.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 2, t, r)
    }
        ;
    proto.cade_api.rpc.Command.Stop.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.Work.repeatedFields_ = [9];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Work.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Work.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Work.toObject = function (t, r) {
            var i, n = {
                commplayerid: S.Message.getFieldWithDefault(r, 1, 0),
                targetid: S.Message.getFieldWithDefault(r, 2, 0),
                location: (i = r.getLocation()) && proto.cade_api.rpc.Command.XyFloatPoint.toObject(t, i),
                extend: S.Message.getBooleanFieldWithDefault(r, 5, !1),
                instant: S.Message.getBooleanFieldWithDefault(r, 6, !1),
                humanorder: S.Message.getBooleanFieldWithDefault(r, 7, !1),
                controlheld: S.Message.getBooleanFieldWithDefault(r, 8, !1),
                unitidsList: (i = S.Message.getRepeatedField(r, 9)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Work.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Work;
        return proto.cade_api.rpc.Command.Work.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Work.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setCommplayerid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setTargetid(n);
                    break;
                case 4:
                    var n = new proto.cade_api.rpc.Command.XyFloatPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyFloatPoint.deserializeBinaryFromReader),
                        t.setLocation(n);
                    break;
                case 5:
                    var n = r.readBool();
                    t.setExtend(n);
                    break;
                case 6:
                    var n = r.readBool();
                    t.setInstant(n);
                    break;
                case 7:
                    var n = r.readBool();
                    t.setHumanorder(n);
                    break;
                case 8:
                    var n = r.readBool();
                    t.setControlheld(n);
                    break;
                case 9:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Work.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Work.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Work.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getCommplayerid(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getTargetid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getLocation(),
            i != null && r.writeMessage(4, i, proto.cade_api.rpc.Command.XyFloatPoint.serializeBinaryToWriter),
            i = t.getExtend(),
            i && r.writeBool(5, i),
            i = t.getInstant(),
            i && r.writeBool(6, i),
            i = t.getHumanorder(),
            i && r.writeBool(7, i),
            i = t.getControlheld(),
            i && r.writeBool(8, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(9, i)
    }
        ;
    proto.cade_api.rpc.Command.Work.prototype.getCommplayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.Work.prototype.setCommplayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.Work.prototype.getTargetid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.Work.prototype.setTargetid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.Work.prototype.getLocation = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.XyFloatPoint, 4)
    }
        ;
    proto.cade_api.rpc.Command.Work.prototype.setLocation = function (t) {
        return S.Message.setWrapperField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.Work.prototype.clearLocation = function () {
        return this.setLocation(void 0)
    }
        ;
    proto.cade_api.rpc.Command.Work.prototype.hasLocation = function () {
        return S.Message.getField(this, 4) != null
    }
        ;
    proto.cade_api.rpc.Command.Work.prototype.getExtend = function () {
        return S.Message.getBooleanFieldWithDefault(this, 5, !1)
    }
        ;
    proto.cade_api.rpc.Command.Work.prototype.setExtend = function (t) {
        return S.Message.setProto3BooleanField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.Command.Work.prototype.getInstant = function () {
        return S.Message.getBooleanFieldWithDefault(this, 6, !1)
    }
        ;
    proto.cade_api.rpc.Command.Work.prototype.setInstant = function (t) {
        return S.Message.setProto3BooleanField(this, 6, t)
    }
        ;
    proto.cade_api.rpc.Command.Work.prototype.getHumanorder = function () {
        return S.Message.getBooleanFieldWithDefault(this, 7, !1)
    }
        ;
    proto.cade_api.rpc.Command.Work.prototype.setHumanorder = function (t) {
        return S.Message.setProto3BooleanField(this, 7, t)
    }
        ;
    proto.cade_api.rpc.Command.Work.prototype.getControlheld = function () {
        return S.Message.getBooleanFieldWithDefault(this, 8, !1)
    }
        ;
    proto.cade_api.rpc.Command.Work.prototype.setControlheld = function (t) {
        return S.Message.setProto3BooleanField(this, 8, t)
    }
        ;
    proto.cade_api.rpc.Command.Work.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 9)
    }
        ;
    proto.cade_api.rpc.Command.Work.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 9, t || [])
    }
        ;
    proto.cade_api.rpc.Command.Work.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 9, t, r)
    }
        ;
    proto.cade_api.rpc.Command.Work.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.Move.repeatedFields_ = [9];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Move.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Move.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Move.toObject = function (t, r) {
            var i, n = {
                commplayerid: S.Message.getFieldWithDefault(r, 1, 0),
                targetid: S.Message.getFieldWithDefault(r, 2, 0),
                location: (i = r.getLocation()) && proto.cade_api.rpc.Command.XyFloatPoint.toObject(t, i),
                extend: S.Message.getBooleanFieldWithDefault(r, 5, !1),
                instant: S.Message.getBooleanFieldWithDefault(r, 6, !1),
                humanorder: S.Message.getBooleanFieldWithDefault(r, 7, !1),
                controlheld: S.Message.getBooleanFieldWithDefault(r, 8, !1),
                unitidsList: (i = S.Message.getRepeatedField(r, 9)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Move.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Move;
        return proto.cade_api.rpc.Command.Move.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Move.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setCommplayerid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setTargetid(n);
                    break;
                case 4:
                    var n = new proto.cade_api.rpc.Command.XyFloatPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyFloatPoint.deserializeBinaryFromReader),
                        t.setLocation(n);
                    break;
                case 5:
                    var n = r.readBool();
                    t.setExtend(n);
                    break;
                case 6:
                    var n = r.readBool();
                    t.setInstant(n);
                    break;
                case 7:
                    var n = r.readBool();
                    t.setHumanorder(n);
                    break;
                case 8:
                    var n = r.readBool();
                    t.setControlheld(n);
                    break;
                case 9:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Move.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Move.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Move.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getCommplayerid(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getTargetid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getLocation(),
            i != null && r.writeMessage(4, i, proto.cade_api.rpc.Command.XyFloatPoint.serializeBinaryToWriter),
            i = t.getExtend(),
            i && r.writeBool(5, i),
            i = t.getInstant(),
            i && r.writeBool(6, i),
            i = t.getHumanorder(),
            i && r.writeBool(7, i),
            i = t.getControlheld(),
            i && r.writeBool(8, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(9, i)
    }
        ;
    proto.cade_api.rpc.Command.Move.prototype.getCommplayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.Move.prototype.setCommplayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.Move.prototype.getTargetid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.Move.prototype.setTargetid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.Move.prototype.getLocation = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.XyFloatPoint, 4)
    }
        ;
    proto.cade_api.rpc.Command.Move.prototype.setLocation = function (t) {
        return S.Message.setWrapperField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.Move.prototype.clearLocation = function () {
        return this.setLocation(void 0)
    }
        ;
    proto.cade_api.rpc.Command.Move.prototype.hasLocation = function () {
        return S.Message.getField(this, 4) != null
    }
        ;
    proto.cade_api.rpc.Command.Move.prototype.getExtend = function () {
        return S.Message.getBooleanFieldWithDefault(this, 5, !1)
    }
        ;
    proto.cade_api.rpc.Command.Move.prototype.setExtend = function (t) {
        return S.Message.setProto3BooleanField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.Command.Move.prototype.getInstant = function () {
        return S.Message.getBooleanFieldWithDefault(this, 6, !1)
    }
        ;
    proto.cade_api.rpc.Command.Move.prototype.setInstant = function (t) {
        return S.Message.setProto3BooleanField(this, 6, t)
    }
        ;
    proto.cade_api.rpc.Command.Move.prototype.getHumanorder = function () {
        return S.Message.getBooleanFieldWithDefault(this, 7, !1)
    }
        ;
    proto.cade_api.rpc.Command.Move.prototype.setHumanorder = function (t) {
        return S.Message.setProto3BooleanField(this, 7, t)
    }
        ;
    proto.cade_api.rpc.Command.Move.prototype.getControlheld = function () {
        return S.Message.getBooleanFieldWithDefault(this, 8, !1)
    }
        ;
    proto.cade_api.rpc.Command.Move.prototype.setControlheld = function (t) {
        return S.Message.setProto3BooleanField(this, 8, t)
    }
        ;
    proto.cade_api.rpc.Command.Move.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 9)
    }
        ;
    proto.cade_api.rpc.Command.Move.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 9, t || [])
    }
        ;
    proto.cade_api.rpc.Command.Move.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 9, t, r)
    }
        ;
    proto.cade_api.rpc.Command.Move.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Create.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Create.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Create.toObject = function (t, r) {
            var i, n = {
                objcategory: S.Message.getFieldWithDefault(r, 1, 0),
                playerid: S.Message.getFieldWithDefault(r, 2, 0),
                location: (i = r.getLocation()) && proto.cade_api.rpc.Command.XyzFloatPoint.toObject(t, i)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Create.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Create;
        return proto.cade_api.rpc.Command.Create.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Create.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setObjcategory(n);
                    break;
                case 2:
                    var n = r.readUint32();
                    t.setPlayerid(n);
                    break;
                case 3:
                    var n = new proto.cade_api.rpc.Command.XyzFloatPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyzFloatPoint.deserializeBinaryFromReader),
                        t.setLocation(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Create.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Create.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Create.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getObjcategory(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getPlayerid(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getLocation(),
            i != null && r.writeMessage(3, i, proto.cade_api.rpc.Command.XyzFloatPoint.serializeBinaryToWriter)
    }
        ;
    proto.cade_api.rpc.Command.Create.prototype.getObjcategory = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.Create.prototype.setObjcategory = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.Create.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.Create.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.Create.prototype.getLocation = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.XyzFloatPoint, 3)
    }
        ;
    proto.cade_api.rpc.Command.Create.prototype.setLocation = function (t) {
        return S.Message.setWrapperField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.Create.prototype.clearLocation = function () {
        return this.setLocation(void 0)
    }
        ;
    proto.cade_api.rpc.Command.Create.prototype.hasLocation = function () {
        return S.Message.getField(this, 3) != null
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.AddAttribute.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.AddAttribute.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.AddAttribute.toObject = function (t, r) {
            var i, n = {
                playerid: S.Message.getFieldWithDefault(r, 1, 0),
                attrid: S.Message.getFieldWithDefault(r, 2, 0),
                attramount: S.Message.getFloatingPointFieldWithDefault(r, 3, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.AddAttribute.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.AddAttribute;
        return proto.cade_api.rpc.Command.AddAttribute.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.AddAttribute.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setPlayerid(n);
                    break;
                case 2:
                    var n = r.readUint32();
                    t.setAttrid(n);
                    break;
                case 3:
                    var n = r.readFloat();
                    t.setAttramount(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.AddAttribute.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.AddAttribute.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.AddAttribute.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getPlayerid(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getAttrid(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getAttramount(),
            i !== 0 && r.writeFloat(3, i)
    }
        ;
    proto.cade_api.rpc.Command.AddAttribute.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.AddAttribute.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.AddAttribute.prototype.getAttrid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.AddAttribute.prototype.setAttrid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.AddAttribute.prototype.getAttramount = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Command.AddAttribute.prototype.setAttramount = function (t) {
        return S.Message.setProto3FloatField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.repeatedFields_ = [13];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.AiOrder.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.AiOrder.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.AiOrder.toObject = function (t, r) {
            var i, n = {
                playerid: S.Message.getFieldWithDefault(r, 2, 0),
                issuer: S.Message.getFieldWithDefault(r, 3, 0),
                recipient: S.Message.getFieldWithDefault(r, 4, 0),
                ordertype: S.Message.getFieldWithDefault(r, 5, 0),
                orderpriority: S.Message.getFieldWithDefault(r, 6, 0),
                targetowner: S.Message.getFieldWithDefault(r, 8, 0),
                location: (i = r.getLocation()) && proto.cade_api.rpc.Command.XyzFloatPoint.toObject(t, i),
                range: S.Message.getFloatingPointFieldWithDefault(r, 10, 0),
                immediate: S.Message.getBooleanFieldWithDefault(r, 11, !1),
                infront: S.Message.getBooleanFieldWithDefault(r, 12, !1),
                unitidsList: (i = S.Message.getRepeatedField(r, 13)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.AiOrder.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.AiOrder;
        return proto.cade_api.rpc.Command.AiOrder.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readUint32();
                    t.setPlayerid(n);
                    break;
                case 3:
                    var n = r.readUint32();
                    t.setIssuer(n);
                    break;
                case 4:
                    var n = r.readInt32();
                    t.setRecipient(n);
                    break;
                case 5:
                    var n = r.readInt32();
                    t.setOrdertype(n);
                    break;
                case 6:
                    var n = r.readUint32();
                    t.setOrderpriority(n);
                    break;
                case 8:
                    var n = r.readUint32();
                    t.setTargetowner(n);
                    break;
                case 9:
                    var n = new proto.cade_api.rpc.Command.XyzFloatPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyzFloatPoint.deserializeBinaryFromReader),
                        t.setLocation(n);
                    break;
                case 10:
                    var n = r.readFloat();
                    t.setRange(n);
                    break;
                case 11:
                    var n = r.readBool();
                    t.setImmediate(n);
                    break;
                case 12:
                    var n = r.readBool();
                    t.setInfront(n);
                    break;
                case 13:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.AiOrder.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getPlayerid(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getIssuer(),
            i !== 0 && r.writeUint32(3, i),
            i = t.getRecipient(),
            i !== 0 && r.writeInt32(4, i),
            i = t.getOrdertype(),
            i !== 0 && r.writeInt32(5, i),
            i = t.getOrderpriority(),
            i !== 0 && r.writeUint32(6, i),
            i = t.getTargetowner(),
            i !== 0 && r.writeUint32(8, i),
            i = t.getLocation(),
            i != null && r.writeMessage(9, i, proto.cade_api.rpc.Command.XyzFloatPoint.serializeBinaryToWriter),
            i = t.getRange(),
            i !== 0 && r.writeFloat(10, i),
            i = t.getImmediate(),
            i && r.writeBool(11, i),
            i = t.getInfront(),
            i && r.writeBool(12, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(13, i)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.getIssuer = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.setIssuer = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.getRecipient = function () {
        return S.Message.getFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.setRecipient = function (t) {
        return S.Message.setProto3IntField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.getOrdertype = function () {
        return S.Message.getFieldWithDefault(this, 5, 0)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.setOrdertype = function (t) {
        return S.Message.setProto3IntField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.getOrderpriority = function () {
        return S.Message.getFieldWithDefault(this, 6, 0)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.setOrderpriority = function (t) {
        return S.Message.setProto3IntField(this, 6, t)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.getTargetowner = function () {
        return S.Message.getFieldWithDefault(this, 8, 0)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.setTargetowner = function (t) {
        return S.Message.setProto3IntField(this, 8, t)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.getLocation = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.XyzFloatPoint, 9)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.setLocation = function (t) {
        return S.Message.setWrapperField(this, 9, t)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.clearLocation = function () {
        return this.setLocation(void 0)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.hasLocation = function () {
        return S.Message.getField(this, 9) != null
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.getRange = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 10, 0)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.setRange = function (t) {
        return S.Message.setProto3FloatField(this, 10, t)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.getImmediate = function () {
        return S.Message.getBooleanFieldWithDefault(this, 11, !1)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.setImmediate = function (t) {
        return S.Message.setProto3BooleanField(this, 11, t)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.getInfront = function () {
        return S.Message.getBooleanFieldWithDefault(this, 12, !1)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.setInfront = function (t) {
        return S.Message.setProto3BooleanField(this, 12, t)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 13)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 13, t || [])
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 13, t, r)
    }
        ;
    proto.cade_api.rpc.Command.AiOrder.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Resign.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Resign.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Resign.toObject = function (t, r) {
            var i, n = {
                playerid: S.Message.getFieldWithDefault(r, 1, 0),
                commplayerid: S.Message.getFieldWithDefault(r, 2, 0),
                dropped: S.Message.getBooleanFieldWithDefault(r, 3, !1)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Resign.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Resign;
        return proto.cade_api.rpc.Command.Resign.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Resign.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setPlayerid(n);
                    break;
                case 2:
                    var n = r.readUint32();
                    t.setCommplayerid(n);
                    break;
                case 3:
                    var n = r.readBool();
                    t.setDropped(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Resign.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Resign.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Resign.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getPlayerid(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getCommplayerid(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getDropped(),
            i && r.writeBool(3, i)
    }
        ;
    proto.cade_api.rpc.Command.Resign.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.Resign.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.Resign.prototype.getCommplayerid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.Resign.prototype.setCommplayerid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.Resign.prototype.getDropped = function () {
        return S.Message.getBooleanFieldWithDefault(this, 3, !1)
    }
        ;
    proto.cade_api.rpc.Command.Resign.prototype.setDropped = function (t) {
        return S.Message.setProto3BooleanField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.AddWaypoint.repeatedFields_ = [4];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.AddWaypoint.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.AddWaypoint.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.AddWaypoint.toObject = function (t, r) {
            var i, n = {
                playerid: S.Message.getFieldWithDefault(r, 1, 0),
                recipient: S.Message.getFieldWithDefault(r, 2, 0),
                waypointsList: S.Message.toObjectList(r.getWaypointsList(), proto.cade_api.rpc.Command.XyzUintPoint.toObject, t)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.AddWaypoint.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.AddWaypoint;
        return proto.cade_api.rpc.Command.AddWaypoint.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.AddWaypoint.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setPlayerid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setRecipient(n);
                    break;
                case 4:
                    var n = new proto.cade_api.rpc.Command.XyzUintPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyzUintPoint.deserializeBinaryFromReader),
                        t.addWaypoints(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.AddWaypoint.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.AddWaypoint.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.AddWaypoint.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getPlayerid(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getRecipient(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getWaypointsList(),
            i.length > 0 && r.writeRepeatedMessage(4, i, proto.cade_api.rpc.Command.XyzUintPoint.serializeBinaryToWriter)
    }
        ;
    proto.cade_api.rpc.Command.AddWaypoint.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.AddWaypoint.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.AddWaypoint.prototype.getRecipient = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.AddWaypoint.prototype.setRecipient = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.AddWaypoint.prototype.getWaypointsList = function () {
        return S.Message.getRepeatedWrapperField(this, proto.cade_api.rpc.Command.XyzUintPoint, 4)
    }
        ;
    proto.cade_api.rpc.Command.AddWaypoint.prototype.setWaypointsList = function (t) {
        return S.Message.setRepeatedWrapperField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.AddWaypoint.prototype.addWaypoints = function (t, r) {
        return S.Message.addToRepeatedWrapperField(this, 4, t, proto.cade_api.rpc.Command.XyzUintPoint, r)
    }
        ;
    proto.cade_api.rpc.Command.AddWaypoint.prototype.clearWaypointsList = function () {
        return this.setWaypointsList([])
    }
        ;
    proto.cade_api.rpc.Command.Pause.repeatedFields_ = [2];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Pause.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Pause.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Pause.toObject = function (t, r) {
            var i, n = {
                unitidsList: (i = S.Message.getRepeatedField(r, 2)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Pause.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Pause;
        return proto.cade_api.rpc.Command.Pause.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Pause.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Pause.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Pause.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Pause.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(2, i)
    }
        ;
    proto.cade_api.rpc.Command.Pause.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 2)
    }
        ;
    proto.cade_api.rpc.Command.Pause.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 2, t || [])
    }
        ;
    proto.cade_api.rpc.Command.Pause.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 2, t, r)
    }
        ;
    proto.cade_api.rpc.Command.Pause.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.GroupWaypoint.repeatedFields_ = [4];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.GroupWaypoint.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.GroupWaypoint.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.GroupWaypoint.toObject = function (t, r) {
            var i, n = {
                commplayerid: S.Message.getFieldWithDefault(r, 1, 0),
                location: (i = r.getLocation()) && proto.cade_api.rpc.Command.XyUintPoint.toObject(t, i),
                unitidsList: (i = S.Message.getRepeatedField(r, 4)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.GroupWaypoint.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.GroupWaypoint;
        return proto.cade_api.rpc.Command.GroupWaypoint.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.GroupWaypoint.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setCommplayerid(n);
                    break;
                case 3:
                    var n = new proto.cade_api.rpc.Command.XyUintPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyUintPoint.deserializeBinaryFromReader),
                        t.setLocation(n);
                    break;
                case 4:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.GroupWaypoint.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.GroupWaypoint.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.GroupWaypoint.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getCommplayerid(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getLocation(),
            i != null && r.writeMessage(3, i, proto.cade_api.rpc.Command.XyUintPoint.serializeBinaryToWriter),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(4, i)
    }
        ;
    proto.cade_api.rpc.Command.GroupWaypoint.prototype.getCommplayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.GroupWaypoint.prototype.setCommplayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.GroupWaypoint.prototype.getLocation = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.XyUintPoint, 3)
    }
        ;
    proto.cade_api.rpc.Command.GroupWaypoint.prototype.setLocation = function (t) {
        return S.Message.setWrapperField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.GroupWaypoint.prototype.clearLocation = function () {
        return this.setLocation(void 0)
    }
        ;
    proto.cade_api.rpc.Command.GroupWaypoint.prototype.hasLocation = function () {
        return S.Message.getField(this, 3) != null
    }
        ;
    proto.cade_api.rpc.Command.GroupWaypoint.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 4)
    }
        ;
    proto.cade_api.rpc.Command.GroupWaypoint.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 4, t || [])
    }
        ;
    proto.cade_api.rpc.Command.GroupWaypoint.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 4, t, r)
    }
        ;
    proto.cade_api.rpc.Command.GroupWaypoint.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.repeatedFields_ = [12];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.GroupAiOrder.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.GroupAiOrder.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.GroupAiOrder.toObject = function (t, r) {
            var i, n = {
                playerid: S.Message.getFieldWithDefault(r, 1, 0),
                issuer: S.Message.getFieldWithDefault(r, 2, 0),
                ordertype: S.Message.getFieldWithDefault(r, 4, 0),
                orderpriority: S.Message.getFieldWithDefault(r, 5, 0),
                targetid: S.Message.getFieldWithDefault(r, 6, 0),
                targetowner: S.Message.getFieldWithDefault(r, 7, 0),
                location: (i = r.getLocation()) && proto.cade_api.rpc.Command.XyzFloatPoint.toObject(t, i),
                range: S.Message.getFloatingPointFieldWithDefault(r, 9, 0),
                immediate: S.Message.getBooleanFieldWithDefault(r, 10, !1),
                infront: S.Message.getBooleanFieldWithDefault(r, 11, !1),
                unitidsList: (i = S.Message.getRepeatedField(r, 12)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.GroupAiOrder.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.GroupAiOrder;
        return proto.cade_api.rpc.Command.GroupAiOrder.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setPlayerid(n);
                    break;
                case 2:
                    var n = r.readUint32();
                    t.setIssuer(n);
                    break;
                case 4:
                    var n = r.readInt32();
                    t.setOrdertype(n);
                    break;
                case 5:
                    var n = r.readUint32();
                    t.setOrderpriority(n);
                    break;
                case 6:
                    var n = r.readInt32();
                    t.setTargetid(n);
                    break;
                case 7:
                    var n = r.readUint32();
                    t.setTargetowner(n);
                    break;
                case 8:
                    var n = new proto.cade_api.rpc.Command.XyzFloatPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyzFloatPoint.deserializeBinaryFromReader),
                        t.setLocation(n);
                    break;
                case 9:
                    var n = r.readFloat();
                    t.setRange(n);
                    break;
                case 10:
                    var n = r.readBool();
                    t.setImmediate(n);
                    break;
                case 11:
                    var n = r.readBool();
                    t.setInfront(n);
                    break;
                case 12:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.GroupAiOrder.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getPlayerid(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getIssuer(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getOrdertype(),
            i !== 0 && r.writeInt32(4, i),
            i = t.getOrderpriority(),
            i !== 0 && r.writeUint32(5, i),
            i = t.getTargetid(),
            i !== 0 && r.writeInt32(6, i),
            i = t.getTargetowner(),
            i !== 0 && r.writeUint32(7, i),
            i = t.getLocation(),
            i != null && r.writeMessage(8, i, proto.cade_api.rpc.Command.XyzFloatPoint.serializeBinaryToWriter),
            i = t.getRange(),
            i !== 0 && r.writeFloat(9, i),
            i = t.getImmediate(),
            i && r.writeBool(10, i),
            i = t.getInfront(),
            i && r.writeBool(11, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(12, i)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.getIssuer = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.setIssuer = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.getOrdertype = function () {
        return S.Message.getFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.setOrdertype = function (t) {
        return S.Message.setProto3IntField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.getOrderpriority = function () {
        return S.Message.getFieldWithDefault(this, 5, 0)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.setOrderpriority = function (t) {
        return S.Message.setProto3IntField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.getTargetid = function () {
        return S.Message.getFieldWithDefault(this, 6, 0)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.setTargetid = function (t) {
        return S.Message.setProto3IntField(this, 6, t)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.getTargetowner = function () {
        return S.Message.getFieldWithDefault(this, 7, 0)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.setTargetowner = function (t) {
        return S.Message.setProto3IntField(this, 7, t)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.getLocation = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.XyzFloatPoint, 8)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.setLocation = function (t) {
        return S.Message.setWrapperField(this, 8, t)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.clearLocation = function () {
        return this.setLocation(void 0)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.hasLocation = function () {
        return S.Message.getField(this, 8) != null
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.getRange = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 9, 0)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.setRange = function (t) {
        return S.Message.setProto3FloatField(this, 9, t)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.getImmediate = function () {
        return S.Message.getBooleanFieldWithDefault(this, 10, !1)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.setImmediate = function (t) {
        return S.Message.setProto3BooleanField(this, 10, t)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.getInfront = function () {
        return S.Message.getBooleanFieldWithDefault(this, 11, !1)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.setInfront = function (t) {
        return S.Message.setProto3BooleanField(this, 11, t)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 12)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 12, t || [])
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 12, t, r)
    }
        ;
    proto.cade_api.rpc.Command.GroupAiOrder.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.UnitAiState.repeatedFields_ = [3];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.UnitAiState.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.UnitAiState.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.UnitAiState.toObject = function (t, r) {
            var i, n = {
                state: S.Message.getFieldWithDefault(r, 2, 0),
                unitidsList: (i = S.Message.getRepeatedField(r, 3)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.UnitAiState.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.UnitAiState;
        return proto.cade_api.rpc.Command.UnitAiState.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.UnitAiState.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readUint32();
                    t.setState(n);
                    break;
                case 3:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.UnitAiState.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.UnitAiState.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.UnitAiState.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getState(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(3, i)
    }
        ;
    proto.cade_api.rpc.Command.UnitAiState.prototype.getState = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.UnitAiState.prototype.setState = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.UnitAiState.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 3)
    }
        ;
    proto.cade_api.rpc.Command.UnitAiState.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 3, t || [])
    }
        ;
    proto.cade_api.rpc.Command.UnitAiState.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 3, t, r)
    }
        ;
    proto.cade_api.rpc.Command.UnitAiState.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.Guard.repeatedFields_ = [3];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Guard.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Guard.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Guard.toObject = function (t, r) {
            var i, n = {
                targetid: S.Message.getFieldWithDefault(r, 2, 0),
                unitidsList: (i = S.Message.getRepeatedField(r, 3)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Guard.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Guard;
        return proto.cade_api.rpc.Command.Guard.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Guard.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readInt32();
                    t.setTargetid(n);
                    break;
                case 3:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Guard.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Guard.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Guard.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getTargetid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(3, i)
    }
        ;
    proto.cade_api.rpc.Command.Guard.prototype.getTargetid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.Guard.prototype.setTargetid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.Guard.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 3)
    }
        ;
    proto.cade_api.rpc.Command.Guard.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 3, t || [])
    }
        ;
    proto.cade_api.rpc.Command.Guard.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 3, t, r)
    }
        ;
    proto.cade_api.rpc.Command.Guard.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.Follow.repeatedFields_ = [3];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Follow.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Follow.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Follow.toObject = function (t, r) {
            var i, n = {
                targetid: S.Message.getFieldWithDefault(r, 2, 0),
                unitidsList: (i = S.Message.getRepeatedField(r, 3)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Follow.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Follow;
        return proto.cade_api.rpc.Command.Follow.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Follow.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readInt32();
                    t.setTargetid(n);
                    break;
                case 3:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Follow.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Follow.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Follow.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getTargetid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(3, i)
    }
        ;
    proto.cade_api.rpc.Command.Follow.prototype.getTargetid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.Follow.prototype.setTargetid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.Follow.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 3)
    }
        ;
    proto.cade_api.rpc.Command.Follow.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 3, t || [])
    }
        ;
    proto.cade_api.rpc.Command.Follow.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 3, t, r)
    }
        ;
    proto.cade_api.rpc.Command.Follow.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.Patrol.repeatedFields_ = [4, 5];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Patrol.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Patrol.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Patrol.toObject = function (t, r) {
            var i, n = {
                reset: S.Message.getBooleanFieldWithDefault(r, 3, !1),
                waypointsList: S.Message.toObjectList(r.getWaypointsList(), proto.cade_api.rpc.Command.XyFloatPoint.toObject, t),
                unitidsList: (i = S.Message.getRepeatedField(r, 5)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Patrol.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Patrol;
        return proto.cade_api.rpc.Command.Patrol.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Patrol.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 3:
                    var n = r.readBool();
                    t.setReset(n);
                    break;
                case 4:
                    var n = new proto.cade_api.rpc.Command.XyFloatPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyFloatPoint.deserializeBinaryFromReader),
                        t.addWaypoints(n);
                    break;
                case 5:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Patrol.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Patrol.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Patrol.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getReset(),
            i && r.writeBool(3, i),
            i = t.getWaypointsList(),
            i.length > 0 && r.writeRepeatedMessage(4, i, proto.cade_api.rpc.Command.XyFloatPoint.serializeBinaryToWriter),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(5, i)
    }
        ;
    proto.cade_api.rpc.Command.Patrol.prototype.getReset = function () {
        return S.Message.getBooleanFieldWithDefault(this, 3, !1)
    }
        ;
    proto.cade_api.rpc.Command.Patrol.prototype.setReset = function (t) {
        return S.Message.setProto3BooleanField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.Patrol.prototype.getWaypointsList = function () {
        return S.Message.getRepeatedWrapperField(this, proto.cade_api.rpc.Command.XyFloatPoint, 4)
    }
        ;
    proto.cade_api.rpc.Command.Patrol.prototype.setWaypointsList = function (t) {
        return S.Message.setRepeatedWrapperField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.Patrol.prototype.addWaypoints = function (t, r) {
        return S.Message.addToRepeatedWrapperField(this, 4, t, proto.cade_api.rpc.Command.XyFloatPoint, r)
    }
        ;
    proto.cade_api.rpc.Command.Patrol.prototype.clearWaypointsList = function () {
        return this.setWaypointsList([])
    }
        ;
    proto.cade_api.rpc.Command.Patrol.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 5)
    }
        ;
    proto.cade_api.rpc.Command.Patrol.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 5, t || [])
    }
        ;
    proto.cade_api.rpc.Command.Patrol.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 5, t, r)
    }
        ;
    proto.cade_api.rpc.Command.Patrol.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.Scout.repeatedFields_ = [3];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Scout.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Scout.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Scout.toObject = function (t, r) {
            var i, n = {
                location: (i = r.getLocation()) && proto.cade_api.rpc.Command.XyFloatPoint.toObject(t, i),
                unitidsList: (i = S.Message.getRepeatedField(r, 3)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Scout.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Scout;
        return proto.cade_api.rpc.Command.Scout.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Scout.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = new proto.cade_api.rpc.Command.XyFloatPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyFloatPoint.deserializeBinaryFromReader),
                        t.setLocation(n);
                    break;
                case 3:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Scout.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Scout.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Scout.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getLocation(),
            i != null && r.writeMessage(2, i, proto.cade_api.rpc.Command.XyFloatPoint.serializeBinaryToWriter),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(3, i)
    }
        ;
    proto.cade_api.rpc.Command.Scout.prototype.getLocation = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.XyFloatPoint, 2)
    }
        ;
    proto.cade_api.rpc.Command.Scout.prototype.setLocation = function (t) {
        return S.Message.setWrapperField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.Scout.prototype.clearLocation = function () {
        return this.setLocation(void 0)
    }
        ;
    proto.cade_api.rpc.Command.Scout.prototype.hasLocation = function () {
        return S.Message.getField(this, 2) != null
    }
        ;
    proto.cade_api.rpc.Command.Scout.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 3)
    }
        ;
    proto.cade_api.rpc.Command.Scout.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 3, t || [])
    }
        ;
    proto.cade_api.rpc.Command.Scout.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 3, t, r)
    }
        ;
    proto.cade_api.rpc.Command.Scout.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.FormFormation.repeatedFields_ = [4];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.FormFormation.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.FormFormation.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.FormFormation.toObject = function (t, r) {
            var i, n = {
                playerid: S.Message.getFieldWithDefault(r, 2, 0),
                formationtype: S.Message.getFieldWithDefault(r, 3, 0),
                unitidsList: (i = S.Message.getRepeatedField(r, 4)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.FormFormation.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.FormFormation;
        return proto.cade_api.rpc.Command.FormFormation.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.FormFormation.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readUint32();
                    t.setPlayerid(n);
                    break;
                case 3:
                    var n = r.readInt32();
                    t.setFormationtype(n);
                    break;
                case 4:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.FormFormation.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.FormFormation.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.FormFormation.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getPlayerid(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getFormationtype(),
            i !== 0 && r.writeInt32(3, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(4, i)
    }
        ;
    proto.cade_api.rpc.Command.FormFormation.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.FormFormation.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.FormFormation.prototype.getFormationtype = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Command.FormFormation.prototype.setFormationtype = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.FormFormation.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 4)
    }
        ;
    proto.cade_api.rpc.Command.FormFormation.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 4, t || [])
    }
        ;
    proto.cade_api.rpc.Command.FormFormation.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 4, t, r)
    }
        ;
    proto.cade_api.rpc.Command.FormFormation.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.WheelFormation.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.WheelFormation.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.WheelFormation.toObject = function (t, r) {
            var i, n = {
                formationid: S.Message.getFieldWithDefault(r, 1, 0),
                angle: S.Message.getFieldWithDefault(r, 2, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.WheelFormation.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.WheelFormation;
        return proto.cade_api.rpc.Command.WheelFormation.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.WheelFormation.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setFormationid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setAngle(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.WheelFormation.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.WheelFormation.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.WheelFormation.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getFormationid(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getAngle(),
            i !== 0 && r.writeInt32(2, i)
    }
        ;
    proto.cade_api.rpc.Command.WheelFormation.prototype.getFormationid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.WheelFormation.prototype.setFormationid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.WheelFormation.prototype.getAngle = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.WheelFormation.prototype.setAngle = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.AboutFaceFormation.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.AboutFaceFormation.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.AboutFaceFormation.toObject = function (t, r) {
            var i, n = {
                formationid: S.Message.getFieldWithDefault(r, 1, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.AboutFaceFormation.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.AboutFaceFormation;
        return proto.cade_api.rpc.Command.AboutFaceFormation.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.AboutFaceFormation.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setFormationid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.AboutFaceFormation.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.AboutFaceFormation.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.AboutFaceFormation.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getFormationid(),
            i !== 0 && r.writeInt32(1, i)
    }
        ;
    proto.cade_api.rpc.Command.AboutFaceFormation.prototype.getFormationid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.AboutFaceFormation.prototype.setFormationid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.MultiplayerSave.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.MultiplayerSave.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.MultiplayerSave.toObject = function (t, r) {
            var i, n = {
                exitaftersave: S.Message.getBooleanFieldWithDefault(r, 1, !1),
                commplayer: S.Message.getFieldWithDefault(r, 2, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.MultiplayerSave.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.MultiplayerSave;
        return proto.cade_api.rpc.Command.MultiplayerSave.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.MultiplayerSave.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readBool();
                    t.setExitaftersave(n);
                    break;
                case 2:
                    var n = r.readUint32();
                    t.setCommplayer(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.MultiplayerSave.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.MultiplayerSave.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.MultiplayerSave.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getExitaftersave(),
            i && r.writeBool(1, i),
            i = t.getCommplayer(),
            i !== 0 && r.writeUint32(2, i)
    }
        ;
    proto.cade_api.rpc.Command.MultiplayerSave.prototype.getExitaftersave = function () {
        return S.Message.getBooleanFieldWithDefault(this, 1, !1)
    }
        ;
    proto.cade_api.rpc.Command.MultiplayerSave.prototype.setExitaftersave = function (t) {
        return S.Message.setProto3BooleanField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.MultiplayerSave.prototype.getCommplayer = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.MultiplayerSave.prototype.setCommplayer = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.GroupMultiWaypoints.repeatedFields_ = [3, 4];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.GroupMultiWaypoints.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.GroupMultiWaypoints.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.GroupMultiWaypoints.toObject = function (t, r) {
            var i, n = {
                unitidsList: (i = S.Message.getRepeatedField(r, 3)) == null ? void 0 : i,
                waypointsList: S.Message.toObjectList(r.getWaypointsList(), proto.cade_api.rpc.Command.XyUintPoint.toObject, t)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.GroupMultiWaypoints.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.GroupMultiWaypoints;
        return proto.cade_api.rpc.Command.GroupMultiWaypoints.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.GroupMultiWaypoints.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 3:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                case 4:
                    var n = new proto.cade_api.rpc.Command.XyUintPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyUintPoint.deserializeBinaryFromReader),
                        t.addWaypoints(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.GroupMultiWaypoints.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.GroupMultiWaypoints.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.GroupMultiWaypoints.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(3, i),
            i = t.getWaypointsList(),
            i.length > 0 && r.writeRepeatedMessage(4, i, proto.cade_api.rpc.Command.XyUintPoint.serializeBinaryToWriter)
    }
        ;
    proto.cade_api.rpc.Command.GroupMultiWaypoints.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 3)
    }
        ;
    proto.cade_api.rpc.Command.GroupMultiWaypoints.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 3, t || [])
    }
        ;
    proto.cade_api.rpc.Command.GroupMultiWaypoints.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 3, t, r)
    }
        ;
    proto.cade_api.rpc.Command.GroupMultiWaypoints.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.GroupMultiWaypoints.prototype.getWaypointsList = function () {
        return S.Message.getRepeatedWrapperField(this, proto.cade_api.rpc.Command.XyUintPoint, 4)
    }
        ;
    proto.cade_api.rpc.Command.GroupMultiWaypoints.prototype.setWaypointsList = function (t) {
        return S.Message.setRepeatedWrapperField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.GroupMultiWaypoints.prototype.addWaypoints = function (t, r) {
        return S.Message.addToRepeatedWrapperField(this, 4, t, proto.cade_api.rpc.Command.XyUintPoint, r)
    }
        ;
    proto.cade_api.rpc.Command.GroupMultiWaypoints.prototype.clearWaypointsList = function () {
        return this.setWaypointsList([])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Chapter.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Chapter.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Chapter.toObject = function (t, r) {
            var i, n = {
                commplayerid: S.Message.getFieldWithDefault(r, 1, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Chapter.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Chapter;
        return proto.cade_api.rpc.Command.Chapter.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Chapter.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setCommplayerid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Chapter.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Chapter.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Chapter.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getCommplayerid(),
            i !== 0 && r.writeUint32(1, i)
    }
        ;
    proto.cade_api.rpc.Command.Chapter.prototype.getCommplayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.Chapter.prototype.setCommplayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.AttackMove.repeatedFields_ = [4, 5];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.AttackMove.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.AttackMove.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.AttackMove.toObject = function (t, r) {
            var i, n = {
                reset: S.Message.getBooleanFieldWithDefault(r, 3, !1),
                waypointsList: S.Message.toObjectList(r.getWaypointsList(), proto.cade_api.rpc.Command.XyFloatPoint.toObject, t),
                unitidsList: (i = S.Message.getRepeatedField(r, 5)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.AttackMove.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.AttackMove;
        return proto.cade_api.rpc.Command.AttackMove.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.AttackMove.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 3:
                    var n = r.readBool();
                    t.setReset(n);
                    break;
                case 4:
                    var n = new proto.cade_api.rpc.Command.XyFloatPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyFloatPoint.deserializeBinaryFromReader),
                        t.addWaypoints(n);
                    break;
                case 5:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.AttackMove.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.AttackMove.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.AttackMove.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getReset(),
            i && r.writeBool(3, i),
            i = t.getWaypointsList(),
            i.length > 0 && r.writeRepeatedMessage(4, i, proto.cade_api.rpc.Command.XyFloatPoint.serializeBinaryToWriter),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(5, i)
    }
        ;
    proto.cade_api.rpc.Command.AttackMove.prototype.getReset = function () {
        return S.Message.getBooleanFieldWithDefault(this, 3, !1)
    }
        ;
    proto.cade_api.rpc.Command.AttackMove.prototype.setReset = function (t) {
        return S.Message.setProto3BooleanField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.AttackMove.prototype.getWaypointsList = function () {
        return S.Message.getRepeatedWrapperField(this, proto.cade_api.rpc.Command.XyFloatPoint, 4)
    }
        ;
    proto.cade_api.rpc.Command.AttackMove.prototype.setWaypointsList = function (t) {
        return S.Message.setRepeatedWrapperField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.AttackMove.prototype.addWaypoints = function (t, r) {
        return S.Message.addToRepeatedWrapperField(this, 4, t, proto.cade_api.rpc.Command.XyFloatPoint, r)
    }
        ;
    proto.cade_api.rpc.Command.AttackMove.prototype.clearWaypointsList = function () {
        return this.setWaypointsList([])
    }
        ;
    proto.cade_api.rpc.Command.AttackMove.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 5)
    }
        ;
    proto.cade_api.rpc.Command.AttackMove.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 5, t || [])
    }
        ;
    proto.cade_api.rpc.Command.AttackMove.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 5, t, r)
    }
        ;
    proto.cade_api.rpc.Command.AttackMove.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.AttackMoveTarget.repeatedFields_ = [4, 5];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.AttackMoveTarget.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.AttackMoveTarget.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.AttackMoveTarget.toObject = function (t, r) {
            var i, n = {
                targetid: S.Message.getFieldWithDefault(r, 2, 0),
                waypointsList: S.Message.toObjectList(r.getWaypointsList(), proto.cade_api.rpc.Command.XyFloatPoint.toObject, t),
                unitidsList: (i = S.Message.getRepeatedField(r, 5)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.AttackMoveTarget.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.AttackMoveTarget;
        return proto.cade_api.rpc.Command.AttackMoveTarget.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.AttackMoveTarget.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readInt32();
                    t.setTargetid(n);
                    break;
                case 4:
                    var n = new proto.cade_api.rpc.Command.XyFloatPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyFloatPoint.deserializeBinaryFromReader),
                        t.addWaypoints(n);
                    break;
                case 5:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.AttackMoveTarget.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.AttackMoveTarget.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.AttackMoveTarget.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getTargetid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getWaypointsList(),
            i.length > 0 && r.writeRepeatedMessage(4, i, proto.cade_api.rpc.Command.XyFloatPoint.serializeBinaryToWriter),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(5, i)
    }
        ;
    proto.cade_api.rpc.Command.AttackMoveTarget.prototype.getTargetid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.AttackMoveTarget.prototype.setTargetid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.AttackMoveTarget.prototype.getWaypointsList = function () {
        return S.Message.getRepeatedWrapperField(this, proto.cade_api.rpc.Command.XyFloatPoint, 4)
    }
        ;
    proto.cade_api.rpc.Command.AttackMoveTarget.prototype.setWaypointsList = function (t) {
        return S.Message.setRepeatedWrapperField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.AttackMoveTarget.prototype.addWaypoints = function (t, r) {
        return S.Message.addToRepeatedWrapperField(this, 4, t, proto.cade_api.rpc.Command.XyFloatPoint, r)
    }
        ;
    proto.cade_api.rpc.Command.AttackMoveTarget.prototype.clearWaypointsList = function () {
        return this.setWaypointsList([])
    }
        ;
    proto.cade_api.rpc.Command.AttackMoveTarget.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 5)
    }
        ;
    proto.cade_api.rpc.Command.AttackMoveTarget.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 5, t || [])
    }
        ;
    proto.cade_api.rpc.Command.AttackMoveTarget.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 5, t, r)
    }
        ;
    proto.cade_api.rpc.Command.AttackMoveTarget.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.Retreat.repeatedFields_ = [9];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Retreat.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Retreat.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Retreat.toObject = function (t, r) {
            var i, n = {
                commplayerid: S.Message.getFieldWithDefault(r, 1, 0),
                targetid: S.Message.getFieldWithDefault(r, 2, 0),
                location: (i = r.getLocation()) && proto.cade_api.rpc.Command.XyFloatPoint.toObject(t, i),
                extend: S.Message.getBooleanFieldWithDefault(r, 5, !1),
                instant: S.Message.getBooleanFieldWithDefault(r, 6, !1),
                humanorder: S.Message.getBooleanFieldWithDefault(r, 7, !1),
                controlheld: S.Message.getBooleanFieldWithDefault(r, 8, !1),
                unitidsList: (i = S.Message.getRepeatedField(r, 9)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Retreat.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Retreat;
        return proto.cade_api.rpc.Command.Retreat.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Retreat.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setCommplayerid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setTargetid(n);
                    break;
                case 4:
                    var n = new proto.cade_api.rpc.Command.XyFloatPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyFloatPoint.deserializeBinaryFromReader),
                        t.setLocation(n);
                    break;
                case 5:
                    var n = r.readBool();
                    t.setExtend(n);
                    break;
                case 6:
                    var n = r.readBool();
                    t.setInstant(n);
                    break;
                case 7:
                    var n = r.readBool();
                    t.setHumanorder(n);
                    break;
                case 8:
                    var n = r.readBool();
                    t.setControlheld(n);
                    break;
                case 9:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Retreat.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Retreat.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Retreat.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getCommplayerid(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getTargetid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getLocation(),
            i != null && r.writeMessage(4, i, proto.cade_api.rpc.Command.XyFloatPoint.serializeBinaryToWriter),
            i = t.getExtend(),
            i && r.writeBool(5, i),
            i = t.getInstant(),
            i && r.writeBool(6, i),
            i = t.getHumanorder(),
            i && r.writeBool(7, i),
            i = t.getControlheld(),
            i && r.writeBool(8, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(9, i)
    }
        ;
    proto.cade_api.rpc.Command.Retreat.prototype.getCommplayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.Retreat.prototype.setCommplayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.Retreat.prototype.getTargetid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.Retreat.prototype.setTargetid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.Retreat.prototype.getLocation = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.XyFloatPoint, 4)
    }
        ;
    proto.cade_api.rpc.Command.Retreat.prototype.setLocation = function (t) {
        return S.Message.setWrapperField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.Retreat.prototype.clearLocation = function () {
        return this.setLocation(void 0)
    }
        ;
    proto.cade_api.rpc.Command.Retreat.prototype.hasLocation = function () {
        return S.Message.getField(this, 4) != null
    }
        ;
    proto.cade_api.rpc.Command.Retreat.prototype.getExtend = function () {
        return S.Message.getBooleanFieldWithDefault(this, 5, !1)
    }
        ;
    proto.cade_api.rpc.Command.Retreat.prototype.setExtend = function (t) {
        return S.Message.setProto3BooleanField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.Command.Retreat.prototype.getInstant = function () {
        return S.Message.getBooleanFieldWithDefault(this, 6, !1)
    }
        ;
    proto.cade_api.rpc.Command.Retreat.prototype.setInstant = function (t) {
        return S.Message.setProto3BooleanField(this, 6, t)
    }
        ;
    proto.cade_api.rpc.Command.Retreat.prototype.getHumanorder = function () {
        return S.Message.getBooleanFieldWithDefault(this, 7, !1)
    }
        ;
    proto.cade_api.rpc.Command.Retreat.prototype.setHumanorder = function (t) {
        return S.Message.setProto3BooleanField(this, 7, t)
    }
        ;
    proto.cade_api.rpc.Command.Retreat.prototype.getControlheld = function () {
        return S.Message.getBooleanFieldWithDefault(this, 8, !1)
    }
        ;
    proto.cade_api.rpc.Command.Retreat.prototype.setControlheld = function (t) {
        return S.Message.setProto3BooleanField(this, 8, t)
    }
        ;
    proto.cade_api.rpc.Command.Retreat.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 9)
    }
        ;
    proto.cade_api.rpc.Command.Retreat.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 9, t || [])
    }
        ;
    proto.cade_api.rpc.Command.Retreat.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 9, t, r)
    }
        ;
    proto.cade_api.rpc.Command.Retreat.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.UnitTypeAiState.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.UnitTypeAiState.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.UnitTypeAiState.toObject = function (t, r) {
            var i, n = {
                state: S.Message.getFieldWithDefault(r, 2, 0),
                unittype: S.Message.getFieldWithDefault(r, 3, 0),
                playerid: S.Message.getFieldWithDefault(r, 4, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.UnitTypeAiState.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.UnitTypeAiState;
        return proto.cade_api.rpc.Command.UnitTypeAiState.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.UnitTypeAiState.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readUint32();
                    t.setState(n);
                    break;
                case 3:
                    var n = r.readInt32();
                    t.setUnittype(n);
                    break;
                case 4:
                    var n = r.readInt32();
                    t.setPlayerid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.UnitTypeAiState.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.UnitTypeAiState.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.UnitTypeAiState.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getState(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getUnittype(),
            i !== 0 && r.writeInt32(3, i),
            i = t.getPlayerid(),
            i !== 0 && r.writeInt32(4, i)
    }
        ;
    proto.cade_api.rpc.Command.UnitTypeAiState.prototype.getState = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.UnitTypeAiState.prototype.setState = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.UnitTypeAiState.prototype.getUnittype = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Command.UnitTypeAiState.prototype.setUnittype = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.UnitTypeAiState.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Command.UnitTypeAiState.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.AutoScout.repeatedFields_ = [2];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.AutoScout.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.AutoScout.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.AutoScout.toObject = function (t, r) {
            var i, n = {
                unitidsList: (i = S.Message.getRepeatedField(r, 2)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.AutoScout.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.AutoScout;
        return proto.cade_api.rpc.Command.AutoScout.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.AutoScout.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.AutoScout.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.AutoScout.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.AutoScout.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(2, i)
    }
        ;
    proto.cade_api.rpc.Command.AutoScout.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 2)
    }
        ;
    proto.cade_api.rpc.Command.AutoScout.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 2, t || [])
    }
        ;
    proto.cade_api.rpc.Command.AutoScout.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 2, t, r)
    }
        ;
    proto.cade_api.rpc.Command.AutoScout.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.StopAll.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.StopAll.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.StopAll.toObject = function (t, r) {
            var i, n = {
                playerid: S.Message.getFieldWithDefault(r, 1, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.StopAll.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.StopAll;
        return proto.cade_api.rpc.Command.StopAll.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.StopAll.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setPlayerid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.StopAll.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.StopAll.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.StopAll.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getPlayerid(),
            i !== 0 && r.writeUint32(1, i)
    }
        ;
    proto.cade_api.rpc.Command.StopAll.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.StopAll.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.MoreTechs.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.MoreTechs.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.MoreTechs.toObject = function (t, r) {
            var i, n = {
                playerid: S.Message.getFieldWithDefault(r, 1, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.MoreTechs.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.MoreTechs;
        return proto.cade_api.rpc.Command.MoreTechs.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.MoreTechs.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setPlayerid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.MoreTechs.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.MoreTechs.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.MoreTechs.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getPlayerid(),
            i !== 0 && r.writeUint32(1, i)
    }
        ;
    proto.cade_api.rpc.Command.MoreTechs.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.MoreTechs.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.TransformObject.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.TransformObject.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.TransformObject.toObject = function (t, r) {
            var i, n = {
                playerid: S.Message.getFieldWithDefault(r, 1, 0),
                masterid: S.Message.getFieldWithDefault(r, 2, 0),
                objid: S.Message.getFieldWithDefault(r, 3, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.TransformObject.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.TransformObject;
        return proto.cade_api.rpc.Command.TransformObject.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.TransformObject.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setPlayerid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setMasterid(n);
                    break;
                case 3:
                    var n = r.readInt32();
                    t.setObjid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.TransformObject.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.TransformObject.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.TransformObject.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getPlayerid(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getMasterid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getObjid(),
            i !== 0 && r.writeInt32(3, i)
    }
        ;
    proto.cade_api.rpc.Command.TransformObject.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.TransformObject.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.TransformObject.prototype.getMasterid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.TransformObject.prototype.setMasterid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.TransformObject.prototype.getObjid = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Command.TransformObject.prototype.setObjid = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Trigger.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Trigger.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Trigger.toObject = function (t, r) {
            var i, n = {
                triggerid: S.Message.getFieldWithDefault(r, 1, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Trigger.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Trigger;
        return proto.cade_api.rpc.Command.Trigger.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Trigger.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setTriggerid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Trigger.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Trigger.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Trigger.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getTriggerid(),
            i !== 0 && r.writeInt32(1, i)
    }
        ;
    proto.cade_api.rpc.Command.Trigger.prototype.getTriggerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.Trigger.prototype.setTriggerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.TransformObjects.repeatedFields_ = [1];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.TransformObjects.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.TransformObjects.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.TransformObjects.toObject = function (t, r) {
            var i, n = {
                unitidsList: (i = S.Message.getRepeatedField(r, 1)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.TransformObjects.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.TransformObjects;
        return proto.cade_api.rpc.Command.TransformObjects.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.TransformObjects.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.TransformObjects.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.TransformObjects.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.TransformObjects.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(1, i)
    }
        ;
    proto.cade_api.rpc.Command.TransformObjects.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 1)
    }
        ;
    proto.cade_api.rpc.Command.TransformObjects.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 1, t || [])
    }
        ;
    proto.cade_api.rpc.Command.TransformObjects.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 1, t, r)
    }
        ;
    proto.cade_api.rpc.Command.TransformObjects.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Make.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Make.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Make.toObject = function (t, r) {
            var i, n = {
                unitid: S.Message.getFieldWithDefault(r, 1, 0),
                unitplayerid: S.Message.getFieldWithDefault(r, 2, 0),
                objid: S.Message.getFieldWithDefault(r, 3, 0),
                uniqueid: S.Message.getFieldWithDefault(r, 4, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Make.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Make;
        return proto.cade_api.rpc.Command.Make.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Make.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setUnitid(n);
                    break;
                case 2:
                    var n = r.readUint32();
                    t.setUnitplayerid(n);
                    break;
                case 3:
                    var n = r.readInt32();
                    t.setObjid(n);
                    break;
                case 4:
                    var n = r.readInt32();
                    t.setUniqueid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Make.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Make.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Make.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getUnitid(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getUnitplayerid(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getObjid(),
            i !== 0 && r.writeInt32(3, i),
            i = t.getUniqueid(),
            i !== 0 && r.writeInt32(4, i)
    }
        ;
    proto.cade_api.rpc.Command.Make.prototype.getUnitid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.Make.prototype.setUnitid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.Make.prototype.getUnitplayerid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.Make.prototype.setUnitplayerid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.Make.prototype.getObjid = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Command.Make.prototype.setObjid = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.Make.prototype.getUniqueid = function () {
        return S.Message.getFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Command.Make.prototype.setUniqueid = function (t) {
        return S.Message.setProto3IntField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.Research.repeatedFields_ = [7];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Research.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Research.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Research.toObject = function (t, r) {
            var i, n = {
                unitid: S.Message.getFieldWithDefault(r, 1, 0),
                unitplayerid: S.Message.getFieldWithDefault(r, 2, 0),
                techid: S.Message.getFieldWithDefault(r, 4, 0),
                uniqueid: S.Message.getFieldWithDefault(r, 5, 0),
                extend: S.Message.getBooleanFieldWithDefault(r, 6, !1),
                buildingidsList: (i = S.Message.getRepeatedField(r, 7)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Research.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Research;
        return proto.cade_api.rpc.Command.Research.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Research.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setUnitid(n);
                    break;
                case 2:
                    var n = r.readUint32();
                    t.setUnitplayerid(n);
                    break;
                case 4:
                    var n = r.readInt32();
                    t.setTechid(n);
                    break;
                case 5:
                    var n = r.readInt32();
                    t.setUniqueid(n);
                    break;
                case 6:
                    var n = r.readBool();
                    t.setExtend(n);
                    break;
                case 7:
                    var n = r.readPackedInt32();
                    t.setBuildingidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Research.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Research.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Research.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getUnitid(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getUnitplayerid(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getTechid(),
            i !== 0 && r.writeInt32(4, i),
            i = t.getUniqueid(),
            i !== 0 && r.writeInt32(5, i),
            i = t.getExtend(),
            i && r.writeBool(6, i),
            i = t.getBuildingidsList(),
            i.length > 0 && r.writePackedInt32(7, i)
    }
        ;
    proto.cade_api.rpc.Command.Research.prototype.getUnitid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.Research.prototype.setUnitid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.Research.prototype.getUnitplayerid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.Research.prototype.setUnitplayerid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.Research.prototype.getTechid = function () {
        return S.Message.getFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Command.Research.prototype.setTechid = function (t) {
        return S.Message.setProto3IntField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.Research.prototype.getUniqueid = function () {
        return S.Message.getFieldWithDefault(this, 5, 0)
    }
        ;
    proto.cade_api.rpc.Command.Research.prototype.setUniqueid = function (t) {
        return S.Message.setProto3IntField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.Command.Research.prototype.getExtend = function () {
        return S.Message.getBooleanFieldWithDefault(this, 6, !1)
    }
        ;
    proto.cade_api.rpc.Command.Research.prototype.setExtend = function (t) {
        return S.Message.setProto3BooleanField(this, 6, t)
    }
        ;
    proto.cade_api.rpc.Command.Research.prototype.getBuildingidsList = function () {
        return S.Message.getRepeatedField(this, 7)
    }
        ;
    proto.cade_api.rpc.Command.Research.prototype.setBuildingidsList = function (t) {
        return S.Message.setField(this, 7, t || [])
    }
        ;
    proto.cade_api.rpc.Command.Research.prototype.addBuildingids = function (t, r) {
        return S.Message.addToRepeatedField(this, 7, t, r)
    }
        ;
    proto.cade_api.rpc.Command.Research.prototype.clearBuildingidsList = function () {
        return this.setBuildingidsList([])
    }
        ;
    proto.cade_api.rpc.Command.Build.repeatedFields_ = [10];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Build.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Build.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Build.toObject = function (t, r) {
            var i, n = {
                unitplayerid: S.Message.getFieldWithDefault(r, 2, 0),
                location: (i = r.getLocation()) && proto.cade_api.rpc.Command.XyFloatPoint.toObject(t, i),
                objid: S.Message.getFieldWithDefault(r, 4, 0),
                uniqueid: S.Message.getFieldWithDefault(r, 5, 0),
                frame: S.Message.getFieldWithDefault(r, 6, 0),
                extend: S.Message.getBooleanFieldWithDefault(r, 7, !1),
                instant: S.Message.getBooleanFieldWithDefault(r, 8, !1),
                spriteoverrideid: S.Message.getFieldWithDefault(r, 9, 0),
                unitidsList: (i = S.Message.getRepeatedField(r, 10)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Build.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Build;
        return proto.cade_api.rpc.Command.Build.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Build.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readUint32();
                    t.setUnitplayerid(n);
                    break;
                case 3:
                    var n = new proto.cade_api.rpc.Command.XyFloatPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyFloatPoint.deserializeBinaryFromReader),
                        t.setLocation(n);
                    break;
                case 4:
                    var n = r.readInt32();
                    t.setObjid(n);
                    break;
                case 5:
                    var n = r.readInt32();
                    t.setUniqueid(n);
                    break;
                case 6:
                    var n = r.readUint32();
                    t.setFrame(n);
                    break;
                case 7:
                    var n = r.readBool();
                    t.setExtend(n);
                    break;
                case 8:
                    var n = r.readBool();
                    t.setInstant(n);
                    break;
                case 9:
                    var n = r.readInt32();
                    t.setSpriteoverrideid(n);
                    break;
                case 10:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Build.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Build.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getUnitplayerid(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getLocation(),
            i != null && r.writeMessage(3, i, proto.cade_api.rpc.Command.XyFloatPoint.serializeBinaryToWriter),
            i = t.getObjid(),
            i !== 0 && r.writeInt32(4, i),
            i = t.getUniqueid(),
            i !== 0 && r.writeInt32(5, i),
            i = t.getFrame(),
            i !== 0 && r.writeUint32(6, i),
            i = t.getExtend(),
            i && r.writeBool(7, i),
            i = t.getInstant(),
            i && r.writeBool(8, i),
            i = t.getSpriteoverrideid(),
            i !== 0 && r.writeInt32(9, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(10, i)
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.getUnitplayerid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.setUnitplayerid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.getLocation = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.XyFloatPoint, 3)
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.setLocation = function (t) {
        return S.Message.setWrapperField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.clearLocation = function () {
        return this.setLocation(void 0)
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.hasLocation = function () {
        return S.Message.getField(this, 3) != null
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.getObjid = function () {
        return S.Message.getFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.setObjid = function (t) {
        return S.Message.setProto3IntField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.getUniqueid = function () {
        return S.Message.getFieldWithDefault(this, 5, 0)
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.setUniqueid = function (t) {
        return S.Message.setProto3IntField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.getFrame = function () {
        return S.Message.getFieldWithDefault(this, 6, 0)
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.setFrame = function (t) {
        return S.Message.setProto3IntField(this, 6, t)
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.getExtend = function () {
        return S.Message.getBooleanFieldWithDefault(this, 7, !1)
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.setExtend = function (t) {
        return S.Message.setProto3BooleanField(this, 7, t)
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.getInstant = function () {
        return S.Message.getBooleanFieldWithDefault(this, 8, !1)
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.setInstant = function (t) {
        return S.Message.setProto3BooleanField(this, 8, t)
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.getSpriteoverrideid = function () {
        return S.Message.getFieldWithDefault(this, 9, 0)
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.setSpriteoverrideid = function (t) {
        return S.Message.setProto3IntField(this, 9, t)
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 10)
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 10, t || [])
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 10, t, r)
    }
        ;
    proto.cade_api.rpc.Command.Build.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Game.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Game.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Game.toObject = function (t, r) {
            var i, n = {
                gamecommandid: S.Message.getFieldWithDefault(r, 1, 0),
                var1: S.Message.getFieldWithDefault(r, 2, 0),
                var2: S.Message.getFieldWithDefault(r, 3, 0),
                var3: S.Message.getFloatingPointFieldWithDefault(r, 4, 0),
                var4: S.Message.getFieldWithDefault(r, 5, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Game.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Game;
        return proto.cade_api.rpc.Command.Game.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Game.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setGamecommandid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setVar1(n);
                    break;
                case 3:
                    var n = r.readInt32();
                    t.setVar2(n);
                    break;
                case 4:
                    var n = r.readFloat();
                    t.setVar3(n);
                    break;
                case 5:
                    var n = r.readUint32();
                    t.setVar4(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Game.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Game.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Game.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getGamecommandid(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getVar1(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getVar2(),
            i !== 0 && r.writeInt32(3, i),
            i = t.getVar3(),
            i !== 0 && r.writeFloat(4, i),
            i = t.getVar4(),
            i !== 0 && r.writeUint32(5, i)
    }
        ;
    proto.cade_api.rpc.Command.Game.prototype.getGamecommandid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.Game.prototype.setGamecommandid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.Game.prototype.getVar1 = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.Game.prototype.setVar1 = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.Game.prototype.getVar2 = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Command.Game.prototype.setVar2 = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.Game.prototype.getVar3 = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Command.Game.prototype.setVar3 = function (t) {
        return S.Message.setProto3FloatField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.Game.prototype.getVar4 = function () {
        return S.Message.getFieldWithDefault(this, 5, 0)
    }
        ;
    proto.cade_api.rpc.Command.Game.prototype.setVar4 = function (t) {
        return S.Message.setProto3IntField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.Command.Explore.repeatedFields_ = [4];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Explore.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Explore.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Explore.toObject = function (t, r) {
            var i, n = {
                unitplayerid: S.Message.getFieldWithDefault(r, 2, 0),
                location: (i = r.getLocation()) && proto.cade_api.rpc.Command.XyFloatPoint.toObject(t, i),
                unitidsList: (i = S.Message.getRepeatedField(r, 4)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Explore.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Explore;
        return proto.cade_api.rpc.Command.Explore.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Explore.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readUint32();
                    t.setUnitplayerid(n);
                    break;
                case 3:
                    var n = new proto.cade_api.rpc.Command.XyFloatPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyFloatPoint.deserializeBinaryFromReader),
                        t.setLocation(n);
                    break;
                case 4:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Explore.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Explore.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Explore.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getUnitplayerid(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getLocation(),
            i != null && r.writeMessage(3, i, proto.cade_api.rpc.Command.XyFloatPoint.serializeBinaryToWriter),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(4, i)
    }
        ;
    proto.cade_api.rpc.Command.Explore.prototype.getUnitplayerid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.Explore.prototype.setUnitplayerid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.Explore.prototype.getLocation = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.XyFloatPoint, 3)
    }
        ;
    proto.cade_api.rpc.Command.Explore.prototype.setLocation = function (t) {
        return S.Message.setWrapperField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.Explore.prototype.clearLocation = function () {
        return this.setLocation(void 0)
    }
        ;
    proto.cade_api.rpc.Command.Explore.prototype.hasLocation = function () {
        return S.Message.getField(this, 3) != null
    }
        ;
    proto.cade_api.rpc.Command.Explore.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 4)
    }
        ;
    proto.cade_api.rpc.Command.Explore.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 4, t || [])
    }
        ;
    proto.cade_api.rpc.Command.Explore.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 4, t, r)
    }
        ;
    proto.cade_api.rpc.Command.Explore.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.repeatedFields_ = [9];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.BuildWall.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.BuildWall.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.BuildWall.toObject = function (t, r) {
            var i, n = {
                unitplayerid: S.Message.getFieldWithDefault(r, 2, 0),
                location1: (i = r.getLocation1()) && proto.cade_api.rpc.Command.XyUintPoint.toObject(t, i),
                location2: (i = r.getLocation2()) && proto.cade_api.rpc.Command.XyUintPoint.toObject(t, i),
                objid: S.Message.getFieldWithDefault(r, 5, 0),
                uniqueid: S.Message.getFieldWithDefault(r, 6, 0),
                extend: S.Message.getBooleanFieldWithDefault(r, 7, !1),
                instant: S.Message.getBooleanFieldWithDefault(r, 8, !1),
                unitidsList: (i = S.Message.getRepeatedField(r, 9)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.BuildWall.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.BuildWall;
        return proto.cade_api.rpc.Command.BuildWall.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readUint32();
                    t.setUnitplayerid(n);
                    break;
                case 3:
                    var n = new proto.cade_api.rpc.Command.XyUintPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyUintPoint.deserializeBinaryFromReader),
                        t.setLocation1(n);
                    break;
                case 4:
                    var n = new proto.cade_api.rpc.Command.XyUintPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyUintPoint.deserializeBinaryFromReader),
                        t.setLocation2(n);
                    break;
                case 5:
                    var n = r.readInt32();
                    t.setObjid(n);
                    break;
                case 6:
                    var n = r.readInt32();
                    t.setUniqueid(n);
                    break;
                case 7:
                    var n = r.readBool();
                    t.setExtend(n);
                    break;
                case 8:
                    var n = r.readBool();
                    t.setInstant(n);
                    break;
                case 9:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.BuildWall.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getUnitplayerid(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getLocation1(),
            i != null && r.writeMessage(3, i, proto.cade_api.rpc.Command.XyUintPoint.serializeBinaryToWriter),
            i = t.getLocation2(),
            i != null && r.writeMessage(4, i, proto.cade_api.rpc.Command.XyUintPoint.serializeBinaryToWriter),
            i = t.getObjid(),
            i !== 0 && r.writeInt32(5, i),
            i = t.getUniqueid(),
            i !== 0 && r.writeInt32(6, i),
            i = t.getExtend(),
            i && r.writeBool(7, i),
            i = t.getInstant(),
            i && r.writeBool(8, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(9, i)
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.getUnitplayerid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.setUnitplayerid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.getLocation1 = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.XyUintPoint, 3)
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.setLocation1 = function (t) {
        return S.Message.setWrapperField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.clearLocation1 = function () {
        return this.setLocation1(void 0)
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.hasLocation1 = function () {
        return S.Message.getField(this, 3) != null
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.getLocation2 = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.XyUintPoint, 4)
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.setLocation2 = function (t) {
        return S.Message.setWrapperField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.clearLocation2 = function () {
        return this.setLocation2(void 0)
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.hasLocation2 = function () {
        return S.Message.getField(this, 4) != null
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.getObjid = function () {
        return S.Message.getFieldWithDefault(this, 5, 0)
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.setObjid = function (t) {
        return S.Message.setProto3IntField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.getUniqueid = function () {
        return S.Message.getFieldWithDefault(this, 6, 0)
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.setUniqueid = function (t) {
        return S.Message.setProto3IntField(this, 6, t)
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.getExtend = function () {
        return S.Message.getBooleanFieldWithDefault(this, 7, !1)
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.setExtend = function (t) {
        return S.Message.setProto3BooleanField(this, 7, t)
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.getInstant = function () {
        return S.Message.getBooleanFieldWithDefault(this, 8, !1)
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.setInstant = function (t) {
        return S.Message.setProto3BooleanField(this, 8, t)
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 9)
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 9, t || [])
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 9, t, r)
    }
        ;
    proto.cade_api.rpc.Command.BuildWall.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.CancelBuild.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.CancelBuild.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.CancelBuild.toObject = function (t, r) {
            var i, n = {
                unitid: S.Message.getFieldWithDefault(r, 1, 0),
                unitplayerid: S.Message.getFieldWithDefault(r, 2, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.CancelBuild.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.CancelBuild;
        return proto.cade_api.rpc.Command.CancelBuild.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.CancelBuild.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setUnitid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setUnitplayerid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.CancelBuild.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.CancelBuild.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.CancelBuild.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getUnitid(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getUnitplayerid(),
            i !== 0 && r.writeInt32(2, i)
    }
        ;
    proto.cade_api.rpc.Command.CancelBuild.prototype.getUnitid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.CancelBuild.prototype.setUnitid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.CancelBuild.prototype.getUnitplayerid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.CancelBuild.prototype.setUnitplayerid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.AttackGround.repeatedFields_ = [6];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.AttackGround.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.AttackGround.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.AttackGround.toObject = function (t, r) {
            var i, n = {
                location: (i = r.getLocation()) && proto.cade_api.rpc.Command.XyFloatPoint.toObject(t, i),
                extend: S.Message.getBooleanFieldWithDefault(r, 3, !1),
                instant: S.Message.getBooleanFieldWithDefault(r, 4, !1),
                humanorder: S.Message.getBooleanFieldWithDefault(r, 5, !1),
                unitidsList: (i = S.Message.getRepeatedField(r, 6)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.AttackGround.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.AttackGround;
        return proto.cade_api.rpc.Command.AttackGround.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.AttackGround.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = new proto.cade_api.rpc.Command.XyFloatPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyFloatPoint.deserializeBinaryFromReader),
                        t.setLocation(n);
                    break;
                case 3:
                    var n = r.readBool();
                    t.setExtend(n);
                    break;
                case 4:
                    var n = r.readBool();
                    t.setInstant(n);
                    break;
                case 5:
                    var n = r.readBool();
                    t.setHumanorder(n);
                    break;
                case 6:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.AttackGround.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.AttackGround.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.AttackGround.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getLocation(),
            i != null && r.writeMessage(2, i, proto.cade_api.rpc.Command.XyFloatPoint.serializeBinaryToWriter),
            i = t.getExtend(),
            i && r.writeBool(3, i),
            i = t.getInstant(),
            i && r.writeBool(4, i),
            i = t.getHumanorder(),
            i && r.writeBool(5, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(6, i)
    }
        ;
    proto.cade_api.rpc.Command.AttackGround.prototype.getLocation = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.XyFloatPoint, 2)
    }
        ;
    proto.cade_api.rpc.Command.AttackGround.prototype.setLocation = function (t) {
        return S.Message.setWrapperField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.AttackGround.prototype.clearLocation = function () {
        return this.setLocation(void 0)
    }
        ;
    proto.cade_api.rpc.Command.AttackGround.prototype.hasLocation = function () {
        return S.Message.getField(this, 2) != null
    }
        ;
    proto.cade_api.rpc.Command.AttackGround.prototype.getExtend = function () {
        return S.Message.getBooleanFieldWithDefault(this, 3, !1)
    }
        ;
    proto.cade_api.rpc.Command.AttackGround.prototype.setExtend = function (t) {
        return S.Message.setProto3BooleanField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.AttackGround.prototype.getInstant = function () {
        return S.Message.getBooleanFieldWithDefault(this, 4, !1)
    }
        ;
    proto.cade_api.rpc.Command.AttackGround.prototype.setInstant = function (t) {
        return S.Message.setProto3BooleanField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.AttackGround.prototype.getHumanorder = function () {
        return S.Message.getBooleanFieldWithDefault(this, 5, !1)
    }
        ;
    proto.cade_api.rpc.Command.AttackGround.prototype.setHumanorder = function (t) {
        return S.Message.setProto3BooleanField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.Command.AttackGround.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 6)
    }
        ;
    proto.cade_api.rpc.Command.AttackGround.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 6, t || [])
    }
        ;
    proto.cade_api.rpc.Command.AttackGround.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 6, t, r)
    }
        ;
    proto.cade_api.rpc.Command.AttackGround.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.GiveAttribute2.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.GiveAttribute2.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.GiveAttribute2.toObject = function (t, r) {
            var i, n = {
                playerid: S.Message.getFieldWithDefault(r, 1, 0),
                toplayerid: S.Message.getFieldWithDefault(r, 2, 0),
                attrid: S.Message.getFieldWithDefault(r, 3, 0),
                attramount: S.Message.getFloatingPointFieldWithDefault(r, 4, 0),
                attrcost: S.Message.getFloatingPointFieldWithDefault(r, 5, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.GiveAttribute2.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.GiveAttribute2;
        return proto.cade_api.rpc.Command.GiveAttribute2.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttribute2.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setPlayerid(n);
                    break;
                case 2:
                    var n = r.readUint32();
                    t.setToplayerid(n);
                    break;
                case 3:
                    var n = r.readUint32();
                    t.setAttrid(n);
                    break;
                case 4:
                    var n = r.readFloat();
                    t.setAttramount(n);
                    break;
                case 5:
                    var n = r.readFloat();
                    t.setAttrcost(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.GiveAttribute2.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.GiveAttribute2.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.GiveAttribute2.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getPlayerid(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getToplayerid(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getAttrid(),
            i !== 0 && r.writeUint32(3, i),
            i = t.getAttramount(),
            i !== 0 && r.writeFloat(4, i),
            i = t.getAttrcost(),
            i !== 0 && r.writeFloat(5, i)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttribute2.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttribute2.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttribute2.prototype.getToplayerid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttribute2.prototype.setToplayerid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttribute2.prototype.getAttrid = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttribute2.prototype.setAttrid = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttribute2.prototype.getAttramount = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttribute2.prototype.setAttramount = function (t) {
        return S.Message.setProto3FloatField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttribute2.prototype.getAttrcost = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 5, 0)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttribute2.prototype.setAttrcost = function (t) {
        return S.Message.setProto3FloatField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.Command.TradeAttribute.repeatedFields_ = [3];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.TradeAttribute.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.TradeAttribute.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.TradeAttribute.toObject = function (t, r) {
            var i, n = {
                attribute: S.Message.getFieldWithDefault(r, 2, 0),
                unitidsList: (i = S.Message.getRepeatedField(r, 3)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.TradeAttribute.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.TradeAttribute;
        return proto.cade_api.rpc.Command.TradeAttribute.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.TradeAttribute.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readInt32();
                    t.setAttribute(n);
                    break;
                case 3:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.TradeAttribute.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.TradeAttribute.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.TradeAttribute.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getAttribute(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(3, i)
    }
        ;
    proto.cade_api.rpc.Command.TradeAttribute.prototype.getAttribute = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.TradeAttribute.prototype.setAttribute = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.TradeAttribute.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 3)
    }
        ;
    proto.cade_api.rpc.Command.TradeAttribute.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 3, t || [])
    }
        ;
    proto.cade_api.rpc.Command.TradeAttribute.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 3, t, r)
    }
        ;
    proto.cade_api.rpc.Command.TradeAttribute.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.Repair.repeatedFields_ = [5];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Repair.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Repair.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Repair.toObject = function (t, r) {
            var i, n = {
                targetid: S.Message.getFieldWithDefault(r, 2, 0),
                extend: S.Message.getBooleanFieldWithDefault(r, 3, !1),
                instant: S.Message.getBooleanFieldWithDefault(r, 4, !1),
                unitidsList: (i = S.Message.getRepeatedField(r, 5)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Repair.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Repair;
        return proto.cade_api.rpc.Command.Repair.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Repair.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readInt32();
                    t.setTargetid(n);
                    break;
                case 3:
                    var n = r.readBool();
                    t.setExtend(n);
                    break;
                case 4:
                    var n = r.readBool();
                    t.setInstant(n);
                    break;
                case 5:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Repair.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Repair.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Repair.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getTargetid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getExtend(),
            i && r.writeBool(3, i),
            i = t.getInstant(),
            i && r.writeBool(4, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(5, i)
    }
        ;
    proto.cade_api.rpc.Command.Repair.prototype.getTargetid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.Repair.prototype.setTargetid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.Repair.prototype.getExtend = function () {
        return S.Message.getBooleanFieldWithDefault(this, 3, !1)
    }
        ;
    proto.cade_api.rpc.Command.Repair.prototype.setExtend = function (t) {
        return S.Message.setProto3BooleanField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.Repair.prototype.getInstant = function () {
        return S.Message.getBooleanFieldWithDefault(this, 4, !1)
    }
        ;
    proto.cade_api.rpc.Command.Repair.prototype.setInstant = function (t) {
        return S.Message.setProto3BooleanField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.Repair.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 5)
    }
        ;
    proto.cade_api.rpc.Command.Repair.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 5, t || [])
    }
        ;
    proto.cade_api.rpc.Command.Repair.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 5, t, r)
    }
        ;
    proto.cade_api.rpc.Command.Repair.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.Unload.repeatedFields_ = [5];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Unload.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Unload.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Unload.toObject = function (t, r) {
            var i, n = {
                location: (i = r.getLocation()) && proto.cade_api.rpc.Command.XyFloatPoint.toObject(t, i),
                unloadflag: S.Message.getFieldWithDefault(r, 3, 0),
                unloadunittype: S.Message.getFieldWithDefault(r, 4, 0),
                unitidsList: (i = S.Message.getRepeatedField(r, 5)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Unload.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Unload;
        return proto.cade_api.rpc.Command.Unload.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Unload.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = new proto.cade_api.rpc.Command.XyFloatPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyFloatPoint.deserializeBinaryFromReader),
                        t.setLocation(n);
                    break;
                case 3:
                    var n = r.readUint32();
                    t.setUnloadflag(n);
                    break;
                case 4:
                    var n = r.readInt32();
                    t.setUnloadunittype(n);
                    break;
                case 5:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Unload.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Unload.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Unload.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getLocation(),
            i != null && r.writeMessage(2, i, proto.cade_api.rpc.Command.XyFloatPoint.serializeBinaryToWriter),
            i = t.getUnloadflag(),
            i !== 0 && r.writeUint32(3, i),
            i = t.getUnloadunittype(),
            i !== 0 && r.writeInt32(4, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(5, i)
    }
        ;
    proto.cade_api.rpc.Command.Unload.prototype.getLocation = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.XyFloatPoint, 2)
    }
        ;
    proto.cade_api.rpc.Command.Unload.prototype.setLocation = function (t) {
        return S.Message.setWrapperField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.Unload.prototype.clearLocation = function () {
        return this.setLocation(void 0)
    }
        ;
    proto.cade_api.rpc.Command.Unload.prototype.hasLocation = function () {
        return S.Message.getField(this, 2) != null
    }
        ;
    proto.cade_api.rpc.Command.Unload.prototype.getUnloadflag = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Command.Unload.prototype.setUnloadflag = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.Unload.prototype.getUnloadunittype = function () {
        return S.Message.getFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Command.Unload.prototype.setUnloadunittype = function (t) {
        return S.Message.setProto3IntField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.Unload.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 5)
    }
        ;
    proto.cade_api.rpc.Command.Unload.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 5, t || [])
    }
        ;
    proto.cade_api.rpc.Command.Unload.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 5, t, r)
    }
        ;
    proto.cade_api.rpc.Command.Unload.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Gate.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Gate.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Gate.toObject = function (t, r) {
            var i, n = {
                unitid: S.Message.getFieldWithDefault(r, 1, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Gate.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Gate;
        return proto.cade_api.rpc.Command.Gate.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Gate.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setUnitid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Gate.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Gate.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Gate.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getUnitid(),
            i !== 0 && r.writeInt32(1, i)
    }
        ;
    proto.cade_api.rpc.Command.Gate.prototype.getUnitid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.Gate.prototype.setUnitid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Flare.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Flare.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Flare.toObject = function (t, r) {
            var i, n = {
                unitid: S.Message.getFieldWithDefault(r, 1, 0),
                flareflags: r.getFlareflags_asB64(),
                location: (i = r.getLocation()) && proto.cade_api.rpc.Command.XyFloatPoint.toObject(t, i),
                playerid: S.Message.getFieldWithDefault(r, 4, 0),
                commplayerid: S.Message.getFieldWithDefault(r, 5, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Flare.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Flare;
        return proto.cade_api.rpc.Command.Flare.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Flare.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setUnitid(n);
                    break;
                case 2:
                    var n = r.readBytes();
                    t.setFlareflags(n);
                    break;
                case 3:
                    var n = new proto.cade_api.rpc.Command.XyFloatPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyFloatPoint.deserializeBinaryFromReader),
                        t.setLocation(n);
                    break;
                case 4:
                    var n = r.readUint32();
                    t.setPlayerid(n);
                    break;
                case 5:
                    var n = r.readUint32();
                    t.setCommplayerid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Flare.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Flare.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Flare.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getUnitid(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getFlareflags_asU8(),
            i.length > 0 && r.writeBytes(2, i),
            i = t.getLocation(),
            i != null && r.writeMessage(3, i, proto.cade_api.rpc.Command.XyFloatPoint.serializeBinaryToWriter),
            i = t.getPlayerid(),
            i !== 0 && r.writeUint32(4, i),
            i = t.getCommplayerid(),
            i !== 0 && r.writeUint32(5, i)
    }
        ;
    proto.cade_api.rpc.Command.Flare.prototype.getUnitid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.Flare.prototype.setUnitid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.Flare.prototype.getFlareflags = function () {
        return S.Message.getFieldWithDefault(this, 2, "")
    }
        ;
    proto.cade_api.rpc.Command.Flare.prototype.getFlareflags_asB64 = function () {
        return S.Message.bytesAsB64(this.getFlareflags())
    }
        ;
    proto.cade_api.rpc.Command.Flare.prototype.getFlareflags_asU8 = function () {
        return S.Message.bytesAsU8(this.getFlareflags())
    }
        ;
    proto.cade_api.rpc.Command.Flare.prototype.setFlareflags = function (t) {
        return S.Message.setProto3BytesField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.Flare.prototype.getLocation = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.XyFloatPoint, 3)
    }
        ;
    proto.cade_api.rpc.Command.Flare.prototype.setLocation = function (t) {
        return S.Message.setWrapperField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.Flare.prototype.clearLocation = function () {
        return this.setLocation(void 0)
    }
        ;
    proto.cade_api.rpc.Command.Flare.prototype.hasLocation = function () {
        return S.Message.getField(this, 3) != null
    }
        ;
    proto.cade_api.rpc.Command.Flare.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Command.Flare.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.Flare.prototype.getCommplayerid = function () {
        return S.Message.getFieldWithDefault(this, 5, 0)
    }
        ;
    proto.cade_api.rpc.Command.Flare.prototype.setCommplayerid = function (t) {
        return S.Message.setProto3IntField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.Command.Special.repeatedFields_ = [5];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Special.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Special.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Special.toObject = function (t, r) {
            var i, n = {
                targetid: S.Message.getFieldWithDefault(r, 1, 0),
                action: S.Message.getFieldWithDefault(r, 2, 0),
                extend: S.Message.getBooleanFieldWithDefault(r, 3, !1),
                instant: S.Message.getBooleanFieldWithDefault(r, 4, !1),
                unitidsList: (i = S.Message.getRepeatedField(r, 5)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Special.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Special;
        return proto.cade_api.rpc.Command.Special.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Special.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setTargetid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setAction(n);
                    break;
                case 3:
                    var n = r.readBool();
                    t.setExtend(n);
                    break;
                case 4:
                    var n = r.readBool();
                    t.setInstant(n);
                    break;
                case 5:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Special.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Special.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Special.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getTargetid(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getAction(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getExtend(),
            i && r.writeBool(3, i),
            i = t.getInstant(),
            i && r.writeBool(4, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(5, i)
    }
        ;
    proto.cade_api.rpc.Command.Special.prototype.getTargetid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.Special.prototype.setTargetid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.Special.prototype.getAction = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.Special.prototype.setAction = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.Special.prototype.getExtend = function () {
        return S.Message.getBooleanFieldWithDefault(this, 3, !1)
    }
        ;
    proto.cade_api.rpc.Command.Special.prototype.setExtend = function (t) {
        return S.Message.setProto3BooleanField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.Special.prototype.getInstant = function () {
        return S.Message.getBooleanFieldWithDefault(this, 4, !1)
    }
        ;
    proto.cade_api.rpc.Command.Special.prototype.setInstant = function (t) {
        return S.Message.setProto3BooleanField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.Special.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 5)
    }
        ;
    proto.cade_api.rpc.Command.Special.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 5, t || [])
    }
        ;
    proto.cade_api.rpc.Command.Special.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 5, t, r)
    }
        ;
    proto.cade_api.rpc.Command.Special.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.repeatedFields_ = [10];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.UnitOrder.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.UnitOrder.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.UnitOrder.toObject = function (t, r) {
            var i, n = {
                targetid: S.Message.getFieldWithDefault(r, 2, 0),
                action: S.Message.getFieldWithDefault(r, 3, 0),
                param: S.Message.getFieldWithDefault(r, 4, 0),
                location: (i = r.getLocation()) && proto.cade_api.rpc.Command.XyFloatPoint.toObject(t, i),
                uniqueId: S.Message.getFieldWithDefault(r, 6, 0),
                extend: S.Message.getBooleanFieldWithDefault(r, 7, !1),
                instant: S.Message.getBooleanFieldWithDefault(r, 8, !1),
                humanorder: S.Message.getBooleanFieldWithDefault(r, 9, !1),
                unitidsList: (i = S.Message.getRepeatedField(r, 10)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.UnitOrder.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.UnitOrder;
        return proto.cade_api.rpc.Command.UnitOrder.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readInt32();
                    t.setTargetid(n);
                    break;
                case 3:
                    var n = r.readUint32();
                    t.setAction(n);
                    break;
                case 4:
                    var n = r.readUint32();
                    t.setParam(n);
                    break;
                case 5:
                    var n = new proto.cade_api.rpc.Command.XyFloatPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyFloatPoint.deserializeBinaryFromReader),
                        t.setLocation(n);
                    break;
                case 6:
                    var n = r.readInt32();
                    t.setUniqueId(n);
                    break;
                case 7:
                    var n = r.readBool();
                    t.setExtend(n);
                    break;
                case 8:
                    var n = r.readBool();
                    t.setInstant(n);
                    break;
                case 9:
                    var n = r.readBool();
                    t.setHumanorder(n);
                    break;
                case 10:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.UnitOrder.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getTargetid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getAction(),
            i !== 0 && r.writeUint32(3, i),
            i = t.getParam(),
            i !== 0 && r.writeUint32(4, i),
            i = t.getLocation(),
            i != null && r.writeMessage(5, i, proto.cade_api.rpc.Command.XyFloatPoint.serializeBinaryToWriter),
            i = t.getUniqueId(),
            i !== 0 && r.writeInt32(6, i),
            i = t.getExtend(),
            i && r.writeBool(7, i),
            i = t.getInstant(),
            i && r.writeBool(8, i),
            i = t.getHumanorder(),
            i && r.writeBool(9, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(10, i)
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.getTargetid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.setTargetid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.getAction = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.setAction = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.getParam = function () {
        return S.Message.getFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.setParam = function (t) {
        return S.Message.setProto3IntField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.getLocation = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.XyFloatPoint, 5)
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.setLocation = function (t) {
        return S.Message.setWrapperField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.clearLocation = function () {
        return this.setLocation(void 0)
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.hasLocation = function () {
        return S.Message.getField(this, 5) != null
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.getUniqueId = function () {
        return S.Message.getFieldWithDefault(this, 6, 0)
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.setUniqueId = function (t) {
        return S.Message.setProto3IntField(this, 6, t)
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.getExtend = function () {
        return S.Message.getBooleanFieldWithDefault(this, 7, !1)
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.setExtend = function (t) {
        return S.Message.setProto3BooleanField(this, 7, t)
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.getInstant = function () {
        return S.Message.getBooleanFieldWithDefault(this, 8, !1)
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.setInstant = function (t) {
        return S.Message.setProto3BooleanField(this, 8, t)
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.getHumanorder = function () {
        return S.Message.getBooleanFieldWithDefault(this, 9, !1)
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.setHumanorder = function (t) {
        return S.Message.setProto3BooleanField(this, 9, t)
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 10)
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 10, t || [])
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 10, t, r)
    }
        ;
    proto.cade_api.rpc.Command.UnitOrder.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Diplomacy.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Diplomacy.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Diplomacy.toObject = function (t, r) {
            var i, n = {
                playerid1: S.Message.getFieldWithDefault(r, 1, 0),
                playerid2: S.Message.getFieldWithDefault(r, 2, 0),
                sequence: S.Message.getFieldWithDefault(r, 3, 0),
                status: S.Message.getFieldWithDefault(r, 4, 0),
                declare: S.Message.getFieldWithDefault(r, 5, 0),
                diplomacy: S.Message.getFieldWithDefault(r, 6, 0),
                intelligence: S.Message.getFieldWithDefault(r, 7, 0),
                trade: S.Message.getFieldWithDefault(r, 8, 0),
                demand: S.Message.getFieldWithDefault(r, 9, 0),
                gold: S.Message.getFieldWithDefault(r, 10, 0),
                message: S.Message.getFieldWithDefault(r, 11, "")
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Diplomacy.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Diplomacy;
        return proto.cade_api.rpc.Command.Diplomacy.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setPlayerid1(n);
                    break;
                case 2:
                    var n = r.readUint32();
                    t.setPlayerid2(n);
                    break;
                case 3:
                    var n = r.readUint32();
                    t.setSequence(n);
                    break;
                case 4:
                    var n = r.readUint32();
                    t.setStatus(n);
                    break;
                case 5:
                    var n = r.readUint32();
                    t.setDeclare(n);
                    break;
                case 6:
                    var n = r.readUint32();
                    t.setDiplomacy(n);
                    break;
                case 7:
                    var n = r.readUint32();
                    t.setIntelligence(n);
                    break;
                case 8:
                    var n = r.readUint32();
                    t.setTrade(n);
                    break;
                case 9:
                    var n = r.readUint32();
                    t.setDemand(n);
                    break;
                case 10:
                    var n = r.readInt32();
                    t.setGold(n);
                    break;
                case 11:
                    var n = r.readString();
                    t.setMessage(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Diplomacy.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getPlayerid1(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getPlayerid2(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getSequence(),
            i !== 0 && r.writeUint32(3, i),
            i = t.getStatus(),
            i !== 0 && r.writeUint32(4, i),
            i = t.getDeclare(),
            i !== 0 && r.writeUint32(5, i),
            i = t.getDiplomacy(),
            i !== 0 && r.writeUint32(6, i),
            i = t.getIntelligence(),
            i !== 0 && r.writeUint32(7, i),
            i = t.getTrade(),
            i !== 0 && r.writeUint32(8, i),
            i = t.getDemand(),
            i !== 0 && r.writeUint32(9, i),
            i = t.getGold(),
            i !== 0 && r.writeInt32(10, i),
            i = t.getMessage(),
            i.length > 0 && r.writeString(11, i)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.getPlayerid1 = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.setPlayerid1 = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.getPlayerid2 = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.setPlayerid2 = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.getSequence = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.setSequence = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.getStatus = function () {
        return S.Message.getFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.setStatus = function (t) {
        return S.Message.setProto3IntField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.getDeclare = function () {
        return S.Message.getFieldWithDefault(this, 5, 0)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.setDeclare = function (t) {
        return S.Message.setProto3IntField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.getDiplomacy = function () {
        return S.Message.getFieldWithDefault(this, 6, 0)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.setDiplomacy = function (t) {
        return S.Message.setProto3IntField(this, 6, t)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.getIntelligence = function () {
        return S.Message.getFieldWithDefault(this, 7, 0)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.setIntelligence = function (t) {
        return S.Message.setProto3IntField(this, 7, t)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.getTrade = function () {
        return S.Message.getFieldWithDefault(this, 8, 0)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.setTrade = function (t) {
        return S.Message.setProto3IntField(this, 8, t)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.getDemand = function () {
        return S.Message.getFieldWithDefault(this, 9, 0)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.setDemand = function (t) {
        return S.Message.setProto3IntField(this, 9, t)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.getGold = function () {
        return S.Message.getFieldWithDefault(this, 10, 0)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.setGold = function (t) {
        return S.Message.setProto3IntField(this, 10, t)
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.getMessage = function () {
        return S.Message.getFieldWithDefault(this, 11, "")
    }
        ;
    proto.cade_api.rpc.Command.Diplomacy.prototype.setMessage = function (t) {
        return S.Message.setProto3StringField(this, 11, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.Queue.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.Queue.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.Queue.toObject = function (t, r) {
            var i, n = {
                buildingid: S.Message.getFieldWithDefault(r, 1, 0),
                trainid: S.Message.getFieldWithDefault(r, 2, 0),
                traincount: S.Message.getFieldWithDefault(r, 3, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.Queue.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.Queue;
        return proto.cade_api.rpc.Command.Queue.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.Queue.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setBuildingid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setTrainid(n);
                    break;
                case 3:
                    var n = r.readInt32();
                    t.setTraincount(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.Queue.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.Queue.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.Queue.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getBuildingid(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getTrainid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getTraincount(),
            i !== 0 && r.writeInt32(3, i)
    }
        ;
    proto.cade_api.rpc.Command.Queue.prototype.getBuildingid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.Queue.prototype.setBuildingid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.Queue.prototype.getTrainid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.Queue.prototype.setTrainid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.Queue.prototype.getTraincount = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Command.Queue.prototype.setTraincount = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.SetGatherPoint.repeatedFields_ = [5];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.SetGatherPoint.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.SetGatherPoint.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.SetGatherPoint.toObject = function (t, r) {
            var i, n = {
                targetid: S.Message.getFieldWithDefault(r, 2, 0),
                targetmasterid: S.Message.getFieldWithDefault(r, 3, 0),
                location: (i = r.getLocation()) && proto.cade_api.rpc.Command.XyFloatPoint.toObject(t, i),
                unitidsList: (i = S.Message.getRepeatedField(r, 5)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.SetGatherPoint.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.SetGatherPoint;
        return proto.cade_api.rpc.Command.SetGatherPoint.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.SetGatherPoint.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readInt32();
                    t.setTargetid(n);
                    break;
                case 3:
                    var n = r.readInt32();
                    t.setTargetmasterid(n);
                    break;
                case 4:
                    var n = new proto.cade_api.rpc.Command.XyFloatPoint;
                    r.readMessage(n, proto.cade_api.rpc.Command.XyFloatPoint.deserializeBinaryFromReader),
                        t.setLocation(n);
                    break;
                case 5:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.SetGatherPoint.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.SetGatherPoint.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.SetGatherPoint.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getTargetid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getTargetmasterid(),
            i !== 0 && r.writeInt32(3, i),
            i = t.getLocation(),
            i != null && r.writeMessage(4, i, proto.cade_api.rpc.Command.XyFloatPoint.serializeBinaryToWriter),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(5, i)
    }
        ;
    proto.cade_api.rpc.Command.SetGatherPoint.prototype.getTargetid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.SetGatherPoint.prototype.setTargetid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.SetGatherPoint.prototype.getTargetmasterid = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Command.SetGatherPoint.prototype.setTargetmasterid = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.SetGatherPoint.prototype.getLocation = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.XyFloatPoint, 4)
    }
        ;
    proto.cade_api.rpc.Command.SetGatherPoint.prototype.setLocation = function (t) {
        return S.Message.setWrapperField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.SetGatherPoint.prototype.clearLocation = function () {
        return this.setLocation(void 0)
    }
        ;
    proto.cade_api.rpc.Command.SetGatherPoint.prototype.hasLocation = function () {
        return S.Message.getField(this, 4) != null
    }
        ;
    proto.cade_api.rpc.Command.SetGatherPoint.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 5)
    }
        ;
    proto.cade_api.rpc.Command.SetGatherPoint.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 5, t || [])
    }
        ;
    proto.cade_api.rpc.Command.SetGatherPoint.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 5, t, r)
    }
        ;
    proto.cade_api.rpc.Command.SetGatherPoint.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.SetRetreatPoint.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.SetRetreatPoint.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.SetRetreatPoint.toObject = function (t, r) {
            var i, n = {
                unitid: S.Message.getFieldWithDefault(r, 1, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.SetRetreatPoint.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.SetRetreatPoint;
        return proto.cade_api.rpc.Command.SetRetreatPoint.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.SetRetreatPoint.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setUnitid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.SetRetreatPoint.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.SetRetreatPoint.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.SetRetreatPoint.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getUnitid(),
            i !== 0 && r.writeInt32(1, i)
    }
        ;
    proto.cade_api.rpc.Command.SetRetreatPoint.prototype.getUnitid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.SetRetreatPoint.prototype.setUnitid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.SellCommodity.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.SellCommodity.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.SellCommodity.toObject = function (t, r) {
            var i, n = {
                playerid: S.Message.getFieldWithDefault(r, 1, 0),
                attrid: S.Message.getFieldWithDefault(r, 2, 0),
                lotcount: S.Message.getFieldWithDefault(r, 3, 0),
                unitid: S.Message.getFieldWithDefault(r, 4, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.SellCommodity.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.SellCommodity;
        return proto.cade_api.rpc.Command.SellCommodity.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.SellCommodity.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setPlayerid(n);
                    break;
                case 2:
                    var n = r.readUint32();
                    t.setAttrid(n);
                    break;
                case 3:
                    var n = r.readUint32();
                    t.setLotcount(n);
                    break;
                case 4:
                    var n = r.readInt32();
                    t.setUnitid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.SellCommodity.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.SellCommodity.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.SellCommodity.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getPlayerid(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getAttrid(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getLotcount(),
            i !== 0 && r.writeUint32(3, i),
            i = t.getUnitid(),
            i !== 0 && r.writeInt32(4, i)
    }
        ;
    proto.cade_api.rpc.Command.SellCommodity.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.SellCommodity.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.SellCommodity.prototype.getAttrid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.SellCommodity.prototype.setAttrid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.SellCommodity.prototype.getLotcount = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Command.SellCommodity.prototype.setLotcount = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.SellCommodity.prototype.getUnitid = function () {
        return S.Message.getFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Command.SellCommodity.prototype.setUnitid = function (t) {
        return S.Message.setProto3IntField(this, 4, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.BuyCommodity.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.BuyCommodity.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.BuyCommodity.toObject = function (t, r) {
            var i, n = {
                playerid: S.Message.getFieldWithDefault(r, 1, 0),
                attrid: S.Message.getFieldWithDefault(r, 2, 0),
                lotcount: S.Message.getFieldWithDefault(r, 3, 0),
                unitid: S.Message.getFieldWithDefault(r, 4, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.BuyCommodity.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.BuyCommodity;
        return proto.cade_api.rpc.Command.BuyCommodity.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.BuyCommodity.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setPlayerid(n);
                    break;
                case 2:
                    var n = r.readUint32();
                    t.setAttrid(n);
                    break;
                case 3:
                    var n = r.readUint32();
                    t.setLotcount(n);
                    break;
                case 4:
                    var n = r.readInt32();
                    t.setUnitid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.BuyCommodity.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.BuyCommodity.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.BuyCommodity.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getPlayerid(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getAttrid(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getLotcount(),
            i !== 0 && r.writeUint32(3, i),
            i = t.getUnitid(),
            i !== 0 && r.writeInt32(4, i)
    }
        ;
    proto.cade_api.rpc.Command.BuyCommodity.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.BuyCommodity.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.BuyCommodity.prototype.getAttrid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.BuyCommodity.prototype.setAttrid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.BuyCommodity.prototype.getLotcount = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Command.BuyCommodity.prototype.setLotcount = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.BuyCommodity.prototype.getUnitid = function () {
        return S.Message.getFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Command.BuyCommodity.prototype.setUnitid = function (t) {
        return S.Message.setProto3IntField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.UnitTransform.repeatedFields_ = [5];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.UnitTransform.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.UnitTransform.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.UnitTransform.toObject = function (t, r) {
            var i, n = {
                unitplayerid: S.Message.getFieldWithDefault(r, 2, 0),
                objid: S.Message.getFieldWithDefault(r, 3, 0),
                uniqueid: S.Message.getFieldWithDefault(r, 4, 0),
                unitidsList: (i = S.Message.getRepeatedField(r, 5)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.UnitTransform.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.UnitTransform;
        return proto.cade_api.rpc.Command.UnitTransform.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.UnitTransform.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readUint32();
                    t.setUnitplayerid(n);
                    break;
                case 3:
                    var n = r.readInt32();
                    t.setObjid(n);
                    break;
                case 4:
                    var n = r.readInt32();
                    t.setUniqueid(n);
                    break;
                case 5:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.UnitTransform.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.UnitTransform.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.UnitTransform.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getUnitplayerid(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getObjid(),
            i !== 0 && r.writeInt32(3, i),
            i = t.getUniqueid(),
            i !== 0 && r.writeInt32(4, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(5, i)
    }
        ;
    proto.cade_api.rpc.Command.UnitTransform.prototype.getUnitplayerid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.UnitTransform.prototype.setUnitplayerid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.UnitTransform.prototype.getObjid = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Command.UnitTransform.prototype.setObjid = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.UnitTransform.prototype.getUniqueid = function () {
        return S.Message.getFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Command.UnitTransform.prototype.setUniqueid = function (t) {
        return S.Message.setProto3IntField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.UnitTransform.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 5)
    }
        ;
    proto.cade_api.rpc.Command.UnitTransform.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 5, t || [])
    }
        ;
    proto.cade_api.rpc.Command.UnitTransform.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 5, t, r)
    }
        ;
    proto.cade_api.rpc.Command.UnitTransform.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.DropRelic.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.DropRelic.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.DropRelic.toObject = function (t, r) {
            var i, n = {
                unitid: S.Message.getFieldWithDefault(r, 1, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.DropRelic.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.DropRelic;
        return proto.cade_api.rpc.Command.DropRelic.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.DropRelic.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setUnitid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.DropRelic.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.DropRelic.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.DropRelic.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getUnitid(),
            i !== 0 && r.writeInt32(1, i)
    }
        ;
    proto.cade_api.rpc.Command.DropRelic.prototype.getUnitid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.DropRelic.prototype.setUnitid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.TownBell.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.TownBell.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.TownBell.toObject = function (t, r) {
            var i, n = {
                unitid: S.Message.getFieldWithDefault(r, 1, 0),
                activateflag: S.Message.getFieldWithDefault(r, 2, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.TownBell.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.TownBell;
        return proto.cade_api.rpc.Command.TownBell.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.TownBell.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setUnitid(n);
                    break;
                case 2:
                    var n = r.readUint32();
                    t.setActivateflag(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.TownBell.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.TownBell.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.TownBell.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getUnitid(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getActivateflag(),
            i !== 0 && r.writeUint32(2, i)
    }
        ;
    proto.cade_api.rpc.Command.TownBell.prototype.getUnitid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.TownBell.prototype.setUnitid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.TownBell.prototype.getActivateflag = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.TownBell.prototype.setActivateflag = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.GoBackToWork.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.GoBackToWork.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.GoBackToWork.toObject = function (t, r) {
            var i, n = {
                unitid: S.Message.getFieldWithDefault(r, 1, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.GoBackToWork.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.GoBackToWork;
        return proto.cade_api.rpc.Command.GoBackToWork.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.GoBackToWork.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setUnitid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.GoBackToWork.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.GoBackToWork.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.GoBackToWork.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getUnitid(),
            i !== 0 && r.writeInt32(1, i)
    }
        ;
    proto.cade_api.rpc.Command.GoBackToWork.prototype.getUnitid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.GoBackToWork.prototype.setUnitid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.MultiQueue.repeatedFields_ = [6];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.MultiQueue.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.MultiQueue.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.MultiQueue.toObject = function (t, r) {
            var i, n = {
                playerid: S.Message.getFieldWithDefault(r, 1, 0),
                selectedbuildingid: S.Message.getFieldWithDefault(r, 2, 0),
                trainid: S.Message.getFieldWithDefault(r, 4, 0),
                traincount: S.Message.getFieldWithDefault(r, 5, 0),
                buildingidsList: (i = S.Message.getRepeatedField(r, 6)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.MultiQueue.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.MultiQueue;
        return proto.cade_api.rpc.Command.MultiQueue.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.MultiQueue.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setPlayerid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setSelectedbuildingid(n);
                    break;
                case 4:
                    var n = r.readInt32();
                    t.setTrainid(n);
                    break;
                case 5:
                    var n = r.readInt32();
                    t.setTraincount(n);
                    break;
                case 6:
                    var n = r.readPackedInt32();
                    t.setBuildingidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.MultiQueue.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.MultiQueue.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.MultiQueue.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getPlayerid(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getSelectedbuildingid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getTrainid(),
            i !== 0 && r.writeInt32(4, i),
            i = t.getTraincount(),
            i !== 0 && r.writeInt32(5, i),
            i = t.getBuildingidsList(),
            i.length > 0 && r.writePackedInt32(6, i)
    }
        ;
    proto.cade_api.rpc.Command.MultiQueue.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.MultiQueue.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.MultiQueue.prototype.getSelectedbuildingid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.MultiQueue.prototype.setSelectedbuildingid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.MultiQueue.prototype.getTrainid = function () {
        return S.Message.getFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Command.MultiQueue.prototype.setTrainid = function (t) {
        return S.Message.setProto3IntField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.MultiQueue.prototype.getTraincount = function () {
        return S.Message.getFieldWithDefault(this, 5, 0)
    }
        ;
    proto.cade_api.rpc.Command.MultiQueue.prototype.setTraincount = function (t) {
        return S.Message.setProto3IntField(this, 5, t)
    }
        ;
    proto.cade_api.rpc.Command.MultiQueue.prototype.getBuildingidsList = function () {
        return S.Message.getRepeatedField(this, 6)
    }
        ;
    proto.cade_api.rpc.Command.MultiQueue.prototype.setBuildingidsList = function (t) {
        return S.Message.setField(this, 6, t || [])
    }
        ;
    proto.cade_api.rpc.Command.MultiQueue.prototype.addBuildingids = function (t, r) {
        return S.Message.addToRepeatedField(this, 6, t, r)
    }
        ;
    proto.cade_api.rpc.Command.MultiQueue.prototype.clearBuildingidsList = function () {
        return this.setBuildingidsList([])
    }
        ;
    proto.cade_api.rpc.Command.SetGatherState.repeatedFields_ = [3];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.SetGatherState.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.SetGatherState.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.SetGatherState.toObject = function (t, r) {
            var i, n = {
                state: S.Message.getFieldWithDefault(r, 2, 0),
                unitidsList: (i = S.Message.getRepeatedField(r, 3)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.SetGatherState.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.SetGatherState;
        return proto.cade_api.rpc.Command.SetGatherState.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.SetGatherState.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readUint32();
                    t.setState(n);
                    break;
                case 3:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.SetGatherState.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.SetGatherState.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.SetGatherState.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getState(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(3, i)
    }
        ;
    proto.cade_api.rpc.Command.SetGatherState.prototype.getState = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.SetGatherState.prototype.setState = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.SetGatherState.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 3)
    }
        ;
    proto.cade_api.rpc.Command.SetGatherState.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 3, t || [])
    }
        ;
    proto.cade_api.rpc.Command.SetGatherState.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 3, t, r)
    }
        ;
    proto.cade_api.rpc.Command.SetGatherState.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.DeleteObjects.repeatedFields_ = [3];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.DeleteObjects.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.DeleteObjects.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.DeleteObjects.toObject = function (t, r) {
            var i, n = {
                playerid: S.Message.getFieldWithDefault(r, 2, 0),
                unitidsList: (i = S.Message.getRepeatedField(r, 3)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.DeleteObjects.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.DeleteObjects;
        return proto.cade_api.rpc.Command.DeleteObjects.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.DeleteObjects.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readUint32();
                    t.setPlayerid(n);
                    break;
                case 3:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.DeleteObjects.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.DeleteObjects.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.DeleteObjects.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getPlayerid(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(3, i)
    }
        ;
    proto.cade_api.rpc.Command.DeleteObjects.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.DeleteObjects.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.DeleteObjects.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 3)
    }
        ;
    proto.cade_api.rpc.Command.DeleteObjects.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 3, t || [])
    }
        ;
    proto.cade_api.rpc.Command.DeleteObjects.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 3, t, r)
    }
        ;
    proto.cade_api.rpc.Command.DeleteObjects.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.ResetBuildings.repeatedFields_ = [3];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.ResetBuildings.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.ResetBuildings.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.ResetBuildings.toObject = function (t, r) {
            var i, n = {
                state: S.Message.getFieldWithDefault(r, 2, 0),
                unitidsList: (i = S.Message.getRepeatedField(r, 3)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.ResetBuildings.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.ResetBuildings;
        return proto.cade_api.rpc.Command.ResetBuildings.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.ResetBuildings.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readUint32();
                    t.setState(n);
                    break;
                case 3:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.ResetBuildings.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.ResetBuildings.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.ResetBuildings.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getState(),
            i !== 0 && r.writeUint32(2, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(3, i)
    }
        ;
    proto.cade_api.rpc.Command.ResetBuildings.prototype.getState = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.ResetBuildings.prototype.setState = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.ResetBuildings.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 3)
    }
        ;
    proto.cade_api.rpc.Command.ResetBuildings.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 3, t || [])
    }
        ;
    proto.cade_api.rpc.Command.ResetBuildings.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 3, t, r)
    }
        ;
    proto.cade_api.rpc.Command.ResetBuildings.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.MultiGate.repeatedFields_ = [3];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.MultiGate.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.MultiGate.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.MultiGate.toObject = function (t, r) {
            var i, n = {
                state: S.Message.getFieldWithDefault(r, 1, 0),
                unitidsList: (i = S.Message.getRepeatedField(r, 3)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.MultiGate.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.MultiGate;
        return proto.cade_api.rpc.Command.MultiGate.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.MultiGate.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setState(n);
                    break;
                case 3:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.MultiGate.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.MultiGate.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.MultiGate.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getState(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(3, i)
    }
        ;
    proto.cade_api.rpc.Command.MultiGate.prototype.getState = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.MultiGate.prototype.setState = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.MultiGate.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 3)
    }
        ;
    proto.cade_api.rpc.Command.MultiGate.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 3, t || [])
    }
        ;
    proto.cade_api.rpc.Command.MultiGate.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 3, t, r)
    }
        ;
    proto.cade_api.rpc.Command.MultiGate.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    proto.cade_api.rpc.Command.GoBackToWork2.repeatedFields_ = [2];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.GoBackToWork2.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.GoBackToWork2.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.GoBackToWork2.toObject = function (t, r) {
            var i, n = {
                unitidsList: (i = S.Message.getRepeatedField(r, 2)) == null ? void 0 : i
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.GoBackToWork2.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.GoBackToWork2;
        return proto.cade_api.rpc.Command.GoBackToWork2.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.GoBackToWork2.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 2:
                    var n = r.readPackedInt32();
                    t.setUnitidsList(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.GoBackToWork2.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.GoBackToWork2.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.GoBackToWork2.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getUnitidsList(),
            i.length > 0 && r.writePackedInt32(2, i)
    }
        ;
    proto.cade_api.rpc.Command.GoBackToWork2.prototype.getUnitidsList = function () {
        return S.Message.getRepeatedField(this, 2)
    }
        ;
    proto.cade_api.rpc.Command.GoBackToWork2.prototype.setUnitidsList = function (t) {
        return S.Message.setField(this, 2, t || [])
    }
        ;
    proto.cade_api.rpc.Command.GoBackToWork2.prototype.addUnitids = function (t, r) {
        return S.Message.addToRepeatedField(this, 2, t, r)
    }
        ;
    proto.cade_api.rpc.Command.GoBackToWork2.prototype.clearUnitidsList = function () {
        return this.setUnitidsList([])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.ChangePlayerName.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.ChangePlayerName.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.ChangePlayerName.toObject = function (t, r) {
            var i, n = {
                playerid: S.Message.getFieldWithDefault(r, 1, 0),
                newname: S.Message.getFieldWithDefault(r, 2, "")
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.ChangePlayerName.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.ChangePlayerName;
        return proto.cade_api.rpc.Command.ChangePlayerName.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.ChangePlayerName.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setPlayerid(n);
                    break;
                case 2:
                    var n = r.readString();
                    t.setNewname(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.ChangePlayerName.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.ChangePlayerName.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.ChangePlayerName.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getPlayerid(),
            i !== 0 && r.writeUint32(1, i),
            i = t.getNewname(),
            i.length > 0 && r.writeString(2, i)
    }
        ;
    proto.cade_api.rpc.Command.ChangePlayerName.prototype.getPlayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.ChangePlayerName.prototype.setPlayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.ChangePlayerName.prototype.getNewname = function () {
        return S.Message.getFieldWithDefault(this, 2, "")
    }
        ;
    proto.cade_api.rpc.Command.ChangePlayerName.prototype.setNewname = function (t) {
        return S.Message.setProto3StringField(this, 2, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.SendAiSignal.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.SendAiSignal.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.SendAiSignal.toObject = function (t, r) {
            var i, n = {
                signalid: S.Message.getFieldWithDefault(r, 1, 0),
                value: S.Message.getFieldWithDefault(r, 2, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.SendAiSignal.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.SendAiSignal;
        return proto.cade_api.rpc.Command.SendAiSignal.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.SendAiSignal.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setSignalid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setValue(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.SendAiSignal.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.SendAiSignal.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.SendAiSignal.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getSignalid(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getValue(),
            i !== 0 && r.writeInt32(2, i)
    }
        ;
    proto.cade_api.rpc.Command.SendAiSignal.prototype.getSignalid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.SendAiSignal.prototype.setSignalid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.SendAiSignal.prototype.getValue = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.SendAiSignal.prototype.setValue = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.AiEffectAmount.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.AiEffectAmount.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.AiEffectAmount.toObject = function (t, r) {
            var i, n = {
                effecttype: S.Message.getFieldWithDefault(r, 1, 0),
                unitortechid: S.Message.getFieldWithDefault(r, 2, 0),
                attributetype: S.Message.getFieldWithDefault(r, 3, 0),
                value: S.Message.getFloatingPointFieldWithDefault(r, 4, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.AiEffectAmount.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.AiEffectAmount;
        return proto.cade_api.rpc.Command.AiEffectAmount.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.AiEffectAmount.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setEffecttype(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setUnitortechid(n);
                    break;
                case 3:
                    var n = r.readInt32();
                    t.setAttributetype(n);
                    break;
                case 4:
                    var n = r.readFloat();
                    t.setValue(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.AiEffectAmount.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.AiEffectAmount.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.AiEffectAmount.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getEffecttype(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getUnitortechid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getAttributetype(),
            i !== 0 && r.writeInt32(3, i),
            i = t.getValue(),
            i !== 0 && r.writeFloat(4, i)
    }
        ;
    proto.cade_api.rpc.Command.AiEffectAmount.prototype.getEffecttype = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.AiEffectAmount.prototype.setEffecttype = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.AiEffectAmount.prototype.getUnitortechid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.AiEffectAmount.prototype.setUnitortechid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.AiEffectAmount.prototype.getAttributetype = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Command.AiEffectAmount.prototype.setAttributetype = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.AiEffectAmount.prototype.getValue = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Command.AiEffectAmount.prototype.setValue = function (t) {
        return S.Message.setProto3FloatField(this, 4, t)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.AiEffectPercent.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.AiEffectPercent.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.AiEffectPercent.toObject = function (t, r) {
            var i, n = {
                effecttype: S.Message.getFieldWithDefault(r, 1, 0),
                unitortechid: S.Message.getFieldWithDefault(r, 2, 0),
                attributetype: S.Message.getFieldWithDefault(r, 3, 0),
                value: S.Message.getFloatingPointFieldWithDefault(r, 4, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.AiEffectPercent.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.AiEffectPercent;
        return proto.cade_api.rpc.Command.AiEffectPercent.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.AiEffectPercent.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setEffecttype(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setUnitortechid(n);
                    break;
                case 3:
                    var n = r.readInt32();
                    t.setAttributetype(n);
                    break;
                case 4:
                    var n = r.readFloat();
                    t.setValue(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.AiEffectPercent.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.AiEffectPercent.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.AiEffectPercent.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getEffecttype(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getUnitortechid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getAttributetype(),
            i !== 0 && r.writeInt32(3, i),
            i = t.getValue(),
            i !== 0 && r.writeFloat(4, i)
    }
        ;
    proto.cade_api.rpc.Command.AiEffectPercent.prototype.getEffecttype = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.AiEffectPercent.prototype.setEffecttype = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.AiEffectPercent.prototype.getUnitortechid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.AiEffectPercent.prototype.setUnitortechid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.AiEffectPercent.prototype.getAttributetype = function () {
        return S.Message.getFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Command.AiEffectPercent.prototype.setAttributetype = function (t) {
        return S.Message.setProto3IntField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.AiEffectPercent.prototype.getValue = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 4, 0)
    }
        ;
    proto.cade_api.rpc.Command.AiEffectPercent.prototype.setValue = function (t) {
        return S.Message.setProto3FloatField(this, 4, t)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttributes.repeatedFields_ = [3];
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.GiveAttributes.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.GiveAttributes.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.GiveAttributes.toObject = function (t, r) {
            var i, n = {
                fromplayerid: S.Message.getFieldWithDefault(r, 1, 0),
                toplayerid: S.Message.getFieldWithDefault(r, 2, 0),
                attributesList: S.Message.toObjectList(r.getAttributesList(), proto.cade_api.rpc.Command.GiveAttributes.Attribute.toObject, t)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.GiveAttributes.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.GiveAttributes;
        return proto.cade_api.rpc.Command.GiveAttributes.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttributes.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setFromplayerid(n);
                    break;
                case 2:
                    var n = r.readInt32();
                    t.setToplayerid(n);
                    break;
                case 3:
                    var n = new proto.cade_api.rpc.Command.GiveAttributes.Attribute;
                    r.readMessage(n, proto.cade_api.rpc.Command.GiveAttributes.Attribute.deserializeBinaryFromReader),
                        t.addAttributes(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.GiveAttributes.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.GiveAttributes.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.GiveAttributes.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getFromplayerid(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getToplayerid(),
            i !== 0 && r.writeInt32(2, i),
            i = t.getAttributesList(),
            i.length > 0 && r.writeRepeatedMessage(3, i, proto.cade_api.rpc.Command.GiveAttributes.Attribute.serializeBinaryToWriter)
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.GiveAttributes.Attribute.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.GiveAttributes.Attribute.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.GiveAttributes.Attribute.toObject = function (t, r) {
            var i, n = {
                id: S.Message.getFieldWithDefault(r, 1, 0),
                amount: S.Message.getFloatingPointFieldWithDefault(r, 2, 0),
                cost: S.Message.getFloatingPointFieldWithDefault(r, 3, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.GiveAttributes.Attribute.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.GiveAttributes.Attribute;
        return proto.cade_api.rpc.Command.GiveAttributes.Attribute.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttributes.Attribute.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readInt32();
                    t.setId(n);
                    break;
                case 2:
                    var n = r.readFloat();
                    t.setAmount(n);
                    break;
                case 3:
                    var n = r.readFloat();
                    t.setCost(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.GiveAttributes.Attribute.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.GiveAttributes.Attribute.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.GiveAttributes.Attribute.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getId(),
            i !== 0 && r.writeInt32(1, i),
            i = t.getAmount(),
            i !== 0 && r.writeFloat(2, i),
            i = t.getCost(),
            i !== 0 && r.writeFloat(3, i)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttributes.Attribute.prototype.getId = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttributes.Attribute.prototype.setId = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttributes.Attribute.prototype.getAmount = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttributes.Attribute.prototype.setAmount = function (t) {
        return S.Message.setProto3FloatField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttributes.Attribute.prototype.getCost = function () {
        return S.Message.getFloatingPointFieldWithDefault(this, 3, 0)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttributes.Attribute.prototype.setCost = function (t) {
        return S.Message.setProto3FloatField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttributes.prototype.getFromplayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttributes.prototype.setFromplayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttributes.prototype.getToplayerid = function () {
        return S.Message.getFieldWithDefault(this, 2, 0)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttributes.prototype.setToplayerid = function (t) {
        return S.Message.setProto3IntField(this, 2, t)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttributes.prototype.getAttributesList = function () {
        return S.Message.getRepeatedWrapperField(this, proto.cade_api.rpc.Command.GiveAttributes.Attribute, 3)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttributes.prototype.setAttributesList = function (t) {
        return S.Message.setRepeatedWrapperField(this, 3, t)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttributes.prototype.addAttributes = function (t, r) {
        return S.Message.addToRepeatedWrapperField(this, 3, t, proto.cade_api.rpc.Command.GiveAttributes.Attribute, r)
    }
        ;
    proto.cade_api.rpc.Command.GiveAttributes.prototype.clearAttributesList = function () {
        return this.setAttributesList([])
    }
        ;
    S.Message.GENERATE_TO_OBJECT && (proto.cade_api.rpc.Command.UnknownCommand.prototype.toObject = function (t) {
        return proto.cade_api.rpc.Command.UnknownCommand.toObject(t, this)
    }
        ,
        proto.cade_api.rpc.Command.UnknownCommand.toObject = function (t, r) {
            var i, n = {
                commandid: S.Message.getFieldWithDefault(r, 1, 0)
            };
            return t && (n.$jspbMessageInstance = r),
                n
        }
    );
    proto.cade_api.rpc.Command.UnknownCommand.deserializeBinary = function (t) {
        var r = new S.BinaryReader(t)
            , i = new proto.cade_api.rpc.Command.UnknownCommand;
        return proto.cade_api.rpc.Command.UnknownCommand.deserializeBinaryFromReader(i, r)
    }
        ;
    proto.cade_api.rpc.Command.UnknownCommand.deserializeBinaryFromReader = function (t, r) {
        for (; r.nextField() && !r.isEndGroup();) {
            var i = r.getFieldNumber();
            switch (i) {
                case 1:
                    var n = r.readUint32();
                    t.setCommandid(n);
                    break;
                default:
                    r.skipField();
                    break
            }
        }
        return t
    }
        ;
    proto.cade_api.rpc.Command.UnknownCommand.prototype.serializeBinary = function () {
        var t = new S.BinaryWriter;
        return proto.cade_api.rpc.Command.UnknownCommand.serializeBinaryToWriter(this, t),
            t.getResultBuffer()
    }
        ;
    proto.cade_api.rpc.Command.UnknownCommand.serializeBinaryToWriter = function (t, r) {
        var i = void 0;
        i = t.getCommandid(),
            i !== 0 && r.writeUint32(1, i)
    }
        ;
    proto.cade_api.rpc.Command.UnknownCommand.prototype.getCommandid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.UnknownCommand.prototype.setCommandid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.getCommplayerid = function () {
        return S.Message.getFieldWithDefault(this, 1, 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setCommplayerid = function (t) {
        return S.Message.setProto3IntField(this, 1, t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.getInteract = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Interact, 1e3)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setInteract = function (t) {
        return S.Message.setOneofWrapperField(this, 1e3, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearInteract = function () {
        return this.setInteract(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasInteract = function () {
        return S.Message.getField(this, 1e3) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getStop = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Stop, 1001)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setStop = function (t) {
        return S.Message.setOneofWrapperField(this, 1001, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearStop = function () {
        return this.setStop(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasStop = function () {
        return S.Message.getField(this, 1001) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getWork = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Work, 1002)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setWork = function (t) {
        return S.Message.setOneofWrapperField(this, 1002, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearWork = function () {
        return this.setWork(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasWork = function () {
        return S.Message.getField(this, 1002) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getMove = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Move, 1003)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setMove = function (t) {
        return S.Message.setOneofWrapperField(this, 1003, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearMove = function () {
        return this.setMove(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasMove = function () {
        return S.Message.getField(this, 1003) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getCreate = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Create, 1004)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setCreate = function (t) {
        return S.Message.setOneofWrapperField(this, 1004, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearCreate = function () {
        return this.setCreate(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasCreate = function () {
        return S.Message.getField(this, 1004) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getAddattribute = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.AddAttribute, 1005)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setAddattribute = function (t) {
        return S.Message.setOneofWrapperField(this, 1005, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearAddattribute = function () {
        return this.setAddattribute(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasAddattribute = function () {
        return S.Message.getField(this, 1005) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getAiorder = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.AiOrder, 1010)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setAiorder = function (t) {
        return S.Message.setOneofWrapperField(this, 1010, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearAiorder = function () {
        return this.setAiorder(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasAiorder = function () {
        return S.Message.getField(this, 1010) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getResign = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Resign, 1011)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setResign = function (t) {
        return S.Message.setOneofWrapperField(this, 1011, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearResign = function () {
        return this.setResign(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasResign = function () {
        return S.Message.getField(this, 1011) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getAddwaypoint = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.AddWaypoint, 112)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setAddwaypoint = function (t) {
        return S.Message.setOneofWrapperField(this, 112, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearAddwaypoint = function () {
        return this.setAddwaypoint(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasAddwaypoint = function () {
        return S.Message.getField(this, 112) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getPause = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Pause, 1013)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setPause = function (t) {
        return S.Message.setOneofWrapperField(this, 1013, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearPause = function () {
        return this.setPause(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasPause = function () {
        return S.Message.getField(this, 1013) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getGroupwaypoint = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.GroupWaypoint, 1016)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setGroupwaypoint = function (t) {
        return S.Message.setOneofWrapperField(this, 1016, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearGroupwaypoint = function () {
        return this.setGroupwaypoint(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasGroupwaypoint = function () {
        return S.Message.getField(this, 1016) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getGroupaiorder = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.GroupAiOrder, 1017)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setGroupaiorder = function (t) {
        return S.Message.setOneofWrapperField(this, 1017, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearGroupaiorder = function () {
        return this.setGroupaiorder(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasGroupaiorder = function () {
        return S.Message.getField(this, 1017) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getUnitaistate = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.UnitAiState, 1018)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setUnitaistate = function (t) {
        return S.Message.setOneofWrapperField(this, 1018, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearUnitaistate = function () {
        return this.setUnitaistate(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasUnitaistate = function () {
        return S.Message.getField(this, 1018) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getGuard = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Guard, 1019)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setGuard = function (t) {
        return S.Message.setOneofWrapperField(this, 1019, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearGuard = function () {
        return this.setGuard(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasGuard = function () {
        return S.Message.getField(this, 1019) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getFollow = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Follow, 1020)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setFollow = function (t) {
        return S.Message.setOneofWrapperField(this, 1020, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearFollow = function () {
        return this.setFollow(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasFollow = function () {
        return S.Message.getField(this, 1020) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getPatrol = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Patrol, 1021)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setPatrol = function (t) {
        return S.Message.setOneofWrapperField(this, 1021, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearPatrol = function () {
        return this.setPatrol(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasPatrol = function () {
        return S.Message.getField(this, 1021) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getScout = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Scout, 1022)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setScout = function (t) {
        return S.Message.setOneofWrapperField(this, 1022, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearScout = function () {
        return this.setScout(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasScout = function () {
        return S.Message.getField(this, 1022) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getFormformation = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.FormFormation, 1023)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setFormformation = function (t) {
        return S.Message.setOneofWrapperField(this, 1023, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearFormformation = function () {
        return this.setFormformation(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasFormformation = function () {
        return S.Message.getField(this, 1023) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getWheelformation = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.WheelFormation, 1025)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setWheelformation = function (t) {
        return S.Message.setOneofWrapperField(this, 1025, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearWheelformation = function () {
        return this.setWheelformation(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasWheelformation = function () {
        return S.Message.getField(this, 1025) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getAboutfaceformation = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.AboutFaceFormation, 1026)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setAboutfaceformation = function (t) {
        return S.Message.setOneofWrapperField(this, 1026, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearAboutfaceformation = function () {
        return this.setAboutfaceformation(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasAboutfaceformation = function () {
        return S.Message.getField(this, 1026) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getMultiplayersave = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.MultiplayerSave, 1027)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setMultiplayersave = function (t) {
        return S.Message.setOneofWrapperField(this, 1027, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearMultiplayersave = function () {
        return this.setMultiplayersave(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasMultiplayersave = function () {
        return S.Message.getField(this, 1027) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getGroupmultiwaypoints = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.GroupMultiWaypoints, 1031)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setGroupmultiwaypoints = function (t) {
        return S.Message.setOneofWrapperField(this, 1031, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearGroupmultiwaypoints = function () {
        return this.setGroupmultiwaypoints(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasGroupmultiwaypoints = function () {
        return S.Message.getField(this, 1031) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getChapter = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Chapter, 1032)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setChapter = function (t) {
        return S.Message.setOneofWrapperField(this, 1032, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearChapter = function () {
        return this.setChapter(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasChapter = function () {
        return S.Message.getField(this, 1032) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getAttackmove = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.AttackMove, 1033)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setAttackmove = function (t) {
        return S.Message.setOneofWrapperField(this, 1033, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearAttackmove = function () {
        return this.setAttackmove(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasAttackmove = function () {
        return S.Message.getField(this, 1033) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getAttackmovetarget = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.AttackMoveTarget, 1034)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setAttackmovetarget = function (t) {
        return S.Message.setOneofWrapperField(this, 1034, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearAttackmovetarget = function () {
        return this.setAttackmovetarget(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasAttackmovetarget = function () {
        return S.Message.getField(this, 1034) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getRetreat = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Retreat, 1035)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setRetreat = function (t) {
        return S.Message.setOneofWrapperField(this, 1035, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearRetreat = function () {
        return this.setRetreat(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasRetreat = function () {
        return S.Message.getField(this, 1035) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getUnittypeaistate = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.UnitTypeAiState, 1037)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setUnittypeaistate = function (t) {
        return S.Message.setOneofWrapperField(this, 1037, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearUnittypeaistate = function () {
        return this.setUnittypeaistate(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasUnittypeaistate = function () {
        return S.Message.getField(this, 1037) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getAutoscout = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.AutoScout, 1038)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setAutoscout = function (t) {
        return S.Message.setOneofWrapperField(this, 1038, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearAutoscout = function () {
        return this.setAutoscout(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasAutoscout = function () {
        return S.Message.getField(this, 1038) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getStopall = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.StopAll, 1039)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setStopall = function (t) {
        return S.Message.setOneofWrapperField(this, 1039, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearStopall = function () {
        return this.setStopall(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasStopall = function () {
        return S.Message.getField(this, 1039) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getMoretechs = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.MoreTechs, 1040)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setMoretechs = function (t) {
        return S.Message.setOneofWrapperField(this, 1040, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearMoretechs = function () {
        return this.setMoretechs(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasMoretechs = function () {
        return S.Message.getField(this, 1040) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getTransformobject = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.TransformObject, 1041)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setTransformobject = function (t) {
        return S.Message.setOneofWrapperField(this, 1041, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearTransformobject = function () {
        return this.setTransformobject(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasTransformobject = function () {
        return S.Message.getField(this, 1041) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getTrigger = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Trigger, 1042)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setTrigger = function (t) {
        return S.Message.setOneofWrapperField(this, 1042, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearTrigger = function () {
        return this.setTrigger(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasTrigger = function () {
        return S.Message.getField(this, 1042) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getTransformobjects = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.TransformObjects, 1043)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setTransformobjects = function (t) {
        return S.Message.setOneofWrapperField(this, 1043, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearTransformobjects = function () {
        return this.setTransformobjects(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasTransformobjects = function () {
        return S.Message.getField(this, 1043) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getMake = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Make, 1100)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setMake = function (t) {
        return S.Message.setOneofWrapperField(this, 1100, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearMake = function () {
        return this.setMake(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasMake = function () {
        return S.Message.getField(this, 1100) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getResearch = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Research, 1101)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setResearch = function (t) {
        return S.Message.setOneofWrapperField(this, 1101, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearResearch = function () {
        return this.setResearch(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasResearch = function () {
        return S.Message.getField(this, 1101) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getBuild = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Build, 1102)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setBuild = function (t) {
        return S.Message.setOneofWrapperField(this, 1102, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearBuild = function () {
        return this.setBuild(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasBuild = function () {
        return S.Message.getField(this, 1102) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getGame = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Game, 1103)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setGame = function (t) {
        return S.Message.setOneofWrapperField(this, 1103, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearGame = function () {
        return this.setGame(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasGame = function () {
        return S.Message.getField(this, 1103) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getExplore = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Explore, 1104)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setExplore = function (t) {
        return S.Message.setOneofWrapperField(this, 1104, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearExplore = function () {
        return this.setExplore(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasExplore = function () {
        return S.Message.getField(this, 1104) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getBuildwall = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.BuildWall, 1105)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setBuildwall = function (t) {
        return S.Message.setOneofWrapperField(this, 1105, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearBuildwall = function () {
        return this.setBuildwall(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasBuildwall = function () {
        return S.Message.getField(this, 1105) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getCancelbuild = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.CancelBuild, 1106)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setCancelbuild = function (t) {
        return S.Message.setOneofWrapperField(this, 1106, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearCancelbuild = function () {
        return this.setCancelbuild(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasCancelbuild = function () {
        return S.Message.getField(this, 1106) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getAttackground = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.AttackGround, 1107)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setAttackground = function (t) {
        return S.Message.setOneofWrapperField(this, 1107, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearAttackground = function () {
        return this.setAttackground(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasAttackground = function () {
        return S.Message.getField(this, 1107) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getGiveattribute2 = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.GiveAttribute2, 1108)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setGiveattribute2 = function (t) {
        return S.Message.setOneofWrapperField(this, 1108, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearGiveattribute2 = function () {
        return this.setGiveattribute2(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasGiveattribute2 = function () {
        return S.Message.getField(this, 1108) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getTradeattribute = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.TradeAttribute, 1109)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setTradeattribute = function (t) {
        return S.Message.setOneofWrapperField(this, 1109, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearTradeattribute = function () {
        return this.setTradeattribute(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasTradeattribute = function () {
        return S.Message.getField(this, 1109) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getRepair = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Repair, 1110)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setRepair = function (t) {
        return S.Message.setOneofWrapperField(this, 1110, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearRepair = function () {
        return this.setRepair(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasRepair = function () {
        return S.Message.getField(this, 1110) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getUnload = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Unload, 1111)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setUnload = function (t) {
        return S.Message.setOneofWrapperField(this, 1111, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearUnload = function () {
        return this.setUnload(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasUnload = function () {
        return S.Message.getField(this, 1111) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getGate = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Gate, 1114)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setGate = function (t) {
        return S.Message.setOneofWrapperField(this, 1114, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearGate = function () {
        return this.setGate(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasGate = function () {
        return S.Message.getField(this, 1114) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getFlare = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Flare, 1115)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setFlare = function (t) {
        return S.Message.setOneofWrapperField(this, 1115, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearFlare = function () {
        return this.setFlare(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasFlare = function () {
        return S.Message.getField(this, 1115) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getSpecial = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Special, 1116)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setSpecial = function (t) {
        return S.Message.setOneofWrapperField(this, 1116, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearSpecial = function () {
        return this.setSpecial(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasSpecial = function () {
        return S.Message.getField(this, 1116) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getUnitorder = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.UnitOrder, 1117)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setUnitorder = function (t) {
        return S.Message.setOneofWrapperField(this, 1117, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearUnitorder = function () {
        return this.setUnitorder(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasUnitorder = function () {
        return S.Message.getField(this, 1117) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getDiplomacy = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Diplomacy, 1118)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setDiplomacy = function (t) {
        return S.Message.setOneofWrapperField(this, 1118, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearDiplomacy = function () {
        return this.setDiplomacy(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasDiplomacy = function () {
        return S.Message.getField(this, 1118) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getQueue = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.Queue, 1119)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setQueue = function (t) {
        return S.Message.setOneofWrapperField(this, 1119, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearQueue = function () {
        return this.setQueue(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasQueue = function () {
        return S.Message.getField(this, 1119) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getSetgatherpoint = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.SetGatherPoint, 1120)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setSetgatherpoint = function (t) {
        return S.Message.setOneofWrapperField(this, 1120, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearSetgatherpoint = function () {
        return this.setSetgatherpoint(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasSetgatherpoint = function () {
        return S.Message.getField(this, 1120) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getSetretreatpoint = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.SetRetreatPoint, 1121)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setSetretreatpoint = function (t) {
        return S.Message.setOneofWrapperField(this, 1121, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearSetretreatpoint = function () {
        return this.setSetretreatpoint(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasSetretreatpoint = function () {
        return S.Message.getField(this, 1121) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getSellcommodity = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.SellCommodity, 1122)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setSellcommodity = function (t) {
        return S.Message.setOneofWrapperField(this, 1122, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearSellcommodity = function () {
        return this.setSellcommodity(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasSellcommodity = function () {
        return S.Message.getField(this, 1122) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getBuycommodity = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.BuyCommodity, 1123)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setBuycommodity = function (t) {
        return S.Message.setOneofWrapperField(this, 1123, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearBuycommodity = function () {
        return this.setBuycommodity(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasBuycommodity = function () {
        return S.Message.getField(this, 1123) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getUnittransform = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.UnitTransform, 1125)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setUnittransform = function (t) {
        return S.Message.setOneofWrapperField(this, 1125, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearUnittransform = function () {
        return this.setUnittransform(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasUnittransform = function () {
        return S.Message.getField(this, 1125) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getDroprelic = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.DropRelic, 1126)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setDroprelic = function (t) {
        return S.Message.setOneofWrapperField(this, 1126, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearDroprelic = function () {
        return this.setDroprelic(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasDroprelic = function () {
        return S.Message.getField(this, 1126) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getTownbell = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.TownBell, 1127)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setTownbell = function (t) {
        return S.Message.setOneofWrapperField(this, 1127, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearTownbell = function () {
        return this.setTownbell(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasTownbell = function () {
        return S.Message.getField(this, 1127) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getGobacktowork = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.GoBackToWork, 1128)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setGobacktowork = function (t) {
        return S.Message.setOneofWrapperField(this, 1128, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearGobacktowork = function () {
        return this.setGobacktowork(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasGobacktowork = function () {
        return S.Message.getField(this, 1128) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getMultiqueue = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.MultiQueue, 1129)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setMultiqueue = function (t) {
        return S.Message.setOneofWrapperField(this, 1129, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearMultiqueue = function () {
        return this.setMultiqueue(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasMultiqueue = function () {
        return S.Message.getField(this, 1129) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getSetgatherstate = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.SetGatherState, 1130)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setSetgatherstate = function (t) {
        return S.Message.setOneofWrapperField(this, 1130, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearSetgatherstate = function () {
        return this.setSetgatherstate(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasSetgatherstate = function () {
        return S.Message.getField(this, 1130) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getDeleteobjects = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.DeleteObjects, 1131)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setDeleteobjects = function (t) {
        return S.Message.setOneofWrapperField(this, 1131, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearDeleteobjects = function () {
        return this.setDeleteobjects(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasDeleteobjects = function () {
        return S.Message.getField(this, 1131) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getResetbuildings = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.ResetBuildings, 1132)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setResetbuildings = function (t) {
        return S.Message.setOneofWrapperField(this, 1132, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearResetbuildings = function () {
        return this.setResetbuildings(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasResetbuildings = function () {
        return S.Message.getField(this, 1132) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getMultigate = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.MultiGate, 1133)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setMultigate = function (t) {
        return S.Message.setOneofWrapperField(this, 1133, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearMultigate = function () {
        return this.setMultigate(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasMultigate = function () {
        return S.Message.getField(this, 1133) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getGobacktowork2 = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.GoBackToWork2, 1134)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setGobacktowork2 = function (t) {
        return S.Message.setOneofWrapperField(this, 1134, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearGobacktowork2 = function () {
        return this.setGobacktowork2(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasGobacktowork2 = function () {
        return S.Message.getField(this, 1134) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getChangeplayername = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.ChangePlayerName, 1135)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setChangeplayername = function (t) {
        return S.Message.setOneofWrapperField(this, 1135, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearChangeplayername = function () {
        return this.setChangeplayername(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasChangeplayername = function () {
        return S.Message.getField(this, 1135) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getSendaisignal = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.SendAiSignal, 1136)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setSendaisignal = function (t) {
        return S.Message.setOneofWrapperField(this, 1136, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearSendaisignal = function () {
        return this.setSendaisignal(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasSendaisignal = function () {
        return S.Message.getField(this, 1136) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getAieffectamount = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.AiEffectAmount, 1137)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setAieffectamount = function (t) {
        return S.Message.setOneofWrapperField(this, 1137, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearAieffectamount = function () {
        return this.setAieffectamount(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasAieffectamount = function () {
        return S.Message.getField(this, 1137) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getAieffectpercent = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.AiEffectPercent, 1138)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setAieffectpercent = function (t) {
        return S.Message.setOneofWrapperField(this, 1138, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearAieffectpercent = function () {
        return this.setAieffectpercent(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasAieffectpercent = function () {
        return S.Message.getField(this, 1138) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getGiveattributes = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.GiveAttributes, 1196)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setGiveattributes = function (t) {
        return S.Message.setOneofWrapperField(this, 1196, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearGiveattributes = function () {
        return this.setGiveattributes(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasGiveattributes = function () {
        return S.Message.getField(this, 1196) != null
    }
        ;
    proto.cade_api.rpc.Command.prototype.getUnknowncommand = function () {
        return S.Message.getWrapperField(this, proto.cade_api.rpc.Command.UnknownCommand, 2e3)
    }
        ;
    proto.cade_api.rpc.Command.prototype.setUnknowncommand = function (t) {
        return S.Message.setOneofWrapperField(this, 2e3, proto.cade_api.rpc.Command.oneofGroups_[0], t)
    }
        ;
    proto.cade_api.rpc.Command.prototype.clearUnknowncommand = function () {
        return this.setUnknowncommand(void 0)
    }
        ;
    proto.cade_api.rpc.Command.prototype.hasUnknowncommand = function () {
        return S.Message.getField(this, 2e3) != null
    }
        ;
    proto.cade_api.rpc.GameType = {
        UNKNOWN: 0,
        SINGLEPLAYER: 1,
        MULTIPLAYER: 2,
        REPLAYING: 3,
        SPECTATING: 4
    };
    proto.cade_api.rpc.GameState = {
        NONE: 0,
        CREATION: 1,
        PLAYING: 2,
        DONE: 3
    };
    proto.cade_api.rpc.SelectedGame = {
        SG_NONE: 0,
        EMPIRES1: 1,
        EMPIRES2: 2
    };
    re.object.extend(krt, proto.cade_api.rpc)
}
);