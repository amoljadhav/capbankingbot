'use strict';

// Wit.ai parameters
const WIT_TOKEN = "SOS3A4LDHK6WIUUJ7MF6UGYNNVUG2OEA";//process.env.WIT_TOKEN;
if (!WIT_TOKEN) {
  throw new Error('missing WIT_TOKEN');
}

// Messenger API parameters
const FB_PAGE_TOKEN = "EAAGdQoMFEoMBAFP0PO2ZBs6X88UpGeGP75GDT4vYL0AL8vLeENDSa2MwNUnvkCh2Mwzq7ZAfNDW70d5mYg7zmvzLyV2ngQuc3OL6Il1BVSayxwh6TZAYH57FGPDGI9e1Jd7T5Gw9OwCa0xjfbr9sMVmEmWqDpmdpOrrklanQwZDZD";

var FB_VERIFY_TOKEN = "capgemini_banking_bot";
if (!FB_VERIFY_TOKEN) {
  FB_VERIFY_TOKEN = "capgemini_banking_bot";
}

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
};