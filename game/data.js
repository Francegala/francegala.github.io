gdjs.projectData = {"firstLayout": "","gdVersion": {"build": 99,"major": 4,"minor": 0,"revision": 0},"properties": {"adaptGameResolutionAtRuntime": true,"folderProject": false,"orientation": "landscape","packageName": "com.example.gamename","projectUuid": "416e2765-30f9-4531-b4e7-b81c3b44a0c5","scaleMode": "linear","sizeOnStartupMode": "","useExternalSourceFiles": false,"version": "1.0.0","name": "Project","author": "","windowWidth": 800,"windowHeight": 600,"latestCompilationDirectory": "","maxFPS": 60,"minFPS": 30,"verticalSync": false,"platformSpecificAssets": {},"loadingScreen": {"showGDevelopSplash": true},"extensionProperties": [],"extensions": [{"name": "BuiltinObject"},{"name": "BuiltinAudio"},{"name": "BuiltinVariables"},{"name": "BuiltinTime"},{"name": "BuiltinMouse"},{"name": "BuiltinKeyboard"},{"name": "BuiltinJoystick"},{"name": "BuiltinCamera"},{"name": "BuiltinWindow"},{"name": "BuiltinFile"},{"name": "BuiltinNetwork"},{"name": "BuiltinScene"},{"name": "BuiltinAdvanced"},{"name": "Sprite"},{"name": "BuiltinCommonInstructions"},{"name": "BuiltinCommonConversions"},{"name": "BuiltinStringInstructions"},{"name": "BuiltinMathematicalTools"},{"name": "BuiltinExternalLayouts"}],"platforms": [{"name": "GDevelop JS platform"}],"currentPlatform": "GDevelop JS platform"},"resources": {"resources": [{"alwaysLoaded": false,"file": "background-purple.png","kind": "image","metadata": "","name": "background-purple.png","smoothed": true,"userAdded": false},{"alwaysLoaded": false,"file": "playerShip1_blue.png","kind": "image","metadata": "","name": "playerShip1_blue.png","smoothed": true,"userAdded": true},{"alwaysLoaded": false,"file": "enemyRed3.png","kind": "image","metadata": "","name": "enemyRed3.png","smoothed": true,"userAdded": true},{"alwaysLoaded": false,"file": "laserBlue07.png","kind": "image","metadata": "","name": "laserBlue07.png","smoothed": true,"userAdded": true},{"alwaysLoaded": false,"file": "laserBlue07-1.png","kind": "image","metadata": "","name": "laserBlue07-1.png","smoothed": true,"userAdded": true},{"alwaysLoaded": false,"file": "laserBlue07-1-0.png","kind": "image","metadata": "","name": "laserBlue07-1-0.png","smoothed": true,"userAdded": false},{"alwaysLoaded": false,"file": "laserBlue07-1-1.png","kind": "image","metadata": "","name": "laserBlue07-1-1.png","smoothed": true,"userAdded": false},{"alwaysLoaded": false,"file": "shield-1.png","kind": "image","metadata": "","name": "shield-1.png","smoothed": true,"userAdded": false},{"file": "Laser-Shot.mp3","kind": "audio","metadata": "","name": "Laser-Shot.mp3","userAdded": true},{"alwaysLoaded": false,"file": "background.png","kind": "image","metadata": "","name": "background.png","smoothed": true,"userAdded": false},{"alwaysLoaded": false,"file": "player1.png","kind": "image","metadata": "","name": "player1.png","smoothed": true,"userAdded": true},{"alwaysLoaded": false,"file": "enemy1.png","kind": "image","metadata": "","name": "enemy1.png","smoothed": true,"userAdded": true},{"alwaysLoaded": false,"file": "laserPlayer.png","kind": "image","metadata": "","name": "laserPlayer.png","smoothed": true,"userAdded": true},{"alwaysLoaded": false,"file": "shield1.png","kind": "image","metadata": "","name": "shield1.png","smoothed": true,"userAdded": true},{"alwaysLoaded": false,"file": "meteorBrown_med3.png","kind": "image","metadata": "","name": "meteorBrown_med3.png","smoothed": true,"userAdded": true},{"alwaysLoaded": false,"file": "laserRed08.png","kind": "image","metadata": "","name": "laserRed08.png","smoothed": true,"userAdded": true},{"alwaysLoaded": false,"file": "meteor.png","kind": "image","metadata": "","name": "meteor.png","smoothed": true,"userAdded": true},{"alwaysLoaded": false,"file": "laserEnemy.png","kind": "image","metadata": "","name": "laserEnemy.png","smoothed": true,"userAdded": false},{"file": "Space-Cannon.mp3","kind": "audio","metadata": "","name": "Space-Cannon.mp3","userAdded": true},{"file": "The-Creeping-Blob.mp3","kind": "audio","metadata": "","name": "The-Creeping-Blob.mp3","userAdded": true},{"file": "PowerRez9.mp3","kind": "audio","metadata": "","name": "PowerRez9.mp3","userAdded": true}],"resourceFolders": []},"objects": [],"objectsGroups": [],"variables": [{"name": "Life","value": ""}],"layouts": [{"b": 209,"disableInputWhenNotFocused": true,"mangledName": "Level1","name": "Level1","oglFOV": 90,"oglZFar": 500,"oglZNear": 1,"r": 209,"standardSortMethod": true,"stopSoundsOnStartup": true,"title": "","v": 209,"uiSettings": {"grid": true,"gridB": 255,"gridG": 180,"gridHeight": 8,"gridOffsetX": 0,"gridOffsetY": 0,"gridR": 158,"gridWidth": 8,"snap": true,"windowMask": false,"zoomFactor": 1},"objectsGroups": [],"variables": [{"name": "Immortal","value": ""},{"name": "DevelopMode","value": ""},{"name": "Pause","value": ""},{"name": "Shield","value": ""}],"instances": [{"angle": 0,"customSize": true,"height": 600,"layer": "Background","locked": false,"name": "Background","persistentUuid": "ebad834e-be07-4dfd-a2ff-e8cff5e1360a","width": 800,"x": 0,"y": 0,"zOrder": 1,"numberProperties": [],"stringProperties": [],"initialVariables": [{"name": "Life","value": "3"}]},{"angle": 0,"customSize": false,"height": 0,"layer": "","locked": false,"name": "Player","persistentUuid": "66877aef-df76-40e1-ad26-4ffabe9e3f7c","width": 0,"x": 336,"y": 512,"zOrder": 2,"numberProperties": [],"stringProperties": [],"initialVariables": [{"name": "Life","value": ""}]}],"objects": [{"name": "Background","tags": "","type": "Sprite","updateIfNotVisible": false,"variables": [],"behaviors": [],"animations": [{"name": "","useMultipleDirections": false,"directions": [{"looping": false,"timeBetweenFrames": 0.08,"sprites": [{"hasCustomCollisionMask": false,"image": "background.png","points": [],"originPoint": {"name": "origine","x": 0,"y": 0},"centerPoint": {"automatic": true,"name": "centre","x": 0,"y": 0},"customCollisionMask": []}]}]}]},{"name": "Player","tags": "","type": "Sprite","updateIfNotVisible": false,"variables": [],"behaviors": [],"animations": [{"name": "","useMultipleDirections": false,"directions": [{"looping": false,"timeBetweenFrames": 0.08,"sprites": [{"hasCustomCollisionMask": false,"image": "player1.png","points": [],"originPoint": {"name": "origine","x": 0,"y": 0},"centerPoint": {"automatic": true,"name": "centre","x": 0,"y": 0},"customCollisionMask": []}]}]}]},{"name": "EnemyToPlayer","tags": "","type": "Sprite","updateIfNotVisible": false,"variables": [],"behaviors": [{"name": "DestroyOutside","type": "DestroyOutsideBehavior::DestroyOutside","extraBorder": 0}],"animations": [{"name": "","useMultipleDirections": false,"directions": [{"looping": false,"timeBetweenFrames": 0.08,"sprites": [{"hasCustomCollisionMask": false,"image": "enemy1.png","points": [],"originPoint": {"name": "origine","x": 0,"y": 0},"centerPoint": {"automatic": true,"name": "centre","x": 0,"y": 0},"customCollisionMask": []}]}]}]},{"name": "Enemy","tags": "","type": "Sprite","updateIfNotVisible": false,"variables": [],"behaviors": [{"name": "DestroyOutside","type": "DestroyOutsideBehavior::DestroyOutside","extraBorder": 0}],"animations": [{"name": "","useMultipleDirections": false,"directions": [{"looping": false,"timeBetweenFrames": 0.08,"sprites": [{"hasCustomCollisionMask": false,"image": "meteor.png","points": [],"originPoint": {"name": "origine","x": 0,"y": 0},"centerPoint": {"automatic": true,"name": "centre","x": 0,"y": 0},"customCollisionMask": []}]}]}]},{"name": "Bullet","tags": "","type": "Sprite","updateIfNotVisible": false,"variables": [],"behaviors": [{"name": "DestroyOutside","type": "DestroyOutsideBehavior::DestroyOutside","extraBorder": 0}],"animations": [{"name": "","useMultipleDirections": false,"directions": [{"looping": false,"timeBetweenFrames": 0.08,"sprites": [{"hasCustomCollisionMask": false,"image": "laserPlayer.png","points": [],"originPoint": {"name": "origine","x": 0,"y": 0},"centerPoint": {"automatic": true,"name": "centre","x": 0,"y": 0},"customCollisionMask": []}]}]}]},{"name": "Shield","tags": "","type": "Sprite","updateIfNotVisible": false,"variables": [],"behaviors": [],"animations": [{"name": "","useMultipleDirections": false,"directions": [{"looping": false,"timeBetweenFrames": 0.08,"sprites": [{"hasCustomCollisionMask": false,"image": "shield1.png","points": [],"originPoint": {"name": "origine","x": 0,"y": 0},"centerPoint": {"automatic": true,"name": "centre","x": 0,"y": 0},"customCollisionMask": []}]}]}]},{"name": "Enemy_Shoot","tags": "","type": "Sprite","updateIfNotVisible": false,"variables": [],"behaviors": [],"animations": [{"name": "","useMultipleDirections": false,"directions": [{"looping": false,"timeBetweenFrames": 0.08,"sprites": [{"hasCustomCollisionMask": false,"image": "laserEnemy.png","points": [],"originPoint": {"name": "origine","x": 0,"y": 0},"centerPoint": {"automatic": true,"name": "centre","x": 0,"y": 0},"customCollisionMask": []}]}]}]}],"events": [],"layers": [{"ambientLightColorB": 1702453632,"ambientLightColorG": 6005776,"ambientLightColorR": 167797872,"followBaseLayerCamera": false,"isLightingLayer": false,"name": "Background","visibility": true,"cameras": [],"effects": []},{"ambientLightColorB": 36,"ambientLightColorG": 7131120,"ambientLightColorR": 32,"followBaseLayerCamera": false,"isLightingLayer": false,"name": "","visibility": true,"cameras": [{"defaultSize": true,"defaultViewport": true,"height": 0,"viewportBottom": 1,"viewportLeft": 0,"viewportRight": 1,"viewportTop": 0,"width": 0}],"effects": []}],"behaviorsSharedData": []}],"externalEvents": [],"eventsFunctionsExtensions": [],"externalLayouts": [],"externalSourceFiles": []};
gdjs.runtimeGameOptions = {};
