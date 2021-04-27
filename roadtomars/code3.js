gdjs.StartScreenCode = {};
gdjs.StartScreenCode.GDLevelDisplayObjects1= [];
gdjs.StartScreenCode.GDLevelDisplayObjects2= [];
gdjs.StartScreenCode.GDPlayer2Objects1= [];
gdjs.StartScreenCode.GDPlayer2Objects2= [];
gdjs.StartScreenCode.GDPlayerObjects1= [];
gdjs.StartScreenCode.GDPlayerObjects2= [];
gdjs.StartScreenCode.GDBulletObjects1= [];
gdjs.StartScreenCode.GDBulletObjects2= [];
gdjs.StartScreenCode.GDGameOverObjects1= [];
gdjs.StartScreenCode.GDGameOverObjects2= [];
gdjs.StartScreenCode.GDScoreDisplayObjects1= [];
gdjs.StartScreenCode.GDScoreDisplayObjects2= [];
gdjs.StartScreenCode.GDLifeDisplayObjects1= [];
gdjs.StartScreenCode.GDLifeDisplayObjects2= [];
gdjs.StartScreenCode.GDShieldObjects1= [];
gdjs.StartScreenCode.GDShieldObjects2= [];
gdjs.StartScreenCode.GDExplosionObjects1= [];
gdjs.StartScreenCode.GDExplosionObjects2= [];
gdjs.StartScreenCode.GDBlackSmokeObjects1= [];
gdjs.StartScreenCode.GDBlackSmokeObjects2= [];
gdjs.StartScreenCode.GDsecondsObjects1= [];
gdjs.StartScreenCode.GDsecondsObjects2= [];
gdjs.StartScreenCode.GDminutesObjects1= [];
gdjs.StartScreenCode.GDminutesObjects2= [];
gdjs.StartScreenCode.GDhoursObjects1= [];
gdjs.StartScreenCode.GDhoursObjects2= [];
gdjs.StartScreenCode.GDTImePlayedObjects1= [];
gdjs.StartScreenCode.GDTImePlayedObjects2= [];
gdjs.StartScreenCode.GDImmortalTextObjects1= [];
gdjs.StartScreenCode.GDImmortalTextObjects2= [];
gdjs.StartScreenCode.GDDevelopTextObjects1= [];
gdjs.StartScreenCode.GDDevelopTextObjects2= [];
gdjs.StartScreenCode.GDMuteTextObjects1= [];
gdjs.StartScreenCode.GDMuteTextObjects2= [];
gdjs.StartScreenCode.GDFPSObjects1= [];
gdjs.StartScreenCode.GDFPSObjects2= [];
gdjs.StartScreenCode.GDStatsObjects1= [];
gdjs.StartScreenCode.GDStatsObjects2= [];
gdjs.StartScreenCode.GDFPSTextObjects1= [];
gdjs.StartScreenCode.GDFPSTextObjects2= [];
gdjs.StartScreenCode.GDEnabledObjects1= [];
gdjs.StartScreenCode.GDEnabledObjects2= [];
gdjs.StartScreenCode.GDConfirmButtonObjects1= [];
gdjs.StartScreenCode.GDConfirmButtonObjects2= [];
gdjs.StartScreenCode.GDScoreTextObjects1= [];
gdjs.StartScreenCode.GDScoreTextObjects2= [];
gdjs.StartScreenCode.GDscoreboardObjects1= [];
gdjs.StartScreenCode.GDscoreboardObjects2= [];
gdjs.StartScreenCode.GDStartTypingObjects1= [];
gdjs.StartScreenCode.GDStartTypingObjects2= [];
gdjs.StartScreenCode.GDNameEntryObjects1= [];
gdjs.StartScreenCode.GDNameEntryObjects2= [];
gdjs.StartScreenCode.GDusernameObjects1= [];
gdjs.StartScreenCode.GDusernameObjects2= [];
gdjs.StartScreenCode.GDNewObjectObjects1= [];
gdjs.StartScreenCode.GDNewObjectObjects2= [];
gdjs.StartScreenCode.GDEnemyObjects1= [];
gdjs.StartScreenCode.GDEnemyObjects2= [];
gdjs.StartScreenCode.GDEnemyToPlayerObjects1= [];
gdjs.StartScreenCode.GDEnemyToPlayerObjects2= [];
gdjs.StartScreenCode.GDLethalSpaceShipObjects1= [];
gdjs.StartScreenCode.GDLethalSpaceShipObjects2= [];
gdjs.StartScreenCode.GDEnemy_95ShootObjects1= [];
gdjs.StartScreenCode.GDEnemy_95ShootObjects2= [];
gdjs.StartScreenCode.GDAlienBallObjects1= [];
gdjs.StartScreenCode.GDAlienBallObjects2= [];
gdjs.StartScreenCode.GDAlienBoostObjects1= [];
gdjs.StartScreenCode.GDAlienBoostObjects2= [];
gdjs.StartScreenCode.GDAlienObjects1= [];
gdjs.StartScreenCode.GDAlienObjects2= [];
gdjs.StartScreenCode.GDBossBulletObjects1= [];
gdjs.StartScreenCode.GDBossBulletObjects2= [];
gdjs.StartScreenCode.GDKillerShotObjects1= [];
gdjs.StartScreenCode.GDKillerShotObjects2= [];
gdjs.StartScreenCode.GDBGameObjectObjects1= [];
gdjs.StartScreenCode.GDBGameObjectObjects2= [];
gdjs.StartScreenCode.GDNewObjectObjects1= [];
gdjs.StartScreenCode.GDNewObjectObjects2= [];
gdjs.StartScreenCode.GDDevelopmentObjects1= [];
gdjs.StartScreenCode.GDDevelopmentObjects2= [];
gdjs.StartScreenCode.GDCommandsObjects1= [];
gdjs.StartScreenCode.GDCommandsObjects2= [];
gdjs.StartScreenCode.GDTitleObjects1= [];
gdjs.StartScreenCode.GDTitleObjects2= [];

gdjs.StartScreenCode.conditionTrue_0 = {val:false};
gdjs.StartScreenCode.condition0IsTrue_0 = {val:false};
gdjs.StartScreenCode.condition1IsTrue_0 = {val:false};


gdjs.StartScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.StartScreenCode.condition0IsTrue_0.val = false;
{
gdjs.StartScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.StartScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", true);
}}

}


{


gdjs.StartScreenCode.condition0IsTrue_0.val = false;
{
gdjs.StartScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 20, "countdownStart");
}if (gdjs.StartScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", true);
}}

}


};

gdjs.StartScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartScreenCode.GDLevelDisplayObjects1.length = 0;
gdjs.StartScreenCode.GDLevelDisplayObjects2.length = 0;
gdjs.StartScreenCode.GDPlayer2Objects1.length = 0;
gdjs.StartScreenCode.GDPlayer2Objects2.length = 0;
gdjs.StartScreenCode.GDPlayerObjects1.length = 0;
gdjs.StartScreenCode.GDPlayerObjects2.length = 0;
gdjs.StartScreenCode.GDBulletObjects1.length = 0;
gdjs.StartScreenCode.GDBulletObjects2.length = 0;
gdjs.StartScreenCode.GDGameOverObjects1.length = 0;
gdjs.StartScreenCode.GDGameOverObjects2.length = 0;
gdjs.StartScreenCode.GDScoreDisplayObjects1.length = 0;
gdjs.StartScreenCode.GDScoreDisplayObjects2.length = 0;
gdjs.StartScreenCode.GDLifeDisplayObjects1.length = 0;
gdjs.StartScreenCode.GDLifeDisplayObjects2.length = 0;
gdjs.StartScreenCode.GDShieldObjects1.length = 0;
gdjs.StartScreenCode.GDShieldObjects2.length = 0;
gdjs.StartScreenCode.GDExplosionObjects1.length = 0;
gdjs.StartScreenCode.GDExplosionObjects2.length = 0;
gdjs.StartScreenCode.GDBlackSmokeObjects1.length = 0;
gdjs.StartScreenCode.GDBlackSmokeObjects2.length = 0;
gdjs.StartScreenCode.GDsecondsObjects1.length = 0;
gdjs.StartScreenCode.GDsecondsObjects2.length = 0;
gdjs.StartScreenCode.GDminutesObjects1.length = 0;
gdjs.StartScreenCode.GDminutesObjects2.length = 0;
gdjs.StartScreenCode.GDhoursObjects1.length = 0;
gdjs.StartScreenCode.GDhoursObjects2.length = 0;
gdjs.StartScreenCode.GDTImePlayedObjects1.length = 0;
gdjs.StartScreenCode.GDTImePlayedObjects2.length = 0;
gdjs.StartScreenCode.GDImmortalTextObjects1.length = 0;
gdjs.StartScreenCode.GDImmortalTextObjects2.length = 0;
gdjs.StartScreenCode.GDDevelopTextObjects1.length = 0;
gdjs.StartScreenCode.GDDevelopTextObjects2.length = 0;
gdjs.StartScreenCode.GDMuteTextObjects1.length = 0;
gdjs.StartScreenCode.GDMuteTextObjects2.length = 0;
gdjs.StartScreenCode.GDFPSObjects1.length = 0;
gdjs.StartScreenCode.GDFPSObjects2.length = 0;
gdjs.StartScreenCode.GDStatsObjects1.length = 0;
gdjs.StartScreenCode.GDStatsObjects2.length = 0;
gdjs.StartScreenCode.GDFPSTextObjects1.length = 0;
gdjs.StartScreenCode.GDFPSTextObjects2.length = 0;
gdjs.StartScreenCode.GDEnabledObjects1.length = 0;
gdjs.StartScreenCode.GDEnabledObjects2.length = 0;
gdjs.StartScreenCode.GDConfirmButtonObjects1.length = 0;
gdjs.StartScreenCode.GDConfirmButtonObjects2.length = 0;
gdjs.StartScreenCode.GDScoreTextObjects1.length = 0;
gdjs.StartScreenCode.GDScoreTextObjects2.length = 0;
gdjs.StartScreenCode.GDscoreboardObjects1.length = 0;
gdjs.StartScreenCode.GDscoreboardObjects2.length = 0;
gdjs.StartScreenCode.GDStartTypingObjects1.length = 0;
gdjs.StartScreenCode.GDStartTypingObjects2.length = 0;
gdjs.StartScreenCode.GDNameEntryObjects1.length = 0;
gdjs.StartScreenCode.GDNameEntryObjects2.length = 0;
gdjs.StartScreenCode.GDusernameObjects1.length = 0;
gdjs.StartScreenCode.GDusernameObjects2.length = 0;
gdjs.StartScreenCode.GDNewObjectObjects1.length = 0;
gdjs.StartScreenCode.GDNewObjectObjects2.length = 0;
gdjs.StartScreenCode.GDEnemyObjects1.length = 0;
gdjs.StartScreenCode.GDEnemyObjects2.length = 0;
gdjs.StartScreenCode.GDEnemyToPlayerObjects1.length = 0;
gdjs.StartScreenCode.GDEnemyToPlayerObjects2.length = 0;
gdjs.StartScreenCode.GDLethalSpaceShipObjects1.length = 0;
gdjs.StartScreenCode.GDLethalSpaceShipObjects2.length = 0;
gdjs.StartScreenCode.GDEnemy_95ShootObjects1.length = 0;
gdjs.StartScreenCode.GDEnemy_95ShootObjects2.length = 0;
gdjs.StartScreenCode.GDAlienBallObjects1.length = 0;
gdjs.StartScreenCode.GDAlienBallObjects2.length = 0;
gdjs.StartScreenCode.GDAlienBoostObjects1.length = 0;
gdjs.StartScreenCode.GDAlienBoostObjects2.length = 0;
gdjs.StartScreenCode.GDAlienObjects1.length = 0;
gdjs.StartScreenCode.GDAlienObjects2.length = 0;
gdjs.StartScreenCode.GDBossBulletObjects1.length = 0;
gdjs.StartScreenCode.GDBossBulletObjects2.length = 0;
gdjs.StartScreenCode.GDKillerShotObjects1.length = 0;
gdjs.StartScreenCode.GDKillerShotObjects2.length = 0;
gdjs.StartScreenCode.GDBGameObjectObjects1.length = 0;
gdjs.StartScreenCode.GDBGameObjectObjects2.length = 0;
gdjs.StartScreenCode.GDNewObjectObjects1.length = 0;
gdjs.StartScreenCode.GDNewObjectObjects2.length = 0;
gdjs.StartScreenCode.GDDevelopmentObjects1.length = 0;
gdjs.StartScreenCode.GDDevelopmentObjects2.length = 0;
gdjs.StartScreenCode.GDCommandsObjects1.length = 0;
gdjs.StartScreenCode.GDCommandsObjects2.length = 0;
gdjs.StartScreenCode.GDTitleObjects1.length = 0;
gdjs.StartScreenCode.GDTitleObjects2.length = 0;

gdjs.StartScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['StartScreenCode'] = gdjs.StartScreenCode;
