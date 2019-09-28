const { logStart, logEnd, logProps } = require("./exec-tools");
const { getObjectFromPath } = require("js-tools")

class RunExperiments {
  constructor() {
    const title = `${this._name} constructor`;

    logStart(`Runner created`, title);

    const props = Object.getOwnPropertyNames(this);
    const propsFromProto = Object.getOwnPropertyNames(this.__proto__);
    const propsFromPrototype = this.prototype ? Object.getOwnPropertyNames(this.prototype) : [];
    const constructorProto = getObjectFromPath(this, "__proto__.constructor.__proto__.prototype");
    const propsFromConstructorProto = (constructorProto ? Object.getOwnPropertyNames(constructorProto) : []);

    this._props = props;
    this._propsFromProto = propsFromProto;
    this._propsFromPrototype = propsFromPrototype;
    this._propsFromConstructorProto = propsFromConstructorProto;

    props.length                      && logProps(props);
    propsFromProto.length             && logProps(propsFromProto, '__proto__');
    propsFromPrototype.length         && logProps(propsFromPrototype, 'prototype');
    propsFromConstructorProto.length  && logProps(propsFromConstructorProto, 'constructor __proto__');

    logEnd(title);
  }

  get _name() {
    return this.__proto__.constructor.name;
  }

  executeMethods(props) {
    const _this = this;

    // remove constructor and start
    props = props.filter(item => item.indexOf('run') == 0);
    props = props.filter(item => typeof _this[item] == 'function'); // remove non-functions if any
    props.forEach( function(item) {
      logStart(`EXECUTING       ${_this._name + " :: " + item}`)
      _this[item]();
      logEnd();
    })
  }

  start() {
    this.executeMethods(this._props);
    this.executeMethods(this._propsFromProto);
    this.executeMethods(this._propsFromPrototype);
    this.executeMethods(this._propsFromConstructorProto);

  }
}


module.exports = RunExperiments;

