var gameInstance;

function setFullscreen() {
    gameInstance.SetFullscreen(1);
}

const url = new URL(window.location.href);
switch (url.searchParams.get("jamName")) {
    case "rrr":
        $.getScript('./TemplateData/UnityLoader2019.js', function()
        {
            gameInstance = UnityLoader.instantiate("gameContainer", "./RRR/RRR.json", {onProgress: UnityProgress});
        });
    break;

    case "dungeonMaster":
        $.getScript('./TemplateData/UnityLoader2019.js', function()
        {
            gameInstance = UnityLoader.instantiate("gameContainer", "./DungeonMaster/DungeonMaster.json", {onProgress: UnityProgress});
        });
    break;

    case "larryTheSheepsMuseumInvasion":
        $.getScript('./TemplateData/UnityLoader.js', function()
        {
            gameInstance = UnityLoader.instantiate("gameContainer", "./LarryTheSheepsMuseumInvasion/LarryTheSheepsMuseumInvasion.json", {onProgress: UnityProgress});
        });
    break;

    case "kibouNoImouto":
        $.getScript('./TemplateData/UnityLoader.js', function()
        {
            gameInstance = UnityLoader.instantiate("gameContainer", "./KibouNoImouto/KibouNoImouto.json", {onProgress: UnityProgress});
        });
    break;

    case "jovialJudgement":
        $.getScript('./TemplateData/UnityLoader.js', function()
        {
            gameInstance = UnityLoader.instantiate("gameContainer", "./JovialJudgement/ChristmasJam2018WebGL.json", {onProgress: UnityProgress});
        });
    break;

    case "toFSDfSftPDRRoDwL":
        $.getScript('./ToFSDfSftPDRRoDwL/UnityLoader.js', function()
        {
            gameInstance = UnityLoader.instantiate("gameContainer", "./ToFSDfSftPDRRoDwL/WebGL.json", {onProgress: UnityProgress});
        });
    break;

    case "manchaud":
        $.getScript('./TemplateData/UnityLoader.js', function()
        {
            gameInstance = UnityLoader.instantiate("gameContainer", "./Manchaud/TestWebGL.json", {onProgress: UnityProgress});
        });
    break;

    case "powerDown":
        $.getScript('./TemplateData/UnityLoader.js', function()
        {
            gameInstance = UnityLoader.instantiate("gameContainer", "./PowerDown/PowerDownWebGL.json", {onProgress: UnityProgress});
        });
    break;

    case "hadipoRun":
        $.getScript('./TemplateData/UnityLoader.js', function()
        {
            gameInstance = UnityLoader.instantiate("gameContainer", "./HadipoRun/HadipoRunWebGL.json", {onProgress: UnityProgress});
        });
    break;

    case "talesOfLayinskia":
        $.getScript('./TemplateData/UnityLoader.js', function()
        {
            gameInstance = UnityLoader.instantiate("gameContainer", "./TalesOfLayinskia/TalesOfLayinskiaWebGL.json", {onProgress: UnityProgress});
        });
    break;

    case "vespias":
        $.getScript('./TemplateData/UnityLoader.js', function()
        {
            gameInstance = UnityLoader.instantiate("gameContainer", "./Vespias/VespiasWebGL.json", {onProgress: UnityProgress});
        });
    break;

    default:
        alert("Invalid jam name: " + url.searchParams.get("jamName"));
        window.location.href = 'https://zirk.eu/?tab=gamejam'
}