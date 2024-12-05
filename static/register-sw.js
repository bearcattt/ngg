"use strict";
/**
 * Distributed with Ultraviolet and compatible with most configurations.
 */
const stockSW = "/static/uv-sw.js";

/**
 * List of hostnames that are allowed to run serviceworkers on http:
 */
const swAllowedHostnames = ["localhost", "127.0.0.1"];

/**
 * Global util
 * Used in 404.html and index.html
 */
async function registerSW() {
  await navigator.serviceWorker.register(stockSW, {
    scope: __uv$config.prefix,
  });
}
