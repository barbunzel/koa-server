module.exports = {
  getDocs: function* (namespace, collection) {
    this.body = yield this.mongo.db(namespace).collection(collection).find().toArray();
  },
  newDoc: function* (namespace, collection, next) {
    let doc = yield this.mongo.db(namespace).collection(collection).insert(this.request.body);
    this.body = doc.ops[0];
  },
  getDoc: function* (namespace, collection, id) {
    this.body = yield this.mongo.db(namespace).collection(collection).findOne({
      _id: this.mongo.ObjectId(id)
    });
  },
  updateDoc: function* (namespace, collection, id) {
    let test = yield this.mongo.db(namespace).collection(collection).update({
      _id: this.mongo.ObjectId(id)
    }, this.request.body);

    this.status = 200;
  },
  deleteDoc: function* (namespace, collection, id) {
    let test = yield this.mongo.db(namespace).collection(collection).remove({
      _id: this.mongo.ObjectId(id)
    });

    this.status = 200;
  }
};