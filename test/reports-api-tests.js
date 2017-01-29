'use strict';

const assert = require('assert');
const config = require('../config');
const Harvest = require('../index');
const harvest = new Harvest({
  subdomain: config.subdomain,
  email: config.email,
  password: config.password
});
const Reports = harvest.Reports;

describe('The Reports API', function() {
  describe('Get all time entries logged to a project for a given timeframe', function() {
    it('should implement the timeEntriesByProject method', function() {
      assert.equal(typeof Reports.timeEntriesByProject, 'function');
    });
  });
  describe('Get all time entries by the current user logged to a project for a given timeframe', function() {
    it('should implement the timeEntriesByCurrentUser method', function() {
      assert.equal(typeof Reports.timeEntriesByCurrentUser, 'function');
    });
  });
  describe('Get all time entries logged by a user for a given timeframe', function() {
    it('should implement the timeEntriesByCurrentUser method', function() {
      assert.equal(typeof Reports.timeEntriesByUser, 'function');
    });
  });
  describe('Get all expense entries logged by a user for a given timeframe', function() {
    it('should implement the expensesByUser method', function() {
      assert.equal(typeof Reports.expensesByUser, 'function');
    });
  });
  describe('Get all expenses entries to a project for a given timeframe', function() {
    it('should implement the expensesByProject method', function() {
      assert.equal(typeof Reports.expensesByProject, 'function');
    });
  });
  describe('Get all expenses entries to a client for a given timeframe', function() {
    it('should implement the expensesByClient method', function() {
      assert.equal(typeof Reports.expensesByClient, 'function');
    });
  });
});
