// BeyondTrust PM Cloud functions
import { ConnectorError, logger } from '@sailpoint/connector-sdk'
import {smart_error_handling,scim_GET_User} from './scim-functions'


  
// GET - PM Cloud
export async function pmc_get(endpoint: string) {

//  try{
  const axios = require('axios');
  const qs = require('querystring');
  // set the headers
  const config = {
    method: 'get',
    rejectUnauthorized: false,
    url: globalThis.__REST_API + endpoint,
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer '+globalThis.__ACCESS_TOKEN
    }
}
let res_get = await axios(config)
  
      return res_get.data
  
  }
