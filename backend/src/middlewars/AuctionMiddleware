module.exports = function (schema) {
    schema.pre('save', function (next) {
      if (!this.endTime) {
        this.endTime = new Date();
        this.endTime.setDate(this.endTime.getDate() + this.duration);
      }
      next();
    });
  };
  