/* */
import {AsyncStorage} from 'react-native';

import {url} from './routes.js';
import {langCode} from './routes.js';
import {page} from './routes.js';
import {size} from './routes.js';

function getUrl(options) {
  return (
    url + options.route + '/' + langCode + options.locale + page + options.page
  );
}

function getSingleUrl(options) {
  return url + options.route + '/' + options.id + langCode + options.locale;
}

function getPostUrl(options) {
  return url + options.route + '/';
}

/**
 *
 * Get All listings
 *
 * @param string options
 * @return promise
 */
export const get = async (options) => {
  let url = getUrl(options);

  const response = await fetch(url);

  return response;
};

/**
 *
 * Get single
 *
 * @param string options
 * @return promise
 */
export const getById = async (options) => {
  let url = getSingleUrl(options);

  const response = await fetch(url);

  return response;
};

/**
 *
 * Get single
 *
 * @param string options
 * @return promise
 */
export const getByKey = async (options) => {
  let target =
    url +
    options.route +
    page +
    options.page +
    size +
    options.size +
    '&langCode=' +
    options.locale;

  const response = await fetch(target);

  return response;
};

/**
 *
 * Post Api
 *
 * @param string url
 * @param obj data
 * @return promise
 */
export const post = async (options, data) => {
  let url = getPostUrl(options);

  const response = await fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      Accept: 'application/json',
      dataType: 'json',
      'Content-Type': 'application/json; charset=utf-8',
    },
  });

  return response;
};

export const setStorageItem = async (key, object) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(object));
    return true;
  } catch (e) {
    return e;
  }
};

export const getStorageItem = async (key) => {
  try {
    const object = await AsyncStorage.getItem(key);
    return JSON.parse(object);
  } catch (error) {
    return 'Error : ', error;
  }
};
