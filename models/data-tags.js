const {Tag} = require('./Entry');

const tag1 = new Tag({
  name: 'Work',
  description: 'Everything related to work',
  level: 1
});

const tag2a = new Tag({
  name: 'Project1',
  description: 'Description of project1 task',
  level: 2,
  parent: '5ccbd769c8504f249016d3da',
});

const tag3a = new Tag({
  name: 'Stage1',
  description: 'Description of stage1 of project 1',
  level: 3,
  parent: '5ccbd7909b09b024caadf24a',
});

const tag3b = new Tag({
  name: 'Stage2',
  description: 'Description of stage 2 of project 1',
  level: 3,
  parent: '5ccbd7909b09b024caadf24a',
});

module.exports = {
  tag1,
  tag2a,
  tag3a,
  tag3b
}