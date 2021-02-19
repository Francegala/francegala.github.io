gdjs.Level1Code = {};
gdjs.Level1Code.GDBackgroundObjects1= [];
gdjs.Level1Code.GDBackgroundObjects2= [];
gdjs.Level1Code.GDPlayerObjects1= [];
gdjs.Level1Code.GDPlayerObjects2= [];
gdjs.Level1Code.GDEnemyToPlayerObjects1= [];
gdjs.Level1Code.GDEnemyToPlayerObjects2= [];
gdjs.Level1Code.GDEnemyObjects1= [];
gdjs.Level1Code.GDEnemyObjects2= [];
gdjs.Level1Code.GDBulletObjects1= [];
gdjs.Level1Code.GDBulletObjects2= [];
gdjs.Level1Code.GDShieldObjects1= [];
gdjs.Level1Code.GDShieldObjects2= [];

gdjs.Level1Code.conditionTrue_0 = {val:false};
gdjs.Level1Code.condition0IsTrue_0 = {val:false};
gdjs.Level1Code.condition1IsTrue_0 = {val:false};
gdjs.Level1Code.condition2IsTrue_0 = {val:false};
gdjs.Level1Code.condition3IsTrue_0 = {val:false};
gdjs.Level1Code.conditionTrue_1 = {val:false};
gdjs.Level1Code.condition0IsTrue_1 = {val:false};
gdjs.Level1Code.condition1IsTrue_1 = {val:false};
gdjs.Level1Code.condition2IsTrue_1 = {val:false};
gdjs.Level1Code.condition3IsTrue_1 = {val:false};


gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Level1Code.GDEnemyObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyToPlayerObjects1Objects = Hashtable.newFrom({"EnemyToPlayer": gdjs.Level1Code.GDEnemyToPlayerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Level1Code.GDEnemyObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Level1Code.GDBulletObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Level1Code.GDEnemyObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShieldObjects1Objects = Hashtable.newFrom({"Shield": gdjs.Level1Code.GDShieldObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyToPlayerObjects1Objects = Hashtable.newFrom({"EnemyToPlayer": gdjs.Level1Code.GDEnemyToPlayerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Level1Code.GDBulletObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyToPlayerObjects1Objects = Hashtable.newFrom({"EnemyToPlayer": gdjs.Level1Code.GDEnemyToPlayerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShieldObjects1Objects = Hashtable.newFrom({"Shield": gdjs.Level1Code.GDShieldObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShieldObjects1Objects = Hashtable.newFrom({"Shield": gdjs.Level1Code.GDShieldObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Level1Code.GDBulletObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Level1Code.GDBulletObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Level1Code.GDBulletObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Level1Code.GDBulletObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Level1Code.GDEnemyObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Level1Code.GDEnemyObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyToPlayerObjects1Objects = Hashtable.newFrom({"EnemyToPlayer": gdjs.Level1Code.GDEnemyToPlayerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyToPlayerObjects1Objects = Hashtable.newFrom({"EnemyToPlayer": gdjs.Level1Code.GDEnemyToPlayerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyToPlayerObjects1Objects = Hashtable.newFrom({"EnemyToPlayer": gdjs.Level1Code.GDEnemyToPlayerObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyObjects1Objects = Hashtable.newFrom({"Enemy": gdjs.Level1Code.GDEnemyObjects1});gdjs.Level1Code.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "EnemyCreation");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) != 1;
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
gdjs.Level1Code.GDEnemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyObjects1Objects, gdjs.random(750), -(50), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyCreation");
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "EnemyToPlayerCreation");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) != 1;
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
gdjs.Level1Code.GDEnemyToPlayerObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyToPlayerObjects1Objects, gdjs.random(750), -(50), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyToPlayerCreation");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyObjects1[i].addPolarForce(90, 300, 0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("EnemyToPlayer"), gdjs.Level1Code.GDEnemyToPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDEnemyToPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyToPlayerObjects1[i].addForceTowardObject((gdjs.Level1Code.GDPlayerObjects1.length !== 0 ? gdjs.Level1Code.GDPlayerObjects1[0] : null), 200, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level1Code.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBulletObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBulletObjects1 */
/* Reuse gdjs.Level1Code.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shield"), gdjs.Level1Code.GDShieldObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShieldObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level1Code.GDBulletObjects1);
/* Reuse gdjs.Level1Code.GDEnemyObjects1 */
/* Reuse gdjs.Level1Code.GDShieldObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDShieldObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShieldObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level1Code.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyToPlayer"), gdjs.Level1Code.GDEnemyToPlayerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyToPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBulletObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDBulletObjects1 */
/* Reuse gdjs.Level1Code.GDEnemyToPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDEnemyToPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyToPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemyToPlayer"), gdjs.Level1Code.GDEnemyToPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shield"), gdjs.Level1Code.GDShieldObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyToPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShieldObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level1Code.GDBulletObjects1);
/* Reuse gdjs.Level1Code.GDEnemyToPlayerObjects1 */
/* Reuse gdjs.Level1Code.GDShieldObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDEnemyToPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyToPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDShieldObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShieldObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) > 0;
}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition2IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7788700);
}
}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.Level1Code.GDShieldObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShieldObjects1Objects, (( gdjs.Level1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects1[0].getPointX("")), ((( gdjs.Level1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects1[0].getPointY("")) - 40), "");
}{runtimeScene.getVariables().getFromIndex(3).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getY() > 520 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].setY(520);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getY() < 420 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].setY(420);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getX() < 1 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].setX(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getX() > 700 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].setX(700);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].addPolarForce(180, 400, 0);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].addPolarForce(0, 400, 0);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].addPolarForce(270, 400, 0);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].addPolarForce(90, 400, 0);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.3, "FireRate");
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.Level1Code.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBulletObjects1Objects, (( gdjs.Level1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects1[0].getPointX("")), (( gdjs.Level1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects1[0].getPointY("")), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FireRate");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBulletObjects1Objects, ((( gdjs.Level1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects1[0].getPointX("")) + 90), (( gdjs.Level1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects1[0].getPointY("")), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Laser-Shot.mp3", false, 5, 1);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.3, "FireRate");
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.Level1Code.GDBulletObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBulletObjects1Objects, (( gdjs.Level1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects1[0].getPointX("")), (( gdjs.Level1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects1[0].getPointY("")), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FireRate");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDBulletObjects1Objects, ((( gdjs.Level1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects1[0].getPointX("")) + 90), (( gdjs.Level1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects1[0].getPointY("")), "");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Laser-Shot.mp3", false, 5, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level1Code.GDBulletObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBulletObjects1[i].addPolarForce(270, 400, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) != 1;
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDEnemyObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemyToPlayer"), gdjs.Level1Code.GDEnemyToPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyToPlayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) != 1;
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemyToPlayer"), gdjs.Level1Code.GDEnemyToPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyToPlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDEnemyToPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDEnemyToPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyToPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(2);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 1;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level1Code.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyToPlayer"), gdjs.Level1Code.GDEnemyToPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shield"), gdjs.Level1Code.GDShieldObjects1);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDEnemyToPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyToPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDShieldObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShieldObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7806156);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).add(1);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) > 1;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setNumber(0);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) != 1;
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > 0;
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
gdjs.Level1Code.condition2IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < 1;
}if ( gdjs.Level1Code.condition1IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition2IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7808612);
}
}}
}
if (gdjs.Level1Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level1Code.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyToPlayer"), gdjs.Level1Code.GDEnemyToPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shield"), gdjs.Level1Code.GDShieldObjects1);
gdjs.Level1Code.GDPlayerObjects1.length = 0;

{for(var i = 0, len = gdjs.Level1Code.GDEnemyToPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyToPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDShieldObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShieldObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(2);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDPlayerObjects1Objects, 336, 512, "");
}}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "i");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7810948);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7811780);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.Level1Code.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyToPlayer"), gdjs.Level1Code.GDEnemyToPlayerObjects1);
{runtimeScene.getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.Level1Code.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDEnemyToPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDEnemyToPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) > 1;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) > 1;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num2");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7813772);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
gdjs.Level1Code.GDEnemyToPlayerObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyToPlayerObjects1Objects, gdjs.random(750), -(50), "");
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7815228);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
gdjs.Level1Code.GDEnemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDEnemyObjects1Objects, gdjs.random(750), -(50), "");
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "b");
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition1IsTrue_0;
gdjs.Level1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7816084);
}
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(3).add(5);
}}

}


};

gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDBackgroundObjects1.length = 0;
gdjs.Level1Code.GDBackgroundObjects2.length = 0;
gdjs.Level1Code.GDPlayerObjects1.length = 0;
gdjs.Level1Code.GDPlayerObjects2.length = 0;
gdjs.Level1Code.GDEnemyToPlayerObjects1.length = 0;
gdjs.Level1Code.GDEnemyToPlayerObjects2.length = 0;
gdjs.Level1Code.GDEnemyObjects1.length = 0;
gdjs.Level1Code.GDEnemyObjects2.length = 0;
gdjs.Level1Code.GDBulletObjects1.length = 0;
gdjs.Level1Code.GDBulletObjects2.length = 0;
gdjs.Level1Code.GDShieldObjects1.length = 0;
gdjs.Level1Code.GDShieldObjects2.length = 0;

gdjs.Level1Code.eventsList0(runtimeScene);
return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
