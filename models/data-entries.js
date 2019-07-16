const { Entry } = require('./Entry');

const mongoose = require('../config/conn');

const entry1 = new Entry({
  tags: [
    {
      _id: '5ccbd769c8504f249016d3da',
      parent: null,
      name: 'Work',
      description: 'Everything related to work',
      level: 1,
    },
    {
      _id: '5ccbd7909b09b024caadf24a',
      parent: '5ccbd769c8504f249016d3da',
      name: 'Project1',
      description: 'Description of project1 task',
      level: 2,
    },
    {
      _id: '5ccbd7b75f39702501bb4347',
      parent: '5ccbd7909b09b024caadf24a',
      name: 'Stage1',
      description: 'Description of stage1 of project 1',
      level: 3,
    }
  ],
  title: 'Complete testing',
  description:
    'Testing testing etc Quo laudantium animi. Dolorem sit nihil corporis iste maxime reiciendis. Officiis voluptatem dolores totam possimus ratione ullam pariatur sed provident.',
  date: '2019-06-05'
});

module.exports = { entry1 };
