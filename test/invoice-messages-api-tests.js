'use strict';

const assert = require('assert');
const config = require('../config');
const Harvest = require('../index');
const harvest = new Harvest({
  subdomain: config.subdomain,
  email: config.email,
  password: config.password
});
const InvoiceMessages = harvest.InvoiceMessages;

describe('The InvoiceMessages API', function() {
  describe('Show all messages sent for an invoice', function() {
    it('should implement the messagesByInvoice method', function() {
      assert.equal(typeof InvoiceMessages.messagesByInvoice, 'function');
    });
  });
  describe('Show a particular message', function() {
    it('should implement the getByInvoice method', function() {
      assert.equal(typeof InvoiceMessages.getByInvoice, 'function');
    });
  });
  describe('Send an invoice', function() {
    it('should implement the create method', function() {
      assert.equal(typeof InvoiceMessages.create, 'function');
    });
  });
  describe('Delete an existing message', function() {
    it('should implement the delete method', function() {
      assert.equal(typeof InvoiceMessages.delete, 'function');
    });
  });
  describe('Create a message for marking an invoice as sent', function() {
    it('should implement the markSent method', function() {
      assert.equal(typeof InvoiceMessages.markSent, 'function');
    });
  });
  describe('Create a message and mark an open invoice as closed', function() {
    it('should implement the markClosed method', function() {
      assert.equal(typeof InvoiceMessages.markClosed, 'function');
    });
  });
  describe('Create a message and mark a closed invoice as open', function() {
    it('should implement the markOpen method', function() {
      assert.equal(typeof InvoiceMessages.markOpen, 'function');
    });
  });
  describe('Create a message for marking an open invoice as draft', function() {
    it('should implement the markDraft method', function() {
      assert.equal(typeof InvoiceMessages.markDraft, 'function');
    });
  });
});
