import app from '@/../package.json';

function State () {
  this.version = app.version;

  this.session = null;
  this.loading = false;
}

export default new State();
