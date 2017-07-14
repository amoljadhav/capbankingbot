'use strict';

// Wit.ai parameters
const WIT_TOKEN = "SOS3A4LDHK6WIUUJ7MF6UGYNNVUG2OEA";//process.env.WIT_TOKEN;
if (!WIT_TOKEN) {
  throw new Error('missing WIT_TOKEN');
}

// Messenger API parameters
const FB_PAGE_TOKEN = "EAACEdEose0cBADQNfZApA24ZCDRAqDzeBSjlM9rBr3zK9ySgqVUESrHdZC4QKMaZCQYVDDUBKFUpzvvZA7gKKZBa672dYZB9IH9JrcZCMUDjphVjFtJtShHXk1EFUEorof6lExo0Oa9ZCqNJAqLVmfn6oH3HtJgpEgO9PR0QInXZBp7A9WFZCSsz8ZAF1lJzlSseEP4ZD";

var FB_VERIFY_TOKEN = "capgemini_banking_bot";
if (!FB_VERIFY_TOKEN) {
  FB_VERIFY_TOKEN = "capgemini_banking_bot";
}

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
};