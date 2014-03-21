// Wait till the browser is ready to render the game (avoids glitches)
var gm = null;
window.requestAnimationFrame(function () {
  gm = new GameManager(16, KeyboardInputManager, HTMLActuator, LocalScoreManager);
  window.requestAnimationFrame(autoMoves);
});


function autoMoves() {
    if (gm === null)
        return;
    gm.inputManager.emit("move", parseInt(Math.random() * 4));
    window.requestAnimationFrame(autoMoves);
}
