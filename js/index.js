var Dragon = 100;
var Hero = 100;

function battleRound() {
  var attack = Math.floor(Math.random() * 50);
  Dragon -= attack;
  if (attack === 0) {
    alert("Attack Miss");
  }
  var fireBreathing = Math.floor(Math.random() * 63);
  if (fireBreathing === 0) {
    alert("Fire-Breathing Miss");
  }
  Hero -= fireBreathing;
  console.log("Attack: " + attack);
  $(".dragonHrut").html('<h3>Dragon got Hrut: - ' + attack + ' hp</h3>');
  console.log("Dragon Left: " + Dragon);
  $(".progress-bar-danger").css('width', Dragon + '%');
  console.log("Fire-Breathing: " + fireBreathing);
  $(".heroHrut").html('<h3>Hero got Hrut: - ' + fireBreathing + ' hp</h3>');
  console.log("Hero Left: " + Hero);
  $(".progress-bar-info").css('width', Hero + '%');
  if (Dragon <= 0) {
    alert("Dragon is dead!!");
    $(".btn-primary").attr("disabled", "disabled");
    $(".message").html('<h1><span class="glyphicon glyphicon-king" aria-hidden="true"></span>&nbsp;You win XDD</h1>');
  }
  if (Hero <= 0 && Dragon > 0) {
    alert("Hero is dead!!");
    $(".btn-primary").attr("disabled", "disabled");
    $(".message").html('<h1><span class="glyphicon glyphicon-fire" aria-hidden="true"></span>&nbsp;You lose QQ</h1>');
  }
}

function restart() {
  $(".progress-bar-danger").css('width', '100%');
  $(".dragonHrut").html('');
  $(".progress-bar-info").css('width', '100%');
  $(".heroHrut").html('');
  $("button").removeAttr("disabled", "disabled");
  $(".message").html('');
  Dragon = 100;
  Hero = 100;
}