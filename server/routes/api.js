const koa = require('koa');
const app = module.exports = koa();
const _ = require('koa-route');

const ctrl = require('../controllers');

app.use(_.get('/:namespace/:collection', ctrl.getDocs));
app.use(_.post('/:namespace/:collection', ctrl.newDoc));
app.use(_.get('/:namespace/:collection/:id', ctrl.getDoc));
app.use(_.put('/:namespace/:collection/:id', ctrl.updateDoc));
app.use(_.delete('/:namepsace/:colletion/:id', ctrl.deleteDoc));
