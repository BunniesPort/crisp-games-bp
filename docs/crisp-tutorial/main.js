title = "CHARGE RUSH";

description = `
HOGEHOGE!
`;

characters = [];

const G = {
  WIDTH: 100,
  HEIGHT: 150,
  STAR_SPEED_MIN: 0.5,
  STAR_SPEED_MAX: 1.0
}

options = {
  viewSize: { x: G.WIDTH, y: G.HEIGHT },
  theme: "pixel"
};

/**
 * @typedef {{
 * pos: Vector,
 * speed: number
 * }} Star
 */

/**
 * @type {Star []}
 */
let stars

function update() {
  if (!ticks) {
    stars = times(20, () => {
      const posX = rnd(0, G.WIDTH)
      const posY = rnd(0, G.HEIGHT)
      return {
        pos: vec(posX, posY),
        speed: rnd(G.STAR_SPEED_MIN, G.STAR_SPEED_MAX)
      }
    })
  }

  stars.forEach((s) => {
    s.pos.y += s.speed
    s.pos.wrap(0, G.WIDTH, 0, G.HEIGHT)
    color("light_black")
    box(s.pos, 1)
  })
}
