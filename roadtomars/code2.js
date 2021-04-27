gdjs.StartScreen2Code = {};
gdjs.StartScreen2Code.GDLevelDisplayObjects1= [];
gdjs.StartScreen2Code.GDLevelDisplayObjects2= [];
gdjs.StartScreen2Code.GDPlayer2Objects1= [];
gdjs.StartScreen2Code.GDPlayer2Objects2= [];
gdjs.StartScreen2Code.GDPlayerObjects1= [];
gdjs.StartScreen2Code.GDPlayerObjects2= [];
gdjs.StartScreen2Code.GDBulletObjects1= [];
gdjs.StartScreen2Code.GDBulletObjects2= [];
gdjs.StartScreen2Code.GDGameOverObjects1= [];
gdjs.StartScreen2Code.GDGameOverObjects2= [];
gdjs.StartScreen2Code.GDScoreDisplayObjects1= [];
gdjs.StartScreen2Code.GDScoreDisplayObjects2= [];
gdjs.StartScreen2Code.GDLifeDisplayObjects1= [];
gdjs.StartScreen2Code.GDLifeDisplayObjects2= [];
gdjs.StartScreen2Code.GDShieldObjects1= [];
gdjs.StartScreen2Code.GDShieldObjects2= [];
gdjs.StartScreen2Code.GDExplosionObjects1= [];
gdjs.StartScreen2Code.GDExplosionObjects2= [];
gdjs.StartScreen2Code.GDBlackSmokeObjects1= [];
gdjs.StartScreen2Code.GDBlackSmokeObjects2= [];
gdjs.StartScreen2Code.GDsecondsObjects1= [];
gdjs.StartScreen2Code.GDsecondsObjects2= [];
gdjs.StartScreen2Code.GDminutesObjects1= [];
gdjs.StartScreen2Code.GDminutesObjects2= [];
gdjs.StartScreen2Code.GDhoursObjects1= [];
gdjs.StartScreen2Code.GDhoursObjects2= [];
gdjs.StartScreen2Code.GDTImePlayedObjects1= [];
gdjs.StartScreen2Code.GDTImePlayedObjects2= [];
gdjs.StartScreen2Code.GDImmortalTextObjects1= [];
gdjs.StartScreen2Code.GDImmortalTextObjects2= [];
gdjs.StartScreen2Code.GDDevelopTextObjects1= [];
gdjs.StartScreen2Code.GDDevelopTextObjects2= [];
gdjs.StartScreen2Code.GDMuteTextObjects1= [];
gdjs.StartScreen2Code.GDMuteTextObjects2= [];
gdjs.StartScreen2Code.GDFPSObjects1= [];
gdjs.StartScreen2Code.GDFPSObjects2= [];
gdjs.StartScreen2Code.GDStatsObjects1= [];
gdjs.StartScreen2Code.GDStatsObjects2= [];
gdjs.StartScreen2Code.GDFPSTextObjects1= [];
gdjs.StartScreen2Code.GDFPSTextObjects2= [];
gdjs.StartScreen2Code.GDEnabledObjects1= [];
gdjs.StartScreen2Code.GDEnabledObjects2= [];
gdjs.StartScreen2Code.GDConfirmButtonObjects1= [];
gdjs.StartScreen2Code.GDConfirmButtonObjects2= [];
gdjs.StartScreen2Code.GDScoreTextObjects1= [];
gdjs.StartScreen2Code.GDScoreTextObjects2= [];
gdjs.StartScreen2Code.GDscoreboardObjects1= [];
gdjs.StartScreen2Code.GDscoreboardObjects2= [];
gdjs.StartScreen2Code.GDStartTypingObjects1= [];
gdjs.StartScreen2Code.GDStartTypingObjects2= [];
gdjs.StartScreen2Code.GDNameEntryObjects1= [];
gdjs.StartScreen2Code.GDNameEntryObjects2= [];
gdjs.StartScreen2Code.GDusernameObjects1= [];
gdjs.StartScreen2Code.GDusernameObjects2= [];
gdjs.StartScreen2Code.GDNewObjectObjects1= [];
gdjs.StartScreen2Code.GDNewObjectObjects2= [];
gdjs.StartScreen2Code.GDEnemyObjects1= [];
gdjs.StartScreen2Code.GDEnemyObjects2= [];
gdjs.StartScreen2Code.GDEnemyToPlayerObjects1= [];
gdjs.StartScreen2Code.GDEnemyToPlayerObjects2= [];
gdjs.StartScreen2Code.GDLethalSpaceShipObjects1= [];
gdjs.StartScreen2Code.GDLethalSpaceShipObjects2= [];
gdjs.StartScreen2Code.GDEnemy_95ShootObjects1= [];
gdjs.StartScreen2Code.GDEnemy_95ShootObjects2= [];
gdjs.StartScreen2Code.GDAlienBallObjects1= [];
gdjs.StartScreen2Code.GDAlienBallObjects2= [];
gdjs.StartScreen2Code.GDAlienBoostObjects1= [];
gdjs.StartScreen2Code.GDAlienBoostObjects2= [];
gdjs.StartScreen2Code.GDAlienObjects1= [];
gdjs.StartScreen2Code.GDAlienObjects2= [];
gdjs.StartScreen2Code.GDBossBulletObjects1= [];
gdjs.StartScreen2Code.GDBossBulletObjects2= [];
gdjs.StartScreen2Code.GDKillerShotObjects1= [];
gdjs.StartScreen2Code.GDKillerShotObjects2= [];
gdjs.StartScreen2Code.GDBGameObjectObjects1= [];
gdjs.StartScreen2Code.GDBGameObjectObjects2= [];
gdjs.StartScreen2Code.GDNewObjectObjects1= [];
gdjs.StartScreen2Code.GDNewObjectObjects2= [];
gdjs.StartScreen2Code.GDDevelopmentObjects1= [];
gdjs.StartScreen2Code.GDDevelopmentObjects2= [];
gdjs.StartScreen2Code.GDCommandsObjects1= [];
gdjs.StartScreen2Code.GDCommandsObjects2= [];
gdjs.StartScreen2Code.GDTitleObjects1= [];
gdjs.StartScreen2Code.GDTitleObjects2= [];
gdjs.StartScreen2Code.GDSecondTextObjects1= [];
gdjs.StartScreen2Code.GDSecondTextObjects2= [];

gdjs.StartScreen2Code.conditionTrue_0 = {val:false};
gdjs.StartScreen2Code.condition0IsTrue_0 = {val:false};
gdjs.StartScreen2Code.condition1IsTrue_0 = {val:false};


gdjs.StartScreen2Code.eventsList0 = function(runtimeScene) {

{


gdjs.StartScreen2Code.condition0IsTrue_0.val = false;
{
gdjs.StartScreen2Code.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.StartScreen2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", true);
}}

}


{


gdjs.StartScreen2Code.condition0IsTrue_0.val = false;
{
gdjs.StartScreen2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 20, "countdownStart");
}if (gdjs.StartScreen2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", true);
}}

}


};

gdjs.StartScreen2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartScreen2Code.GDLevelDisplayObjects1.length = 0;
gdjs.StartScreen2Code.GDLevelDisplayObjects2.length = 0;
gdjs.StartScreen2Code.GDPlayer2Objects1.length = 0;
gdjs.StartScreen2Code.GDPlayer2Objects2.length = 0;
gdjs.StartScreen2Code.GDPlayerObjects1.length = 0;
gdjs.StartScreen2Code.GDPlayerObjects2.length = 0;
gdjs.StartScreen2Code.GDBulletObjects1.length = 0;
gdjs.StartScreen2Code.GDBulletObjects2.length = 0;
gdjs.StartScreen2Code.GDGameOverObjects1.length = 0;
gdjs.StartScreen2Code.GDGameOverObjects2.length = 0;
gdjs.StartScreen2Code.GDScoreDisplayObjects1.length = 0;
gdjs.StartScreen2Code.GDScoreDisplayObjects2.length = 0;
gdjs.StartScreen2Code.GDLifeDisplayObjects1.length = 0;
gdjs.StartScreen2Code.GDLifeDisplayObjects2.length = 0;
gdjs.StartScreen2Code.GDShieldObjects1.length = 0;
gdjs.StartScreen2Code.GDShieldObjects2.length = 0;
gdjs.StartScreen2Code.GDExplosionObjects1.length = 0;
gdjs.StartScreen2Code.GDExplosionObjects2.length = 0;
gdjs.StartScreen2Code.GDBlackSmokeObjects1.length = 0;
gdjs.StartScreen2Code.GDBlackSmokeObjects2.length = 0;
gdjs.StartScreen2Code.GDsecondsObjects1.length = 0;
gdjs.StartScreen2Code.GDsecondsObjects2.length = 0;
gdjs.StartScreen2Code.GDminutesObjects1.length = 0;
gdjs.StartScreen2Code.GDminutesObjects2.length = 0;
gdjs.StartScreen2Code.GDhoursObjects1.length = 0;
gdjs.StartScreen2Code.GDhoursObjects2.length = 0;
gdjs.StartScreen2Code.GDTImePlayedObjects1.length = 0;
gdjs.StartScreen2Code.GDTImePlayedObjects2.length = 0;
gdjs.StartScreen2Code.GDImmortalTextObjects1.length = 0;
gdjs.StartScreen2Code.GDImmortalTextObjects2.length = 0;
gdjs.StartScreen2Code.GDDevelopTextObjects1.length = 0;
gdjs.StartScreen2Code.GDDevelopTextObjects2.length = 0;
gdjs.StartScreen2Code.GDMuteTextObjects1.length = 0;
gdjs.StartScreen2Code.GDMuteTextObjects2.length = 0;
gdjs.StartScreen2Code.GDFPSObjects1.length = 0;
gdjs.StartScreen2Code.GDFPSObjects2.length = 0;
gdjs.StartScreen2Code.GDStatsObjects1.length = 0;
gdjs.StartScreen2Code.GDStatsObjects2.length = 0;
gdjs.StartScreen2Code.GDFPSTextObjects1.length = 0;
gdjs.StartScreen2Code.GDFPSTextObjects2.length = 0;
gdjs.StartScreen2Code.GDEnabledObjects1.length = 0;
gdjs.StartScreen2Code.GDEnabledObjects2.length = 0;
gdjs.StartScreen2Code.GDConfirmButtonObjects1.length = 0;
gdjs.StartScreen2Code.GDConfirmButtonObjects2.length = 0;
gdjs.StartScreen2Code.GDScoreTextObjects1.length = 0;
gdjs.StartScreen2Code.GDScoreTextObjects2.length = 0;
gdjs.StartScreen2Code.GDscoreboardObjects1.length = 0;
gdjs.StartScreen2Code.GDscoreboardObjects2.length = 0;
gdjs.StartScreen2Code.GDStartTypingObjects1.length = 0;
gdjs.StartScreen2Code.GDStartTypingObjects2.length = 0;
gdjs.StartScreen2Code.GDNameEntryObjects1.length = 0;
gdjs.StartScreen2Code.GDNameEntryObjects2.length = 0;
gdjs.StartScreen2Code.GDusernameObjects1.length = 0;
gdjs.StartScreen2Code.GDusernameObjects2.length = 0;
gdjs.StartScreen2Code.GDNewObjectObjects1.length = 0;
gdjs.StartScreen2Code.GDNewObjectObjects2.length = 0;
gdjs.StartScreen2Code.GDEnemyObjects1.length = 0;
gdjs.StartScreen2Code.GDEnemyObjects2.length = 0;
gdjs.StartScreen2Code.GDEnemyToPlayerObjects1.length = 0;
gdjs.StartScreen2Code.GDEnemyToPlayerObjects2.length = 0;
gdjs.StartScreen2Code.GDLethalSpaceShipObjects1.length = 0;
gdjs.StartScreen2Code.GDLethalSpaceShipObjects2.length = 0;
gdjs.StartScreen2Code.GDEnemy_95ShootObjects1.length = 0;
gdjs.StartScreen2Code.GDEnemy_95ShootObjects2.length = 0;
gdjs.StartScreen2Code.GDAlienBallObjects1.length = 0;
gdjs.StartScreen2Code.GDAlienBallObjects2.length = 0;
gdjs.StartScreen2Code.GDAlienBoostObjects1.length = 0;
gdjs.StartScreen2Code.GDAlienBoostObjects2.length = 0;
gdjs.StartScreen2Code.GDAlienObjects1.length = 0;
gdjs.StartScreen2Code.GDAlienObjects2.length = 0;
gdjs.StartScreen2Code.GDBossBulletObjects1.length = 0;
gdjs.StartScreen2Code.GDBossBulletObjects2.length = 0;
gdjs.StartScreen2Code.GDKillerShotObjects1.length = 0;
gdjs.StartScreen2Code.GDKillerShotObjects2.length = 0;
gdjs.StartScreen2Code.GDBGameObjectObjects1.length = 0;
gdjs.StartScreen2Code.GDBGameObjectObjects2.length = 0;
gdjs.StartScreen2Code.GDNewObjectObjects1.length = 0;
gdjs.StartScreen2Code.GDNewObjectObjects2.length = 0;
gdjs.StartScreen2Code.GDDevelopmentObjects1.length = 0;
gdjs.StartScreen2Code.GDDevelopmentObjects2.length = 0;
gdjs.StartScreen2Code.GDCommandsObjects1.length = 0;
gdjs.StartScreen2Code.GDCommandsObjects2.length = 0;
gdjs.StartScreen2Code.GDTitleObjects1.length = 0;
gdjs.StartScreen2Code.GDTitleObjects2.length = 0;
gdjs.StartScreen2Code.GDSecondTextObjects1.length = 0;
gdjs.StartScreen2Code.GDSecondTextObjects2.length = 0;

gdjs.StartScreen2Code.eventsList0(runtimeScene);
return;

}

gdjs['StartScreen2Code'] = gdjs.StartScreen2Code;
