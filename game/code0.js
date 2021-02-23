gdjs.StartScreenCode = {};
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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", true);
}}

}


{


gdjs.StartScreenCode.condition0IsTrue_0.val = false;
{
gdjs.StartScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "countdownStart");
}if (gdjs.StartScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", true);
}}

}


};

gdjs.StartScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

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
