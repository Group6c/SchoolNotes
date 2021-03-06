(function () {
  'use strict';

  angular
    .module('activities')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Calendar',
      state: 'activities',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'activities', {
      title: 'View Community Calendar',
      state: 'activities.list'
    });

    //// Add the dropdown create item
    //menuService.addSubMenuItem('topbar', 'activities', {
    //  title: 'Create Activity',
    //  state: 'activities.create',
    //  roles: ['user']
    //});
  }
}());
