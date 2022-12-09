/**
 * position
 * velocity = change in position
 * acceleration = change in velocity
 *
 * Speed is magnitude of velocity
 */

class Smoke {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.particles = [];
  }

  update() {
    for (let i = 0; i < 5; i++) {
      this.particles.push(new Particle(this.x, this.y));
    }

    this.particles.forEach((p) => p.update());

    this.particles = this.particles.filter((p) => !p.finished);
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    // velocity (rate/direction) along x-axis (l/r)
    this.vx = random(-10, 10);
    // velocity (rate/direction) along y-axis (u/d)
    this.vy = random(-10, 5);

    this.col = color(`hsl(${~~random(360)}, 100%, 50%)`);

    // starting opacity
    this.alpha = 255;

    this.size = random((5, 20));
  }

  update() {
    // change the location of the dot by a random amount
    this.x += this.vx;
    this.y += this.vy;
    // lose opacity over distance
    this.alpha -= 5;

    this.show();
  }

  show() {
    // no outline
    noStroke();
    // outline
    stroke(this.col);
    fill(255, this.alpha);
    circle(this.x, this.y, this.size);
  }

  get finished() {
    return this.alpha < 0;
  }
}
