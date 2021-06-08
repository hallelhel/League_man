
function getTeam939(){

    return{status : 200 , statusText : "OK"
    ,
    headers: {
      date: "Tue, 08 Jun 2021 10:49:26 GMT",
      "content-type": "application/json",
      "transfer-encoding": "chunked",
      connection: "close",
      "cache-control": "no-cache, private",
      "x-ratelimit-limit": "180",
      "x-ratelimit-remaining": "177",
      pragma: "no-cache",
      expires: "-1",
      "access-control-allow-origin": "*",
      "cf-cache-status": "DYNAMIC",
      "cf-request-id": "0a8cd6e4660000ad67930b0000000001",
      "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
      "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v2?s=F71aGRWAKgCUmeVig2RZjSTpBoX4FzqALVnpX6pbhY39QSZTcR%2BXNuCfKKFj3RbX4ckA1hdHqK5K%2F%2F%2BME0t97M3Y2UF4dUBNZO1RLXy2onzd5BnElpFNluPZGUQHh1YcRNU%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
      nel: "{\"report_to\":\"cf-nel\",\"max_age\":604800}",
      server: "cloudflare",
      "cf-ray": "65c18db3d952ad67-TLV",
    },
    config: {
      url: "https://soccer.sportmonks.com/api/v2.0/teams/1020",
      method: "get",
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": "axios/0.21.1",
      },
      params: {
        include: "league",
        api_token: "k7sFqtrMuRacf25VT3pQ5DrqyOjrls03zXvIyz8JNV3Cul7DxZRMJ6Y7VNZx",
      },
      transformRequest: [
        function transformRequest(data, headers) {
          normalizeHeaderName(headers, 'Accept');
          normalizeHeaderName(headers, 'Content-Type');
          if (utils.isFormData(data) ||
            utils.isArrayBuffer(data) ||
            utils.isBuffer(data) ||
            utils.isStream(data) ||
            utils.isFile(data) ||
            utils.isBlob(data)
          ) {
            return data;
          }
          if (utils.isArrayBufferView(data)) {
            return data.buffer;
          }
          if (utils.isURLSearchParams(data)) {
            setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
            return data.toString();
          }
          if (utils.isObject(data)) {
            setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
            return JSON.stringify(data);
          }
          return data;
        },
      ],
      transformResponse: [
        function transformResponse(data) {
          /*eslint no-param-reassign:0*/
          if (typeof data === 'string') {
            try {
              data = JSON.parse(data);
            } catch (e) { /* Ignore */ }
          }
          return data;
        },
      ],
      timeout: 0,
      adapter: function httpAdapter(config) {
        return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
          var resolve = function resolve(value) {
            resolvePromise(value);
          };
          var reject = function reject(value) {
            rejectPromise(value);
          };
          var data = config.data;
          var headers = config.headers;
        
          // Set User-Agent (required by some servers)
          // Only set header if it hasn't been set in config
          // See https://github.com/axios/axios/issues/69
          if (!headers['User-Agent'] && !headers['user-agent']) {
            headers['User-Agent'] = 'axios/' + pkg.version;
          }
        
          if (data && !utils.isStream(data)) {
            if (Buffer.isBuffer(data)) {
              // Nothing to do...
            } else if (utils.isArrayBuffer(data)) {
              data = Buffer.from(new Uint8Array(data));
            } else if (utils.isString(data)) {
              data = Buffer.from(data, 'utf-8');
            } else {
              return reject(createError(
                'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
                config
              ));
            }
        
            // Add Content-Length header if data exists
            headers['Content-Length'] = data.length;
          }
        
          // HTTP basic authentication
          var auth = undefined;
          if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password || '';
            auth = username + ':' + password;
          }
        
          // Parse url
          var fullPath = buildFullPath(config.baseURL, config.url);
          var parsed = url.parse(fullPath);
          var protocol = parsed.protocol || 'http:';
        
          if (!auth && parsed.auth) {
            var urlAuth = parsed.auth.split(':');
            var urlUsername = urlAuth[0] || '';
            var urlPassword = urlAuth[1] || '';
            auth = urlUsername + ':' + urlPassword;
          }
        
          if (auth) {
            delete headers.Authorization;
          }
        
          var isHttpsRequest = isHttps.test(protocol);
          var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
        
          var options = {
            path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
            method: config.method.toUpperCase(),
            headers: headers,
            agent: agent,
            agents: { http: config.httpAgent, https: config.httpsAgent },
            auth: auth
          };
        
          if (config.socketPath) {
            options.socketPath = config.socketPath;
          } else {
            options.hostname = parsed.hostname;
            options.port = parsed.port;
          }
        
          var proxy = config.proxy;
          if (!proxy && proxy !== false) {
            var proxyEnv = protocol.slice(0, -1) + '_proxy';
            var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
            if (proxyUrl) {
              var parsedProxyUrl = url.parse(proxyUrl);
              var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
              var shouldProxy = true;
        
              if (noProxyEnv) {
                var noProxy = noProxyEnv.split(',').map(function trim(s) {
                  return s.trim();
                });
        
                shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
                  if (!proxyElement) {
                    return false;
                  }
                  if (proxyElement === '*') {
                    return true;
                  }
                  if (proxyElement[0] === '.' &&
                      parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
                    return true;
                  }
        
                  return parsed.hostname === proxyElement;
                });
              }
        
              if (shouldProxy) {
                proxy = {
                  host: parsedProxyUrl.hostname,
                  port: parsedProxyUrl.port,
                  protocol: parsedProxyUrl.protocol
                };
        
                if (parsedProxyUrl.auth) {
                  var proxyUrlAuth = parsedProxyUrl.auth.split(':');
                  proxy.auth = {
                    username: proxyUrlAuth[0],
                    password: proxyUrlAuth[1]
                  };
                }
              }
            }
          }
        
          if (proxy) {
            options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
            setProxy(options, proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
          }
        
          var transport;
          var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
          if (config.transport) {
            transport = config.transport;
          } else if (config.maxRedirects === 0) {
            transport = isHttpsProxy ? https : http;
          } else {
            if (config.maxRedirects) {
              options.maxRedirects = config.maxRedirects;
            }
            transport = isHttpsProxy ? httpsFollow : httpFollow;
          }
        
          if (config.maxBodyLength > -1) {
            options.maxBodyLength = config.maxBodyLength;
          }
        
          // Create the request
          var req = transport.request(options, function handleResponse(res) {
            if (req.aborted) return;
        
            // uncompress the response body transparently if required
            var stream = res;
        
            // return the last request in case of redirects
            var lastRequest = res.req || req;
        
        
            // if no content, is HEAD request or decompress disabled we should not decompress
            if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
              switch (res.headers['content-encoding']) {
              /*eslint default-case:0*/
              case 'gzip':
              case 'compress':
              case 'deflate':
              // add the unzipper to the body stream processing pipeline
                stream = stream.pipe(zlib.createUnzip());
        
                // remove the content-encoding in order to not confuse downstream operations
                delete res.headers['content-encoding'];
                break;
              }
            }
        
            var response = {
              status: res.statusCode,
              statusText: res.statusMessage,
              headers: res.headers,
              config: config,
              request: lastRequest
            };
        
            if (config.responseType === 'stream') {
              response.data = stream;
              settle(resolve, reject, response);
            } else {
              var responseBuffer = [];
              stream.on('data', function handleStreamData(chunk) {
                responseBuffer.push(chunk);
        
                // make sure the content length is not over the maxContentLength if specified
                if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
                  stream.destroy();
                  reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
                    config, null, lastRequest));
                }
              });
        
              stream.on('error', function handleStreamError(err) {
                if (req.aborted) return;
                reject(enhanceError(err, config, null, lastRequest));
              });
        
              stream.on('end', function handleStreamEnd() {
                var responseData = Buffer.concat(responseBuffer);
                if (config.responseType !== 'arraybuffer') {
                  responseData = responseData.toString(config.responseEncoding);
                  if (!config.responseEncoding || config.responseEncoding === 'utf8') {
                    responseData = utils.stripBOM(responseData);
                  }
                }
        
                response.data = responseData;
                settle(resolve, reject, response);
              });
            }
          });
        
          // Handle errors
          req.on('error', function handleRequestError(err) {
            if (req.aborted && err.code !== 'ERR_FR_TOO_MANY_REDIRECTS') return;
            reject(enhanceError(err, config, null, req));
          });
        
          // Handle request timeout
          if (config.timeout) {
            // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
            // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
            // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
            // And then these socket which be hang up will devoring CPU little by little.
            // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
            req.setTimeout(config.timeout, function handleRequestTimeout() {
              req.abort();
              reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
            });
          }
        
          if (config.cancelToken) {
            // Handle cancellation
            config.cancelToken.promise.then(function onCanceled(cancel) {
              if (req.aborted) return;
        
              req.abort();
              reject(cancel);
            });
          }
        
          // Send the request
          if (utils.isStream(data)) {
            data.on('error', function handleStreamError(err) {
              reject(enhanceError(err, config, null, req));
            }).pipe(req);
          } else {
            req.end(data);
          }
        });
      },
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
      maxBodyLength: -1,
      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      },
      data: undefined,
    },
    request: {
      _events: {
        socket: function (arg1, arg2, arg3) {
          this._redirectable.emit(event, arg1, arg2, arg3);
        },
        abort: function (arg1, arg2, arg3) {
          this._redirectable.emit(event, arg1, arg2, arg3);
        },
        aborted: function (arg1, arg2, arg3) {
          this._redirectable.emit(event, arg1, arg2, arg3);
        },
        connect: function (arg1, arg2, arg3) {
          this._redirectable.emit(event, arg1, arg2, arg3);
        },
        error: function (arg1, arg2, arg3) {
          this._redirectable.emit(event, arg1, arg2, arg3);
        },
        timeout: function (arg1, arg2, arg3) {
          this._redirectable.emit(event, arg1, arg2, arg3);
        },
        prefinish: function requestOnPrefinish() {
          const req = this;
          
          if (req.shouldKeepAlive && req._ended)
            responseKeepAlive(req);
        },
      },
      _eventsCount: 7,
      _maxListeners: undefined,
      outputData: [
      ],
      outputSize: 0,
      writable: true,
      destroyed: false,
      _last: true,
      chunkedEncoding: false,
      shouldKeepAlive: false,
      _defaultKeepAlive: true,
      useChunkedEncodingByDefault: false,
      sendDate: false,
      _removedConnection: false,
      _removedContLen: false,
      _removedTE: false,
      _contentLength: 0,
      _hasBody: true,
      _trailer: "",
      finished: true,
      _headerSent: true,
      socket: {
        _tlsOptions: {
          allowHalfOpen: undefined,
          pipe: false,
          secureContext: {
            context: {
            },
            singleUse: true,
          },
          isServer: false,
          requestCert: true,
          rejectUnauthorized: true,
          session: undefined,
          ALPNProtocols: undefined,
          requestOCSP: undefined,
          enableTrace: undefined,
          pskCallback: undefined,
          highWaterMark: undefined,
        },
        _secureEstablished: true,
        _securePending: false,
        _newSessionPending: false,
        _controlReleased: true,
        secureConnecting: false,
        _SNICallback: null,
        servername: "soccer.sportmonks.com",
        alpnProtocol: false,
        authorized: true,
        authorizationError: null,
        encrypted: true,
        _events: {
          close: [
            function onSocketCloseDestroySSL() {
              // Make sure we are not doing it on OpenSSL's stack
              setImmediate(destroySSL, this);
              this[kRes] = null;
            },
            function () { [native_code] },
            function onClose(err) {
              debug('CLIENT socket onClose');
              // This is the only place where sockets get removed from the Agent.
              // If you want to remove a socket from the pool, just close it.
              // All socket errors end in a close event anyway.
              agent.removeSocket(s, options);
            },
            function socketCloseListener() {
              const socket = this;
              const req = socket._httpMessage;
              debug('HTTP socket close');
              
              // Pull through final chunk, if anything is buffered.
              // the ondata function will handle it properly, and this
              // is a no-op if no final chunk remains.
              socket.read();
              
              // NOTE: It's important to get parser here, because it could be freed by
              // the `socketOnData`.
              const parser = socket.parser;
              const res = req.res;
              
              req.destroyed = true;
              if (res) {
                // Socket closed before we emitted 'end' below.
                if (!res.complete) {
                  res.aborted = true;
                  res.emit('aborted');
                }
                req.emit('close');
                if (!res.aborted && res.readable) {
                  res.on('end', function() {
                    this.emit('close');
                  });
                  res.push(null);
                } else {
                  res.emit('close');
                }
              } else {
                if (!req.socket._hadError) {
                  // This socket error fired before we started to
                  // receive a response. The error needs to
                  // fire on the request.
                  req.socket._hadError = true;
                  req.emit('error', connResetException('socket hang up'));
                }
                req.emit('close');
              }
              
              // Too bad.  That output wasn't getting written.
              // This is pretty terrible that it doesn't raise an error.
              // Fixed better in v0.10
              if (req.outputData)
                req.outputData.length = 0;
              
              if (parser) {
                parser.finish();
                freeParser(parser, req, socket);
              }
            },
          ],
          end: function onReadableStreamEnd() {
            if (!this.allowHalfOpen) {
              this.write = writeAfterFIN;
              if (this.writable)
                this.end();
              else if (!this.writableLength)
                this.destroy();
            } else if (!this.destroyed && !this.writable && !this.writableLength)
              this.destroy();
          },
          newListener: function keylogNewListener(event) {
            if (event !== 'keylog')
              return;
            
            ssl.enableKeylogCallback();
            
            // Remove this listener since it's no longer needed.
            this.removeListener('newListener', keylogNewListener);
          },
          secure: function onConnectSecure() {
            const options = this[kConnectOptions];
            
            // Check the size of DHE parameter above minimum requirement
            // specified in options.
            const ekeyinfo = this.getEphemeralKeyInfo();
            if (ekeyinfo.type === 'DH' && ekeyinfo.size < options.minDHSize) {
              const err = new ERR_TLS_DH_PARAM_SIZE(ekeyinfo.size);
              debug('client emit:', err);
              this.emit('error', err);
              this.destroy();
              return;
            }
            
            let verifyError = this._handle.verifyError();
            
            // Verify that server's identity matches it's certificate's names
            // Unless server has resumed our existing session
            if (!verifyError && !this.isSessionReused()) {
              const hostname = options.servername ||
                             options.host ||
                             (options.socket && options.socket._host) ||
                             'localhost';
              const cert = this.getPeerCertificate(true);
              verifyError = options.checkServerIdentity(hostname, cert);
            }
            
            if (verifyError) {
              this.authorized = false;
              this.authorizationError = verifyError.code || verifyError.message;
            
              if (options.rejectUnauthorized) {
                this.destroy(verifyError);
                return;
              }
              debug('client emit secureConnect. rejectUnauthorized: %s, ' +
                    'authorizationError: %s', options.rejectUnauthorized,
                    this.authorizationError);
              this.secureConnecting = false;
              this.emit('secureConnect');
            } else {
              this.authorized = true;
              debug('client emit secureConnect. authorized:', this.authorized);
              this.secureConnecting = false;
              this.emit('secureConnect');
            }
            
            this[kIsVerified] = true;
            const session = this[kPendingSession];
            this[kPendingSession] = null;
            if (session)
              this.emit('session', session);
            
            this.removeListener('end', onConnectEnd);
          },
          session: (session) => {
            this._cacheSession(options._agentKey, session);
          },
          free: function onFree() {
            debug('CLIENT socket onFree');
            agent.emit('free', s, options);
          },
          timeout: function onTimeout() {
            debug('CLIENT socket onTimeout');
            
            // Destroy if in free list.
            // TODO(ronag): Always destroy, even if not in free list.
            const sockets = agent.freeSockets;
            for (const name of ObjectKeys(sockets)) {
              if (sockets[name].includes(s)) {
                return s.destroy();
              }
            }
          },
          agentRemove: function onRemove() {
            // We need this function for cases like HTTP 'upgrade'
            // (defined by WebSockets) where we need to remove a socket from the
            // pool because it'll be locked up indefinitely
            debug('CLIENT socket onRemove');
            agent.removeSocket(s, options);
            s.removeListener('close', onClose);
            s.removeListener('free', onFree);
            s.removeListener('timeout', onTimeout);
            s.removeListener('agentRemove', onRemove);
          },
          error: function socketErrorListener(err) {
            const socket = this;
            const req = socket._httpMessage;
            debug('SOCKET ERROR:', err.message, err.stack);
            
            if (req) {
              // For Safety. Some additional errors might fire later on
              // and we need to make sure we don't double-fire the error event.
              req.socket._hadError = true;
              req.emit('error', err);
            }
            
            const parser = socket.parser;
            if (parser) {
              parser.finish();
              freeParser(parser, req, socket);
            }
            
            // Ensure that no further data will come out of the socket
            socket.removeListener('data', socketOnData);
            socket.removeListener('end', socketOnEnd);
            socket.destroy();
          },
          finish: function () { [native_code] },
        },
        _eventsCount: 10,
        connecting: false,
        _hadError: false,
        _parent: null,
        _host: "soccer.sportmonks.com",
        _readableState: {
          objectMode: false,
          highWaterMark: 16384,
          buffer: {
            head: null,
            tail: null,
            length: 0,
          },
          length: 0,
          pipes: [
          ],
          flowing: true,
          ended: false,
          endEmitted: false,
          reading: true,
          sync: false,
          needReadable: true,
          emittedReadable: false,
          readableListening: false,
          resumeScheduled: false,
          errorEmitted: false,
          emitClose: false,
          autoDestroy: false,
          destroyed: false,
          errored: null,
          closed: false,
          closeEmitted: false,
          defaultEncoding: "utf8",
          awaitDrainWriters: null,
          multiAwaitDrain: false,
          readingMore: false,
          decoder: null,
          encoding: null,
        },
        _maxListeners: undefined,
        _writableState: {
          objectMode: false,
          highWaterMark: 16384,
          finalCalled: true,
          needDrain: false,
          ending: true,
          ended: true,
          finished: false,
          destroyed: false,
          decodeStrings: false,
          defaultEncoding: "utf8",
          length: 0,
          writing: false,
          corked: 0,
          sync: false,
          bufferProcessing: false,
          onwrite: function () { [native_code] },
          writecb: null,
          writelen: 0,
          afterWriteTickInfo: null,
          buffered: [
          ],
          bufferedIndex: 0,
          allBuffers: true,
          allNoop: true,
          pendingcb: 1,
          prefinished: false,
          errorEmitted: false,
          emitClose: false,
          autoDestroy: false,
          errored: null,
          closed: false,
          closeEmitted: false,
          writable: true,
        },
        allowHalfOpen: false,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: "",
        server: undefined,
        _server: null,
        ssl: {
          _parent: {
            reading: true,
            onconnection: null,
          },
          _parentWrap: undefined,
          _secureContext: {
            context: {
            },
            singleUse: true,
          },
          reading: true,
          onkeylog: function onkeylog(line) {
            debug('onkeylog');
            this[owner_symbol].emit('keylog', line);
          },
          onhandshakestart: () => {},
          onhandshakedone: () => {
            debug('client onhandshakedone');
            this._finishInit();
          },
          onocspresponse: function onocspresponse(resp) {
            debug('client onocspresponse');
            this[owner_symbol].emit('OCSPResponse', resp);
          },
          onnewsession: function onnewsessionclient(sessionId, session) {
            debug('client emit session');
            const owner = this[owner_symbol];
            if (owner[kIsVerified]) {
              owner.emit('session', session);
            } else {
              owner[kPendingSession] = session;
            }
          },
          onerror: function onerror(err) {
            const owner = this[owner_symbol];
            debug('%s onerror %s had? %j',
                  owner._tlsOptions.isServer ? 'server' : 'client', err,
                  owner._hadError);
            
            if (owner._hadError)
              return;
            
            owner._hadError = true;
            
            // Destroy socket if error happened before handshake's finish
            if (!owner._secureEstablished) {
              // When handshake fails control is not yet released,
              // so self._tlsError will return null instead of actual error
              owner.destroy(err);
            } else if (owner._tlsOptions.isServer &&
                       owner._rejectUnauthorized &&
                       /peer did not return a certificate/.test(err.message)) {
              // Ignore server's authorization errors
              owner.destroy();
            } else {
              // Emit error
              owner._emitTLSError(err);
            }
          },
        },
        _requestCert: true,
        _rejectUnauthorized: true,
        parser: null,
        _httpMessage: [Circular],
      },
      _header: "GET /api/v2.0/teams/1020?include=league&api_token=k7sFqtrMuRacf25VT3pQ5DrqyOjrls03zXvIyz8JNV3Cul7DxZRMJ6Y7VNZx HTTP/1.1\r\nAccept: application/json, text/plain, */*\r\nUser-Agent: axios/0.21.1\r\nHost: soccer.sportmonks.com\r\nConnection: close\r\n\r\n",
      _keepAliveTimeout: 0,
      _onPendingData: function noopPendingOutput(amount) {},
      agent: {
        _events: {
          free: (socket, options) => {
            const name = this.getName(options);
            debug('agent.on(free)', name);
            
            // TODO(ronag): socket.destroy(err) might have been called
            // before coming here and have an 'error' scheduled. In the
            // case of socket.destroy() below this 'error' has no handler
            // and could cause unhandled exception.
            
            if (!socket.writable) {
              socket.destroy();
              return;
            }
            
            const requests = this.requests[name];
            if (requests && requests.length) {
              const req = requests.shift();
              const reqAsyncRes = req[kRequestAsyncResource];
              if (reqAsyncRes) {
                // Run request within the original async context.
                reqAsyncRes.runInAsyncScope(() => {
                  asyncResetHandle(socket);
                  setRequestSocket(this, req, socket);
                });
                req[kRequestAsyncResource] = null;
              } else {
                setRequestSocket(this, req, socket);
              }
              if (requests.length === 0) {
                delete this.requests[name];
              }
              return;
            }
            
            // If there are no pending requests, then put it in
            // the freeSockets pool, but only if we're allowed to do so.
            const req = socket._httpMessage;
            if (!req || !req.shouldKeepAlive || !this.keepAlive) {
              socket.destroy();
              return;
            }
            
            const freeSockets = this.freeSockets[name] || [];
            const freeLen = freeSockets.length;
            let count = freeLen;
            if (this.sockets[name])
              count += this.sockets[name].length;
            
            if (this.totalSocketCount > this.maxTotalSockets ||
                count > this.maxSockets ||
                freeLen >= this.maxFreeSockets ||
                !this.keepSocketAlive(socket)) {
              socket.destroy();
              return;
            }
            
            this.freeSockets[name] = freeSockets;
            socket[async_id_symbol] = -1;
            socket._httpMessage = null;
            this.removeSocket(socket, options);
            
            socket.once('error', freeSocketErrorListener);
            freeSockets.push(socket);
          },
          newListener: function maybeEnableKeylog(eventName) {
            if (eventName === 'keylog') {
              this.removeListener('newListener', maybeEnableKeylog);
              // Future sockets will listen on keylog at creation.
              const agent = this;
              this[kOnKeylog] = function onkeylog(keylog) {
                agent.emit('keylog', keylog, this);
              };
              // Existing sockets will start listening on keylog now.
              for (const socket of ObjectValues(this.sockets)) {
                socket.on('keylog', this[kOnKeylog]);
              }
            }
          },
        },
        _eventsCount: 2,
        _maxListeners: undefined,
        defaultPort: 443,
        protocol: "https:",
        options: {
          path: null,
        },
        requests: {
        },
        sockets: {
          "soccer.sportmonks.com:443::::::::::::::::::": [
            {
              _tlsOptions: {
                allowHalfOpen: undefined,
                pipe: false,
                secureContext: {
                  context: {
                  },
                  singleUse: true,
                },
                isServer: false,
                requestCert: true,
                rejectUnauthorized: true,
                session: undefined,
                ALPNProtocols: undefined,
                requestOCSP: undefined,
                enableTrace: undefined,
                pskCallback: undefined,
                highWaterMark: undefined,
              },
              _secureEstablished: true,
              _securePending: false,
              _newSessionPending: false,
              _controlReleased: true,
              secureConnecting: false,
              _SNICallback: null,
              servername: "soccer.sportmonks.com",
              alpnProtocol: false,
              authorized: true,
              authorizationError: null,
              encrypted: true,
              _events: {
                close: [
                  function onSocketCloseDestroySSL() {
                    // Make sure we are not doing it on OpenSSL's stack
                    setImmediate(destroySSL, this);
                    this[kRes] = null;
                  },
                  function () { [native_code] },
                  function onClose(err) {
                    debug('CLIENT socket onClose');
                    // This is the only place where sockets get removed from the Agent.
                    // If you want to remove a socket from the pool, just close it.
                    // All socket errors end in a close event anyway.
                    agent.removeSocket(s, options);
                  },
                  function socketCloseListener() {
                    const socket = this;
                    const req = socket._httpMessage;
                    debug('HTTP socket close');
                    
                    // Pull through final chunk, if anything is buffered.
                    // the ondata function will handle it properly, and this
                    // is a no-op if no final chunk remains.
                    socket.read();
                    
                    // NOTE: It's important to get parser here, because it could be freed by
                    // the `socketOnData`.
                    const parser = socket.parser;
                    const res = req.res;
                    
                    req.destroyed = true;
                    if (res) {
                      // Socket closed before we emitted 'end' below.
                      if (!res.complete) {
                        res.aborted = true;
                        res.emit('aborted');
                      }
                      req.emit('close');
                      if (!res.aborted && res.readable) {
                        res.on('end', function() {
                          this.emit('close');
                        });
                        res.push(null);
                      } else {
                        res.emit('close');
                      }
                    } else {
                      if (!req.socket._hadError) {
                        // This socket error fired before we started to
                        // receive a response. The error needs to
                        // fire on the request.
                        req.socket._hadError = true;
                        req.emit('error', connResetException('socket hang up'));
                      }
                      req.emit('close');
                    }
                    
                    // Too bad.  That output wasn't getting written.
                    // This is pretty terrible that it doesn't raise an error.
                    // Fixed better in v0.10
                    if (req.outputData)
                      req.outputData.length = 0;
                    
                    if (parser) {
                      parser.finish();
                      freeParser(parser, req, socket);
                    }
                  },
                ],
                end: function onReadableStreamEnd() {
                  if (!this.allowHalfOpen) {
                    this.write = writeAfterFIN;
                    if (this.writable)
                      this.end();
                    else if (!this.writableLength)
                      this.destroy();
                  } else if (!this.destroyed && !this.writable && !this.writableLength)
                    this.destroy();
                },
                newListener: function keylogNewListener(event) {
                  if (event !== 'keylog')
                    return;
                  
                  ssl.enableKeylogCallback();
                  
                  // Remove this listener since it's no longer needed.
                  this.removeListener('newListener', keylogNewListener);
                },
                secure: function onConnectSecure() {
                  const options = this[kConnectOptions];
                  
                  // Check the size of DHE parameter above minimum requirement
                  // specified in options.
                  const ekeyinfo = this.getEphemeralKeyInfo();
                  if (ekeyinfo.type === 'DH' && ekeyinfo.size < options.minDHSize) {
                    const err = new ERR_TLS_DH_PARAM_SIZE(ekeyinfo.size);
                    debug('client emit:', err);
                    this.emit('error', err);
                    this.destroy();
                    return;
                  }
                  
                  let verifyError = this._handle.verifyError();
                  
                  // Verify that server's identity matches it's certificate's names
                  // Unless server has resumed our existing session
                  if (!verifyError && !this.isSessionReused()) {
                    const hostname = options.servername ||
                                   options.host ||
                                   (options.socket && options.socket._host) ||
                                   'localhost';
                    const cert = this.getPeerCertificate(true);
                    verifyError = options.checkServerIdentity(hostname, cert);
                  }
                  
                  if (verifyError) {
                    this.authorized = false;
                    this.authorizationError = verifyError.code || verifyError.message;
                  
                    if (options.rejectUnauthorized) {
                      this.destroy(verifyError);
                      return;
                    }
                    debug('client emit secureConnect. rejectUnauthorized: %s, ' +
                          'authorizationError: %s', options.rejectUnauthorized,
                          this.authorizationError);
                    this.secureConnecting = false;
                    this.emit('secureConnect');
                  } else {
                    this.authorized = true;
                    debug('client emit secureConnect. authorized:', this.authorized);
                    this.secureConnecting = false;
                    this.emit('secureConnect');
                  }
                  
                  this[kIsVerified] = true;
                  const session = this[kPendingSession];
                  this[kPendingSession] = null;
                  if (session)
                    this.emit('session', session);
                  
                  this.removeListener('end', onConnectEnd);
                },
                session: (session) => {
                  this._cacheSession(options._agentKey, session);
                },
                free: function onFree() {
                  debug('CLIENT socket onFree');
                  agent.emit('free', s, options);
                },
                timeout: function onTimeout() {
                  debug('CLIENT socket onTimeout');
                  
                  // Destroy if in free list.
                  // TODO(ronag): Always destroy, even if not in free list.
                  const sockets = agent.freeSockets;
                  for (const name of ObjectKeys(sockets)) {
                    if (sockets[name].includes(s)) {
                      return s.destroy();
                    }
                  }
                },
                agentRemove: function onRemove() {
                  // We need this function for cases like HTTP 'upgrade'
                  // (defined by WebSockets) where we need to remove a socket from the
                  // pool because it'll be locked up indefinitely
                  debug('CLIENT socket onRemove');
                  agent.removeSocket(s, options);
                  s.removeListener('close', onClose);
                  s.removeListener('free', onFree);
                  s.removeListener('timeout', onTimeout);
                  s.removeListener('agentRemove', onRemove);
                },
                error: function socketErrorListener(err) {
                  const socket = this;
                  const req = socket._httpMessage;
                  debug('SOCKET ERROR:', err.message, err.stack);
                  
                  if (req) {
                    // For Safety. Some additional errors might fire later on
                    // and we need to make sure we don't double-fire the error event.
                    req.socket._hadError = true;
                    req.emit('error', err);
                  }
                  
                  const parser = socket.parser;
                  if (parser) {
                    parser.finish();
                    freeParser(parser, req, socket);
                  }
                  
                  // Ensure that no further data will come out of the socket
                  socket.removeListener('data', socketOnData);
                  socket.removeListener('end', socketOnEnd);
                  socket.destroy();
                },
                finish: function () { [native_code] },
              },
              _eventsCount: 10,
              connecting: false,
              _hadError: false,
              _parent: null,
              _host: "soccer.sportmonks.com",
              _readableState: {
                objectMode: false,
                highWaterMark: 16384,
                buffer: {
                  head: null,
                  tail: null,
                  length: 0,
                },
                length: 0,
                pipes: [
                ],
                flowing: true,
                ended: false,
                endEmitted: false,
                reading: true,
                sync: false,
                needReadable: true,
                emittedReadable: false,
                readableListening: false,
                resumeScheduled: false,
                errorEmitted: false,
                emitClose: false,
                autoDestroy: false,
                destroyed: false,
                errored: null,
                closed: false,
                closeEmitted: false,
                defaultEncoding: "utf8",
                awaitDrainWriters: null,
                multiAwaitDrain: false,
                readingMore: false,
                decoder: null,
                encoding: null,
              },
              _maxListeners: undefined,
              _writableState: {
                objectMode: false,
                highWaterMark: 16384,
                finalCalled: true,
                needDrain: false,
                ending: true,
                ended: true,
                finished: false,
                destroyed: false,
                decodeStrings: false,
                defaultEncoding: "utf8",
                length: 0,
                writing: false,
                corked: 0,
                sync: false,
                bufferProcessing: false,
                onwrite: function () { [native_code] },
                writecb: null,
                writelen: 0,
                afterWriteTickInfo: null,
                buffered: [
                ],
                bufferedIndex: 0,
                allBuffers: true,
                allNoop: true,
                pendingcb: 1,
                prefinished: false,
                errorEmitted: false,
                emitClose: false,
                autoDestroy: false,
                errored: null,
                closed: false,
                closeEmitted: false,
                writable: true,
              },
              allowHalfOpen: false,
              _sockname: null,
              _pendingData: null,
              _pendingEncoding: "",
              server: undefined,
              _server: null,
              ssl: {
                _parent: {
                  reading: true,
                  onconnection: null,
                },
                _parentWrap: undefined,
                _secureContext: {
                  context: {
                  },
                  singleUse: true,
                },
                reading: true,
                onkeylog: function onkeylog(line) {
                  debug('onkeylog');
                  this[owner_symbol].emit('keylog', line);
                },
                onhandshakestart: () => {},
                onhandshakedone: () => {
                  debug('client onhandshakedone');
                  this._finishInit();
                },
                onocspresponse: function onocspresponse(resp) {
                  debug('client onocspresponse');
                  this[owner_symbol].emit('OCSPResponse', resp);
                },
                onnewsession: function onnewsessionclient(sessionId, session) {
                  debug('client emit session');
                  const owner = this[owner_symbol];
                  if (owner[kIsVerified]) {
                    owner.emit('session', session);
                  } else {
                    owner[kPendingSession] = session;
                  }
                },
                onerror: function onerror(err) {
                  const owner = this[owner_symbol];
                  debug('%s onerror %s had? %j',
                        owner._tlsOptions.isServer ? 'server' : 'client', err,
                        owner._hadError);
                  
                  if (owner._hadError)
                    return;
                  
                  owner._hadError = true;
                  
                  // Destroy socket if error happened before handshake's finish
                  if (!owner._secureEstablished) {
                    // When handshake fails control is not yet released,
                    // so self._tlsError will return null instead of actual error
                    owner.destroy(err);
                  } else if (owner._tlsOptions.isServer &&
                             owner._rejectUnauthorized &&
                             /peer did not return a certificate/.test(err.message)) {
                    // Ignore server's authorization errors
                    owner.destroy();
                  } else {
                    // Emit error
                    owner._emitTLSError(err);
                  }
                },
              },
              _requestCert: true,
              _rejectUnauthorized: true,
              parser: null,
              _httpMessage: [Circular],
            },
          ],
        },
        freeSockets: {
        },
        keepAliveMsecs: 1000,
        keepAlive: false,
        maxSockets: Infinity,
        maxFreeSockets: 256,
        scheduling: "fifo",
        maxTotalSockets: Infinity,
        totalSocketCount: 1,
        maxCachedSessions: 100,
        _sessionCache: {
          map: {
            "soccer.sportmonks.com:443::::::::::::::::::": {
              "0": 48,
              "1": 130,
              "2": 6,
              "3": 48,
              "4": 2,
              "5": 1,
              "6": 1,
              "7": 2,
              "8": 2,
              "9": 3,
              "10": 4,
              "11": 4,
              "12": 2,
              "13": 19,
              "14": 2,
              "15": 4,
              "16": 32,
              "17": 125,
              "18": 213,
              "19": 245,
              "20": 247,
              "21": 252,
              "22": 112,
              "23": 88,
              "24": 174,
              "25": 14,
              "26": 4,
              "27": 11,
              "28": 28,
              "29": 14,
              "30": 140,
              "31": 147,
              "32": 116,
              "33": 35,
              "34": 141,
              "35": 58,
              "36": 72,
              "37": 12,
              "38": 113,
              "39": 42,
              "40": 123,
              "41": 86,
              "42": 173,
              "43": 49,
              "44": 48,
              "45": 7,
              "46": 225,
              "47": 196,
              "48": 95,
              "49": 4,
              "50": 48,
              "51": 18,
              "52": 102,
              "53": 83,
              "54": 41,
              "55": 207,
              "56": 7,
              "57": 12,
              "58": 163,
              "59": 204,
              "60": 120,
              "61": 84,
              "62": 194,
              "63": 0,
              "64": 251,
              "65": 120,
              "66": 193,
              "67": 91,
              "68": 163,
              "69": 180,
              "70": 99,
              "71": 50,
              "72": 174,
              "73": 245,
              "74": 97,
              "75": 164,
              "76": 252,
              "77": 241,
              "78": 26,
              "79": 178,
              "80": 155,
              "81": 135,
              "82": 234,
              "83": 135,
              "84": 14,
              "85": 14,
              "86": 251,
              "87": 5,
              "88": 97,
              "89": 17,
              "90": 26,
              "91": 250,
              "92": 132,
              "93": 129,
              "94": 79,
              "95": 92,
              "96": 50,
              "97": 0,
              "98": 56,
              "99": 161,
              "100": 6,
              "101": 2,
              "102": 4,
              "103": 96,
              "104": 191,
              "105": 75,
              "106": 54,
              "107": 162,
              "108": 4,
              "109": 2,
              "110": 2,
              "111": 28,
              "112": 32,
              "113": 163,
              "114": 130,
              "115": 4,
              "116": 204,
              "117": 48,
              "118": 130,
              "119": 4,
              "120": 200,
              "121": 48,
              "122": 130,
              "123": 4,
              "124": 110,
              "125": 160,
              "126": 3,
              "127": 2,
              "128": 1,
              "129": 2,
              "130": 2,
              "131": 16,
              "132": 14,
              "133": 38,
              "134": 122,
              "135": 10,
              "136": 89,
              "137": 196,
              "138": 177,
              "139": 207,
              "140": 117,
              "141": 194,
              "142": 72,
              "143": 243,
              "144": 227,
              "145": 41,
              "146": 79,
              "147": 107,
              "148": 48,
              "149": 10,
              "150": 6,
              "151": 8,
              "152": 42,
              "153": 134,
              "154": 72,
              "155": 206,
              "156": 61,
              "157": 4,
              "158": 3,
              "159": 2,
              "160": 48,
              "161": 74,
              "162": 49,
              "163": 11,
              "164": 48,
              "165": 9,
              "166": 6,
              "167": 3,
              "168": 85,
              "169": 4,
              "170": 6,
              "171": 19,
              "172": 2,
              "173": 85,
              "174": 83,
              "175": 49,
              "176": 25,
              "177": 48,
              "178": 23,
              "179": 6,
              "180": 3,
              "181": 85,
              "182": 4,
              "183": 10,
              "184": 19,
              "185": 16,
              "186": 67,
              "187": 108,
              "188": 111,
              "189": 117,
              "190": 100,
              "191": 102,
              "192": 108,
              "193": 97,
              "194": 114,
              "195": 101,
              "196": 44,
              "197": 32,
              "198": 73,
              "199": 110,
              "200": 99,
              "201": 46,
              "202": 49,
              "203": 32,
              "204": 48,
              "205": 30,
              "206": 6,
              "207": 3,
              "208": 85,
              "209": 4,
              "210": 3,
              "211": 19,
              "212": 23,
              "213": 67,
              "214": 108,
              "215": 111,
              "216": 117,
              "217": 100,
              "218": 102,
              "219": 108,
              "220": 97,
              "221": 114,
              "222": 101,
              "223": 32,
              "224": 73,
              "225": 110,
              "226": 99,
              "227": 32,
              "228": 69,
              "229": 67,
              "230": 67,
              "231": 32,
              "232": 67,
              "233": 65,
              "234": 45,
              "235": 51,
              "236": 48,
              "237": 30,
              "238": 23,
              "239": 13,
              "240": 50,
              "241": 48,
              "242": 48,
              "243": 55,
              "244": 49,
              "245": 55,
              "246": 48,
              "247": 48,
              "248": 48,
              "249": 48,
              "250": 48,
              "251": 48,
              "252": 90,
              "253": 23,
              "254": 13,
              "255": 50,
              "256": 49,
              "257": 48,
              "258": 55,
              "259": 49,
              "260": 55,
              "261": 49,
              "262": 50,
              "263": 48,
              "264": 48,
              "265": 48,
              "266": 48,
              "267": 90,
              "268": 48,
              "269": 109,
              "270": 49,
              "271": 11,
              "272": 48,
              "273": 9,
              "274": 6,
              "275": 3,
              "276": 85,
              "277": 4,
              "278": 6,
              "279": 19,
              "280": 2,
              "281": 85,
              "282": 83,
              "283": 49,
              "284": 11,
              "285": 48,
              "286": 9,
              "287": 6,
              "288": 3,
              "289": 85,
              "290": 4,
              "291": 8,
              "292": 19,
              "293": 2,
              "294": 67,
              "295": 65,
              "296": 49,
              "297": 22,
              "298": 48,
              "299": 20,
              "300": 6,
              "301": 3,
              "302": 85,
              "303": 4,
              "304": 7,
              "305": 19,
              "306": 13,
              "307": 83,
              "308": 97,
              "309": 110,
              "310": 32,
              "311": 70,
              "312": 114,
              "313": 97,
              "314": 110,
              "315": 99,
              "316": 105,
              "317": 115,
              "318": 99,
              "319": 111,
              "320": 49,
              "321": 25,
              "322": 48,
              "323": 23,
              "324": 6,
              "325": 3,
              "326": 85,
              "327": 4,
              "328": 10,
              "329": 19,
              "330": 16,
              "331": 67,
              "332": 108,
              "333": 111,
              "334": 117,
              "335": 100,
              "336": 102,
              "337": 108,
              "338": 97,
              "339": 114,
              "340": 101,
              "341": 44,
              "342": 32,
              "343": 73,
              "344": 110,
              "345": 99,
              "346": 46,
              "347": 49,
              "348": 30,
              "349": 48,
              "350": 28,
              "351": 6,
              "352": 3,
              "353": 85,
              "354": 4,
              "355": 3,
              "356": 19,
              "357": 21,
              "358": 115,
              "359": 110,
              "360": 105,
              "361": 46,
              "362": 99,
              "363": 108,
              "364": 111,
              "365": 117,
              "366": 100,
              "367": 102,
              "368": 108,
              "369": 97,
              "370": 114,
              "371": 101,
              "372": 115,
              "373": 115,
              "374": 108,
              "375": 46,
              "376": 99,
              "377": 111,
              "378": 109,
              "379": 48,
              "380": 89,
              "381": 48,
              "382": 19,
              "383": 6,
              "384": 7,
              "385": 42,
              "386": 134,
              "387": 72,
              "388": 206,
              "389": 61,
              "390": 2,
              "391": 1,
              "392": 6,
              "393": 8,
              "394": 42,
              "395": 134,
              "396": 72,
              "397": 206,
              "398": 61,
              "399": 3,
              "400": 1,
              "401": 7,
              "402": 3,
              "403": 66,
              "404": 0,
              "405": 4,
              "406": 88,
              "407": 59,
              "408": 40,
              "409": 148,
              "410": 3,
              "411": 43,
              "412": 156,
              "413": 118,
              "414": 179,
              "415": 53,
              "416": 95,
              "417": 72,
              "418": 28,
              "419": 43,
              "420": 9,
              "421": 251,
              "422": 166,
              "423": 229,
              "424": 72,
              "425": 170,
              "426": 243,
              "427": 128,
              "428": 226,
              "429": 204,
              "430": 247,
              "431": 83,
              "432": 219,
              "433": 69,
              "434": 83,
              "435": 28,
              "436": 72,
              "437": 206,
              "438": 165,
              "439": 141,
              "440": 91,
              "441": 101,
              "442": 246,
              "443": 82,
              "444": 234,
              "445": 7,
              "446": 250,
              "447": 0,
              "448": 214,
              "449": 174,
              "450": 52,
              "451": 9,
              "452": 250,
              "453": 34,
              "454": 224,
              "455": 142,
              "456": 137,
              "457": 153,
              "458": 21,
              "459": 200,
              "460": 15,
              "461": 210,
              "462": 73,
              "463": 255,
              "464": 26,
              "465": 80,
              "466": 42,
              "467": 55,
              "468": 48,
              "469": 30,
              "470": 163,
              "471": 130,
              "472": 3,
              "473": 17,
              "474": 48,
              "475": 130,
              "476": 3,
              "477": 13,
              "478": 48,
              "479": 31,
              "480": 6,
              "481": 3,
              "482": 85,
              "483": 29,
              "484": 35,
              "485": 4,
              "486": 24,
              "487": 48,
              "488": 22,
              "489": 128,
              "490": 20,
              "491": 165,
              "492": 206,
              "493": 55,
              "494": 234,
              "495": 235,
              "496": 176,
              "497": 117,
              "498": 14,
              "499": 148,
              "500": 103,
              "501": 136,
              "502": 180,
              "503": 69,
              "504": 250,
              "505": 217,
              "506": 36,
              "507": 16,
              "508": 135,
              "509": 150,
              "510": 31,
              "511": 48,
              "512": 29,
              "513": 6,
              "514": 3,
              "515": 85,
              "516": 29,
              "517": 14,
              "518": 4,
              "519": 22,
              "520": 4,
              "521": 20,
              "522": 181,
              "523": 105,
              "524": 75,
              "525": 133,
              "526": 51,
              "527": 172,
              "528": 244,
              "529": 50,
              "530": 4,
              "531": 2,
              "532": 206,
              "533": 113,
              "534": 182,
              "535": 4,
              "536": 241,
              "537": 34,
              "538": 239,
              "539": 178,
              "540": 29,
              "541": 253,
              "542": 48,
              "543": 66,
              "544": 6,
              "545": 3,
              "546": 85,
              "547": 29,
              "548": 17,
              "549": 4,
              "550": 59,
              "551": 48,
              "552": 57,
              "553": 130,
              "554": 14,
              "555": 115,
              "556": 112,
              "557": 111,
              "558": 114,
              "559": 116,
              "560": 109,
              "561": 111,
              "562": 110,
              "563": 107,
              "564": 115,
              "565": 46,
              "566": 99,
              "567": 111,
              "568": 109,
              "569": 130,
              "570": 16,
              "571": 42,
              "572": 46,
              "573": 115,
              "574": 112,
              "575": 111,
              "576": 114,
              "577": 116,
              "578": 109,
              "579": 111,
              "580": 110,
              "581": 107,
              "582": 115,
              "583": 46,
              "584": 99,
              "585": 111,
              "586": 109,
              "587": 130,
              "588": 21,
              "589": 115,
              "590": 110,
              "591": 105,
              "592": 46,
              "593": 99,
              "594": 108,
              "595": 111,
              "596": 117,
              "597": 100,
              "598": 102,
              "599": 108,
              "600": 97,
              "601": 114,
              "602": 101,
              "603": 115,
              "604": 115,
              "605": 108,
              "606": 46,
              "607": 99,
              "608": 111,
              "609": 109,
              "610": 48,
              "611": 14,
              "612": 6,
              "613": 3,
              "614": 85,
              "615": 29,
              "616": 15,
              "617": 1,
              "618": 1,
              "619": 255,
              "620": 4,
              "621": 4,
              "622": 3,
              "623": 2,
              "624": 7,
              "625": 128,
              "626": 48,
              "627": 29,
              "628": 6,
              "629": 3,
              "630": 85,
              "631": 29,
              "632": 37,
              "633": 4,
              "634": 22,
              "635": 48,
              "636": 20,
              "637": 6,
              "638": 8,
              "639": 43,
              "640": 6,
              "641": 1,
              "642": 5,
              "643": 5,
              "644": 7,
              "645": 3,
              "646": 1,
              "647": 6,
              "648": 8,
              "649": 43,
              "650": 6,
              "651": 1,
              "652": 5,
              "653": 5,
              "654": 7,
              "655": 3,
              "656": 2,
              "657": 48,
              "658": 123,
              "659": 6,
              "660": 3,
              "661": 85,
              "662": 29,
              "663": 31,
              "664": 4,
              "665": 116,
              "666": 48,
              "667": 114,
              "668": 48,
              "669": 55,
              "670": 160,
              "671": 53,
              "672": 160,
              "673": 51,
              "674": 134,
              "675": 49,
              "676": 104,
              "677": 116,
              "678": 116,
              "679": 112,
              "680": 58,
              "681": 47,
              "682": 47,
              "683": 99,
              "684": 114,
              "685": 108,
              "686": 51,
              "687": 46,
              "688": 100,
              "689": 105,
              "690": 103,
              "691": 105,
              "692": 99,
              "693": 101,
              "694": 114,
              "695": 116,
              "696": 46,
              "697": 99,
              "698": 111,
              "699": 109,
              "700": 47,
              "701": 67,
              "702": 108,
              "703": 111,
              "704": 117,
              "705": 100,
              "706": 102,
              "707": 108,
              "708": 97,
              "709": 114,
              "710": 101,
              "711": 73,
              "712": 110,
              "713": 99,
              "714": 69,
              "715": 67,
              "716": 67,
              "717": 67,
              "718": 65,
              "719": 45,
              "720": 51,
              "721": 46,
              "722": 99,
              "723": 114,
              "724": 108,
              "725": 48,
              "726": 55,
              "727": 160,
              "728": 53,
              "729": 160,
              "730": 51,
              "731": 134,
              "732": 49,
              "733": 104,
              "734": 116,
              "735": 116,
              "736": 112,
              "737": 58,
              "738": 47,
              "739": 47,
              "740": 99,
              "741": 114,
              "742": 108,
              "743": 52,
              "744": 46,
              "745": 100,
              "746": 105,
              "747": 103,
              "748": 105,
              "749": 99,
              "750": 101,
              "751": 114,
              "752": 116,
              "753": 46,
              "754": 99,
              "755": 111,
              "756": 109,
              "757": 47,
              "758": 67,
              "759": 108,
              "760": 111,
              "761": 117,
              "762": 100,
              "763": 102,
              "764": 108,
              "765": 97,
              "766": 114,
              "767": 101,
              "768": 73,
              "769": 110,
              "770": 99,
              "771": 69,
              "772": 67,
              "773": 67,
              "774": 67,
              "775": 65,
              "776": 45,
              "777": 51,
              "778": 46,
              "779": 99,
              "780": 114,
              "781": 108,
              "782": 48,
              "783": 76,
              "784": 6,
              "785": 3,
              "786": 85,
              "787": 29,
              "788": 32,
              "789": 4,
              "790": 69,
              "791": 48,
              "792": 67,
              "793": 48,
              "794": 55,
              "795": 6,
              "796": 9,
              "797": 96,
              "798": 134,
              "799": 72,
              "800": 1,
              "801": 134,
              "802": 253,
              "803": 108,
              "804": 1,
              "805": 1,
              "806": 48,
              "807": 42,
              "808": 48,
              "809": 40,
              "810": 6,
              "811": 8,
              "812": 43,
              "813": 6,
              "814": 1,
              "815": 5,
              "816": 5,
              "817": 7,
              "818": 2,
              "819": 1,
              "820": 22,
              "821": 28,
              "822": 104,
              "823": 116,
              "824": 116,
              "825": 112,
              "826": 115,
              "827": 58,
              "828": 47,
              "829": 47,
              "830": 119,
              "831": 119,
              "832": 119,
              "833": 46,
              "834": 100,
              "835": 105,
              "836": 103,
              "837": 105,
              "838": 99,
              "839": 101,
              "840": 114,
              "841": 116,
              "842": 46,
              "843": 99,
              "844": 111,
              "845": 109,
              "846": 47,
              "847": 67,
              "848": 80,
              "849": 83,
              "850": 48,
              "851": 8,
              "852": 6,
              "853": 6,
              "854": 103,
              "855": 129,
              "856": 12,
              "857": 1,
              "858": 2,
              "859": 2,
              "860": 48,
              "861": 118,
              "862": 6,
              "863": 8,
              "864": 43,
              "865": 6,
              "866": 1,
              "867": 5,
              "868": 5,
              "869": 7,
              "870": 1,
              "871": 1,
              "872": 4,
              "873": 106,
              "874": 48,
              "875": 104,
              "876": 48,
              "877": 36,
              "878": 6,
              "879": 8,
              "880": 43,
              "881": 6,
              "882": 1,
              "883": 5,
              "884": 5,
              "885": 7,
              "886": 48,
              "887": 1,
              "888": 134,
              "889": 24,
              "890": 104,
              "891": 116,
              "892": 116,
              "893": 112,
              "894": 58,
              "895": 47,
              "896": 47,
              "897": 111,
              "898": 99,
              "899": 115,
              "900": 112,
              "901": 46,
              "902": 100,
              "903": 105,
              "904": 103,
              "905": 105,
              "906": 99,
              "907": 101,
              "908": 114,
              "909": 116,
              "910": 46,
              "911": 99,
              "912": 111,
              "913": 109,
              "914": 48,
              "915": 64,
              "916": 6,
              "917": 8,
              "918": 43,
              "919": 6,
              "920": 1,
              "921": 5,
              "922": 5,
              "923": 7,
              "924": 48,
              "925": 2,
              "926": 134,
              "927": 52,
              "928": 104,
              "929": 116,
              "930": 116,
              "931": 112,
              "932": 58,
              "933": 47,
              "934": 47,
              "935": 99,
              "936": 97,
              "937": 99,
              "938": 101,
              "939": 114,
              "940": 116,
              "941": 115,
              "942": 46,
              "943": 100,
              "944": 105,
              "945": 103,
              "946": 105,
              "947": 99,
              "948": 101,
              "949": 114,
              "950": 116,
              "951": 46,
              "952": 99,
              "953": 111,
              "954": 109,
              "955": 47,
              "956": 67,
              "957": 108,
              "958": 111,
              "959": 117,
              "960": 100,
              "961": 102,
              "962": 108,
              "963": 97,
              "964": 114,
              "965": 101,
              "966": 73,
              "967": 110,
              "968": 99,
              "969": 69,
              "970": 67,
              "971": 67,
              "972": 67,
              "973": 65,
              "974": 45,
              "975": 51,
              "976": 46,
              "977": 99,
              "978": 114,
              "979": 116,
              "980": 48,
              "981": 12,
              "982": 6,
              "983": 3,
              "984": 85,
              "985": 29,
              "986": 19,
              "987": 1,
              "988": 1,
              "989": 255,
              "990": 4,
              "991": 2,
              "992": 48,
              "993": 0,
              "994": 48,
              "995": 130,
              "996": 1,
              "997": 5,
              "998": 6,
              "999": 10,
              "1000": 43,
              "1001": 6,
              "1002": 1,
              "1003": 4,
              "1004": 1,
              "1005": 214,
              "1006": 121,
              "1007": 2,
              "1008": 4,
              "1009": 2,
              "1010": 4,
              "1011": 129,
              "1012": 246,
              "1013": 4,
              "1014": 129,
              "1015": 243,
              "1016": 0,
              "1017": 241,
              "1018": 0,
              "1019": 118,
              "1020": 0,
              "1021": 246,
              "1022": 92,
              "1023": 148,
              "1024": 47,
              "1025": 209,
              "1026": 119,
              "1027": 48,
              "1028": 34,
              "1029": 20,
              "1030": 84,
              "1031": 24,
              "1032": 8,
              "1033": 48,
              "1034": 148,
              "1035": 86,
              "1036": 142,
              "1037": 227,
              "1038": 77,
              "1039": 19,
              "1040": 25,
              "1041": 51,
              "1042": 191,
              "1043": 223,
              "1044": 12,
              "1045": 47,
              "1046": 32,
              "1047": 11,
              "1048": 204,
              "1049": 78,
              "1050": 241,
              "1051": 100,
              "1052": 227,
              "1053": 0,
              "1054": 0,
              "1055": 1,
              "1056": 115,
              "1057": 93,
              "1058": 11,
              "1059": 3,
              "1060": 213,
              "1061": 0,
              "1062": 0,
              "1063": 4,
              "1064": 3,
              "1065": 0,
              "1066": 71,
              "1067": 48,
              "1068": 69,
              "1069": 2,
              "1070": 32,
              "1071": 116,
              "1072": 232,
              "1073": 30,
              "1074": 59,
              "1075": 183,
              "1076": 134,
              "1077": 132,
              "1078": 234,
              "1079": 133,
              "1080": 61,
              "1081": 255,
              "1082": 88,
              "1083": 255,
              "1084": 255,
              "1085": 233,
              "1086": 224,
              "1087": 227,
              "1088": 166,
              "1089": 144,
              "1090": 131,
              "1091": 211,
              "1092": 103,
              "1093": 82,
              "1094": 246,
              "1095": 199,
              "1096": 159,
              "1097": 29,
              "1098": 106,
              "1099": 189,
              "1100": 89,
              "1101": 207,
              "1102": 167,
              "1103": 2,
              "1104": 33,
              "1105": 0,
              "1106": 134,
              "1107": 11,
              "1108": 41,
              "1109": 10,
              "1110": 5,
              "1111": 212,
              "1112": 137,
              "1113": 16,
              "1114": 241,
              "1115": 192,
              "1116": 118,
              "1117": 104,
              "1118": 248,
              "1119": 66,
              "1120": 204,
              "1121": 80,
              "1122": 151,
              "1123": 86,
              "1124": 156,
              "1125": 82,
              "1126": 39,
              "1127": 127,
              "1128": 149,
              "1129": 196,
              "1130": 45,
              "1131": 173,
              "1132": 36,
              "1133": 69,
              "1134": 227,
              "1135": 207,
              "1136": 103,
              "1137": 242,
              "1138": 0,
              "1139": 119,
              "1140": 0,
              "1141": 92,
              "1142": 220,
              "1143": 67,
              "1144": 146,
              "1145": 254,
              "1146": 230,
              "1147": 171,
              "1148": 69,
              "1149": 68,
              "1150": 177,
              "1151": 94,
              "1152": 154,
              "1153": 212,
              "1154": 86,
              "1155": 230,
              "1156": 16,
              "1157": 55,
              "1158": 251,
              "1159": 213,
              "1160": 250,
              "1161": 71,
              "1162": 220,
              "1163": 161,
              "1164": 115,
              "1165": 148,
              "1166": 178,
              "1167": 94,
              "1168": 230,
              "1169": 246,
              "1170": 199,
              "1171": 14,
              "1172": 202,
              "1173": 0,
              "1174": 0,
              "1175": 1,
              "1176": 115,
              "1177": 93,
              "1178": 11,
              "1179": 4,
              "1180": 4,
              "1181": 0,
              "1182": 0,
              "1183": 4,
              "1184": 3,
              "1185": 0,
              "1186": 72,
              "1187": 48,
              "1188": 70,
              "1189": 2,
              "1190": 33,
              "1191": 0,
              "1192": 160,
              "1193": 128,
              "1194": 223,
              "1195": 209,
              "1196": 101,
              "1197": 46,
              "1198": 210,
              "1199": 129,
              "1200": 22,
              "1201": 175,
              "1202": 167,
              "1203": 167,
              "1204": 179,
              "1205": 238,
              "1206": 216,
              "1207": 86,
              "1208": 121,
              "1209": 51,
              "1210": 13,
              "1211": 145,
              "1212": 193,
              "1213": 248,
              "1214": 35,
              "1215": 82,
              "1216": 170,
              "1217": 91,
              "1218": 71,
              "1219": 194,
              "1220": 76,
              "1221": 242,
              "1222": 80,
              "1223": 152,
              "1224": 2,
              "1225": 33,
              "1226": 0,
              "1227": 200,
              "1228": 212,
              "1229": 219,
              "1230": 208,
              "1231": 164,
              "1232": 72,
              "1233": 136,
              "1234": 35,
              "1235": 98,
              "1236": 222,
              "1237": 70,
              "1238": 143,
              "1239": 166,
              "1240": 50,
              "1241": 79,
              "1242": 157,
              "1243": 110,
              "1244": 137,
              "1245": 17,
              "1246": 158,
              "1247": 218,
              "1248": 159,
              "1249": 77,
              "1250": 48,
              "1251": 55,
              "1252": 162,
              "1253": 63,
              "1254": 37,
              "1255": 218,
              "1256": 76,
              "1257": 6,
              "1258": 250,
              "1259": 48,
              "1260": 10,
              "1261": 6,
              "1262": 8,
              "1263": 42,
              "1264": 134,
              "1265": 72,
              "1266": 206,
              "1267": 61,
              "1268": 4,
              "1269": 3,
              "1270": 2,
              "1271": 3,
              "1272": 72,
              "1273": 0,
              "1274": 48,
              "1275": 69,
              "1276": 2,
              "1277": 33,
              "1278": 0,
              "1279": 146,
              "1280": 39,
              "1281": 162,
              "1282": 197,
              "1283": 164,
              "1284": 165,
              "1285": 40,
              "1286": 158,
              "1287": 14,
              "1288": 2,
              "1289": 115,
              "1290": 79,
              "1291": 246,
              "1292": 87,
              "1293": 242,
              "1294": 79,
              "1295": 32,
              "1296": 237,
              "1297": 25,
              "1298": 125,
              "1299": 3,
              "1300": 246,
              "1301": 57,
              "1302": 223,
              "1303": 110,
              "1304": 152,
              "1305": 233,
              "1306": 45,
              "1307": 206,
              "1308": 71,
              "1309": 158,
              "1310": 103,
              "1311": 2,
              "1312": 32,
              "1313": 19,
              "1314": 206,
              "1315": 173,
              "1316": 35,
              "1317": 132,
              "1318": 228,
              "1319": 60,
              "1320": 71,
              "1321": 243,
              "1322": 190,
              "1323": 231,
              "1324": 248,
              "1325": 133,
              "1326": 49,
              "1327": 210,
              "1328": 204,
              "1329": 102,
              "1330": 199,
              "1331": 91,
              "1332": 84,
              "1333": 210,
              "1334": 170,
              "1335": 112,
              "1336": 154,
              "1337": 75,
              "1338": 2,
              "1339": 200,
              "1340": 113,
              "1341": 119,
              "1342": 2,
              "1343": 128,
              "1344": 22,
              "1345": 164,
              "1346": 2,
              "1347": 4,
              "1348": 0,
              "1349": 166,
              "1350": 23,
              "1351": 4,
              "1352": 21,
              "1353": 115,
              "1354": 111,
              "1355": 99,
              "1356": 99,
              "1357": 101,
              "1358": 114,
              "1359": 46,
              "1360": 115,
              "1361": 112,
              "1362": 111,
              "1363": 114,
              "1364": 116,
              "1365": 109,
              "1366": 111,
              "1367": 110,
              "1368": 107,
              "1369": 115,
              "1370": 46,
              "1371": 99,
              "1372": 111,
              "1373": 109,
              "1374": 169,
              "1375": 5,
              "1376": 2,
              "1377": 3,
              "1378": 0,
              "1379": 253,
              "1380": 32,
              "1381": 170,
              "1382": 129,
              "1383": 195,
              "1384": 4,
              "1385": 129,
              "1386": 192,
              "1387": 34,
              "1388": 79,
              "1389": 127,
              "1390": 137,
              "1391": 40,
              "1392": 134,
              "1393": 247,
              "1394": 246,
              "1395": 233,
              "1396": 40,
              "1397": 197,
              "1398": 202,
              "1399": 231,
              "1400": 97,
              "1401": 193,
              "1402": 252,
              "1403": 229,
              "1404": 18,
              "1405": 108,
              "1406": 45,
              "1407": 184,
              "1408": 115,
              "1409": 44,
              "1410": 83,
              "1411": 140,
              "1412": 12,
              "1413": 92,
              "1414": 130,
              "1415": 192,
              "1416": 94,
              "1417": 105,
              "1418": 168,
              "1419": 208,
              "1420": 38,
              "1421": 175,
              "1422": 233,
              "1423": 165,
              "1424": 98,
              "1425": 9,
              "1426": 240,
              "1427": 70,
              "1428": 196,
              "1429": 137,
              "1430": 187,
              "1431": 2,
              "1432": 115,
              "1433": 180,
              "1434": 181,
              "1435": 64,
              "1436": 202,
              "1437": 11,
              "1438": 79,
              "1439": 214,
              "1440": 4,
              "1441": 34,
              "1442": 240,
              "1443": 63,
              "1444": 108,
              "1445": 131,
              "1446": 228,
              "1447": 197,
              "1448": 213,
              "1449": 127,
              "1450": 166,
              "1451": 233,
              "1452": 48,
              "1453": 212,
              "1454": 237,
              "1455": 70,
              "1456": 68,
              "1457": 36,
              "1458": 213,
              "1459": 27,
              "1460": 192,
              "1461": 114,
              "1462": 10,
              "1463": 85,
              "1464": 250,
              "1465": 10,
              "1466": 108,
              "1467": 203,
              "1468": 83,
              "1469": 132,
              "1470": 37,
              "1471": 40,
              "1472": 109,
              "1473": 71,
              "1474": 9,
              "1475": 43,
              "1476": 242,
              "1477": 222,
              "1478": 241,
              "1479": 26,
              "1480": 77,
              "1481": 214,
              "1482": 249,
              "1483": 171,
              "1484": 38,
              "1485": 72,
              "1486": 167,
              "1487": 118,
              "1488": 138,
              "1489": 255,
              "1490": 34,
              "1491": 117,
              "1492": 51,
              "1493": 206,
              "1494": 198,
              "1495": 197,
              "1496": 114,
              "1497": 88,
              "1498": 60,
              "1499": 16,
              "1500": 103,
              "1501": 163,
              "1502": 110,
              "1503": 205,
              "1504": 146,
              "1505": 88,
              "1506": 46,
              "1507": 68,
              "1508": 167,
              "1509": 74,
              "1510": 241,
              "1511": 241,
              "1512": 166,
              "1513": 169,
              "1514": 50,
              "1515": 152,
              "1516": 17,
              "1517": 112,
              "1518": 96,
              "1519": 67,
              "1520": 190,
              "1521": 141,
              "1522": 4,
              "1523": 209,
              "1524": 168,
              "1525": 9,
              "1526": 104,
              "1527": 55,
              "1528": 197,
              "1529": 245,
              "1530": 158,
              "1531": 65,
              "1532": 181,
              "1533": 176,
              "1534": 6,
              "1535": 221,
              "1536": 165,
              "1537": 215,
              "1538": 117,
              "1539": 136,
              "1540": 94,
              "1541": 7,
              "1542": 54,
              "1543": 54,
              "1544": 23,
              "1545": 20,
              "1546": 47,
              "1547": 114,
              "1548": 215,
              "1549": 103,
              "1550": 131,
              "1551": 153,
              "1552": 163,
              "1553": 117,
              "1554": 200,
              "1555": 85,
              "1556": 135,
              "1557": 115,
              "1558": 42,
              "1559": 57,
              "1560": 232,
              "1561": 48,
              "1562": 146,
              "1563": 139,
              "1564": 94,
              "1565": 99,
              "1566": 138,
              "1567": 40,
              "1568": 114,
              "1569": 126,
              "1570": 209,
              "1571": 73,
              "1572": 46,
              "1573": 24,
              "1574": 60,
              "1575": 28,
              "1576": 63,
              "1577": 185,
              "1578": 67,
              "1579": 174,
              "1580": 7,
              "1581": 2,
              "1582": 5,
              "1583": 0,
              "1584": 225,
              "1585": 126,
              "1586": 144,
              "1587": 100,
            },
          },
          list: [
            "soccer.sportmonks.com:443::::::::::::::::::",
          ],
        },
      },
      socketPath: undefined,
      method: "GET",
      maxHeaderSize: undefined,
      insecureHTTPParser: undefined,
      path: "/api/v2.0/teams/1020?include=league&api_token=k7sFqtrMuRacf25VT3pQ5DrqyOjrls03zXvIyz8JNV3Cul7DxZRMJ6Y7VNZx",
      _ended: true,
      res: {
        _readableState: {
          objectMode: false,
          highWaterMark: 16384,
          buffer: {
            head: null,
            tail: null,
            length: 0,
          },
          length: 0,
          pipes: [
          ],
          flowing: true,
          ended: true,
          endEmitted: true,
          reading: false,
          sync: false,
          needReadable: false,
          emittedReadable: false,
          readableListening: false,
          resumeScheduled: false,
          errorEmitted: false,
          emitClose: true,
          autoDestroy: false,
          destroyed: false,
          errored: null,
          closed: false,
          closeEmitted: false,
          defaultEncoding: "utf8",
          awaitDrainWriters: null,
          multiAwaitDrain: false,
          readingMore: false,
          decoder: null,
          encoding: null,
        },
        _events: {
          end: [
            function responseOnEnd() {
              const req = this.req;
              const socket = req.socket;
              
              if (socket) {
                if (req.timeoutCb) socket.removeListener('timeout', emitRequestTimeout);
                socket.removeListener('timeout', responseOnTimeout);
              }
              
              req._ended = true;
              
              if (!req.shouldKeepAlive) {
                if (socket.writable) {
                  debug('AGENT socket.destroySoon()');
                  if (typeof socket.destroySoon === 'function')
                    socket.destroySoon();
                  else
                    socket.end();
                }
                assert(!socket.writable);
              } else if (req.finished && !this.aborted) {
                // We can assume `req.finished` means all data has been written since:
                // - `'responseOnEnd'` means we have been assigned a socket.
                // - when we have a socket we write directly to it without buffering.
                // - `req.finished` means `end()` has been called and no further data.
                //   can be written
                responseKeepAlive(req);
              }
            },
            function handleStreamEnd() {
              var responseData = Buffer.concat(responseBuffer);
              if (config.responseType !== 'arraybuffer') {
                responseData = responseData.toString(config.responseEncoding);
                if (!config.responseEncoding || config.responseEncoding === 'utf8') {
                  responseData = utils.stripBOM(responseData);
                }
              }
              
              response.data = responseData;
              settle(resolve, reject, response);
            },
          ],
          data: function handleStreamData(chunk) {
            responseBuffer.push(chunk);
            
            // make sure the content length is not over the maxContentLength if specified
            if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
              stream.destroy();
              reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
                config, null, lastRequest));
            }
          },
          error: function handleStreamError(err) {
            if (req.aborted) return;
            reject(enhanceError(err, config, null, lastRequest));
          },
        },
        _eventsCount: 3,
        _maxListeners: undefined,
        socket: {
          _tlsOptions: {
            allowHalfOpen: undefined,
            pipe: false,
            secureContext: {
              context: {
              },
              singleUse: true,
            },
            isServer: false,
            requestCert: true,
            rejectUnauthorized: true,
            session: undefined,
            ALPNProtocols: undefined,
            requestOCSP: undefined,
            enableTrace: undefined,
            pskCallback: undefined,
            highWaterMark: undefined,
          },
          _secureEstablished: true,
          _securePending: false,
          _newSessionPending: false,
          _controlReleased: true,
          secureConnecting: false,
          _SNICallback: null,
          servername: "soccer.sportmonks.com",
          alpnProtocol: false,
          authorized: true,
          authorizationError: null,
          encrypted: true,
          _events: {
            close: [
              function onSocketCloseDestroySSL() {
                // Make sure we are not doing it on OpenSSL's stack
                setImmediate(destroySSL, this);
                this[kRes] = null;
              },
              function () { [native_code] },
              function onClose(err) {
                debug('CLIENT socket onClose');
                // This is the only place where sockets get removed from the Agent.
                // If you want to remove a socket from the pool, just close it.
                // All socket errors end in a close event anyway.
                agent.removeSocket(s, options);
              },
              function socketCloseListener() {
                const socket = this;
                const req = socket._httpMessage;
                debug('HTTP socket close');
                
                // Pull through final chunk, if anything is buffered.
                // the ondata function will handle it properly, and this
                // is a no-op if no final chunk remains.
                socket.read();
                
                // NOTE: It's important to get parser here, because it could be freed by
                // the `socketOnData`.
                const parser = socket.parser;
                const res = req.res;
                
                req.destroyed = true;
                if (res) {
                  // Socket closed before we emitted 'end' below.
                  if (!res.complete) {
                    res.aborted = true;
                    res.emit('aborted');
                  }
                  req.emit('close');
                  if (!res.aborted && res.readable) {
                    res.on('end', function() {
                      this.emit('close');
                    });
                    res.push(null);
                  } else {
                    res.emit('close');
                  }
                } else {
                  if (!req.socket._hadError) {
                    // This socket error fired before we started to
                    // receive a response. The error needs to
                    // fire on the request.
                    req.socket._hadError = true;
                    req.emit('error', connResetException('socket hang up'));
                  }
                  req.emit('close');
                }
                
                // Too bad.  That output wasn't getting written.
                // This is pretty terrible that it doesn't raise an error.
                // Fixed better in v0.10
                if (req.outputData)
                  req.outputData.length = 0;
                
                if (parser) {
                  parser.finish();
                  freeParser(parser, req, socket);
                }
              },
            ],
            end: function onReadableStreamEnd() {
              if (!this.allowHalfOpen) {
                this.write = writeAfterFIN;
                if (this.writable)
                  this.end();
                else if (!this.writableLength)
                  this.destroy();
              } else if (!this.destroyed && !this.writable && !this.writableLength)
                this.destroy();
            },
            newListener: function keylogNewListener(event) {
              if (event !== 'keylog')
                return;
              
              ssl.enableKeylogCallback();
              
              // Remove this listener since it's no longer needed.
              this.removeListener('newListener', keylogNewListener);
            },
            secure: function onConnectSecure() {
              const options = this[kConnectOptions];
              
              // Check the size of DHE parameter above minimum requirement
              // specified in options.
              const ekeyinfo = this.getEphemeralKeyInfo();
              if (ekeyinfo.type === 'DH' && ekeyinfo.size < options.minDHSize) {
                const err = new ERR_TLS_DH_PARAM_SIZE(ekeyinfo.size);
                debug('client emit:', err);
                this.emit('error', err);
                this.destroy();
                return;
              }
              
              let verifyError = this._handle.verifyError();
              
              // Verify that server's identity matches it's certificate's names
              // Unless server has resumed our existing session
              if (!verifyError && !this.isSessionReused()) {
                const hostname = options.servername ||
                               options.host ||
                               (options.socket && options.socket._host) ||
                               'localhost';
                const cert = this.getPeerCertificate(true);
                verifyError = options.checkServerIdentity(hostname, cert);
              }
              
              if (verifyError) {
                this.authorized = false;
                this.authorizationError = verifyError.code || verifyError.message;
              
                if (options.rejectUnauthorized) {
                  this.destroy(verifyError);
                  return;
                }
                debug('client emit secureConnect. rejectUnauthorized: %s, ' +
                      'authorizationError: %s', options.rejectUnauthorized,
                      this.authorizationError);
                this.secureConnecting = false;
                this.emit('secureConnect');
              } else {
                this.authorized = true;
                debug('client emit secureConnect. authorized:', this.authorized);
                this.secureConnecting = false;
                this.emit('secureConnect');
              }
              
              this[kIsVerified] = true;
              const session = this[kPendingSession];
              this[kPendingSession] = null;
              if (session)
                this.emit('session', session);
              
              this.removeListener('end', onConnectEnd);
            },
            session: (session) => {
              this._cacheSession(options._agentKey, session);
            },
            free: function onFree() {
              debug('CLIENT socket onFree');
              agent.emit('free', s, options);
            },
            timeout: function onTimeout() {
              debug('CLIENT socket onTimeout');
              
              // Destroy if in free list.
              // TODO(ronag): Always destroy, even if not in free list.
              const sockets = agent.freeSockets;
              for (const name of ObjectKeys(sockets)) {
                if (sockets[name].includes(s)) {
                  return s.destroy();
                }
              }
            },
            agentRemove: function onRemove() {
              // We need this function for cases like HTTP 'upgrade'
              // (defined by WebSockets) where we need to remove a socket from the
              // pool because it'll be locked up indefinitely
              debug('CLIENT socket onRemove');
              agent.removeSocket(s, options);
              s.removeListener('close', onClose);
              s.removeListener('free', onFree);
              s.removeListener('timeout', onTimeout);
              s.removeListener('agentRemove', onRemove);
            },
            error: function socketErrorListener(err) {
              const socket = this;
              const req = socket._httpMessage;
              debug('SOCKET ERROR:', err.message, err.stack);
              
              if (req) {
                // For Safety. Some additional errors might fire later on
                // and we need to make sure we don't double-fire the error event.
                req.socket._hadError = true;
                req.emit('error', err);
              }
              
              const parser = socket.parser;
              if (parser) {
                parser.finish();
                freeParser(parser, req, socket);
              }
              
              // Ensure that no further data will come out of the socket
              socket.removeListener('data', socketOnData);
              socket.removeListener('end', socketOnEnd);
              socket.destroy();
            },
            finish: function () { [native_code] },
          },
          _eventsCount: 10,
          connecting: false,
          _hadError: false,
          _parent: null,
          _host: "soccer.sportmonks.com",
          _readableState: {
            objectMode: false,
            highWaterMark: 16384,
            buffer: {
              head: null,
              tail: null,
              length: 0,
            },
            length: 0,
            pipes: [
            ],
            flowing: true,
            ended: false,
            endEmitted: false,
            reading: true,
            sync: false,
            needReadable: true,
            emittedReadable: false,
            readableListening: false,
            resumeScheduled: false,
            errorEmitted: false,
            emitClose: false,
            autoDestroy: false,
            destroyed: false,
            errored: null,
            closed: false,
            closeEmitted: false,
            defaultEncoding: "utf8",
            awaitDrainWriters: null,
            multiAwaitDrain: false,
            readingMore: false,
            decoder: null,
            encoding: null,
          },
          _maxListeners: undefined,
          _writableState: {
            objectMode: false,
            highWaterMark: 16384,
            finalCalled: true,
            needDrain: false,
            ending: true,
            ended: true,
            finished: false,
            destroyed: false,
            decodeStrings: false,
            defaultEncoding: "utf8",
            length: 0,
            writing: false,
            corked: 0,
            sync: false,
            bufferProcessing: false,
            onwrite: function () { [native_code] },
            writecb: null,
            writelen: 0,
            afterWriteTickInfo: null,
            buffered: [
            ],
            bufferedIndex: 0,
            allBuffers: true,
            allNoop: true,
            pendingcb: 1,
            prefinished: false,
            errorEmitted: false,
            emitClose: false,
            autoDestroy: false,
            errored: null,
            closed: false,
            closeEmitted: false,
            writable: true,
          },
          allowHalfOpen: false,
          _sockname: null,
          _pendingData: null,
          _pendingEncoding: "",
          server: undefined,
          _server: null,
          ssl: {
            _parent: {
              reading: true,
              onconnection: null,
            },
            _parentWrap: undefined,
            _secureContext: {
              context: {
              },
              singleUse: true,
            },
            reading: true,
            onkeylog: function onkeylog(line) {
              debug('onkeylog');
              this[owner_symbol].emit('keylog', line);
            },
            onhandshakestart: () => {},
            onhandshakedone: () => {
              debug('client onhandshakedone');
              this._finishInit();
            },
            onocspresponse: function onocspresponse(resp) {
              debug('client onocspresponse');
              this[owner_symbol].emit('OCSPResponse', resp);
            },
            onnewsession: function onnewsessionclient(sessionId, session) {
              debug('client emit session');
              const owner = this[owner_symbol];
              if (owner[kIsVerified]) {
                owner.emit('session', session);
              } else {
                owner[kPendingSession] = session;
              }
            },
            onerror: function onerror(err) {
              const owner = this[owner_symbol];
              debug('%s onerror %s had? %j',
                    owner._tlsOptions.isServer ? 'server' : 'client', err,
                    owner._hadError);
              
              if (owner._hadError)
                return;
              
              owner._hadError = true;
              
              // Destroy socket if error happened before handshake's finish
              if (!owner._secureEstablished) {
                // When handshake fails control is not yet released,
                // so self._tlsError will return null instead of actual error
                owner.destroy(err);
              } else if (owner._tlsOptions.isServer &&
                         owner._rejectUnauthorized &&
                         /peer did not return a certificate/.test(err.message)) {
                // Ignore server's authorization errors
                owner.destroy();
              } else {
                // Emit error
                owner._emitTLSError(err);
              }
            },
          },
          _requestCert: true,
          _rejectUnauthorized: true,
          parser: null,
          _httpMessage: [Circular],
        },
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: "1.1",
        complete: true,
        headers: {
          date: "Tue, 08 Jun 2021 10:49:26 GMT",
          "content-type": "application/json",
          "transfer-encoding": "chunked",
          connection: "close",
          "cache-control": "no-cache, private",
          "x-ratelimit-limit": "180",
          "x-ratelimit-remaining": "177",
          pragma: "no-cache",
          expires: "-1",
          "access-control-allow-origin": "*",
          "cf-cache-status": "DYNAMIC",
          "cf-request-id": "0a8cd6e4660000ad67930b0000000001",
          "expect-ct": "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
          "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v2?s=F71aGRWAKgCUmeVig2RZjSTpBoX4FzqALVnpX6pbhY39QSZTcR%2BXNuCfKKFj3RbX4ckA1hdHqK5K%2F%2F%2BME0t97M3Y2UF4dUBNZO1RLXy2onzd5BnElpFNluPZGUQHh1YcRNU%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
          nel: "{\"report_to\":\"cf-nel\",\"max_age\":604800}",
          server: "cloudflare",
          "cf-ray": "65c18db3d952ad67-TLV",
        },
        rawHeaders: [
          "Date",
          "Tue, 08 Jun 2021 10:49:26 GMT",
          "Content-Type",
          "application/json",
          "Transfer-Encoding",
          "chunked",
          "Connection",
          "close",
          "Cache-Control",
          "no-cache, private",
          "x-ratelimit-limit",
          "180",
          "x-ratelimit-remaining",
          "177",
          "pragma",
          "no-cache",
          "expires",
          "-1",
          "Access-Control-Allow-Origin",
          "*",
          "CF-Cache-Status",
          "DYNAMIC",
          "cf-request-id",
          "0a8cd6e4660000ad67930b0000000001",
          "Expect-CT",
          "max-age=604800, report-uri=\"https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct\"",
          "Report-To",
          "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v2?s=F71aGRWAKgCUmeVig2RZjSTpBoX4FzqALVnpX6pbhY39QSZTcR%2BXNuCfKKFj3RbX4ckA1hdHqK5K%2F%2F%2BME0t97M3Y2UF4dUBNZO1RLXy2onzd5BnElpFNluPZGUQHh1YcRNU%3D\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
          "NEL",
          "{\"report_to\":\"cf-nel\",\"max_age\":604800}",
          "Server",
          "cloudflare",
          "CF-RAY",
          "65c18db3d952ad67-TLV",
        ],
        trailers: {
        },
        rawTrailers: [
        ],
        aborted: false,
        upgrade: false,
        url: "",
        method: null,
        statusCode: 200,
        statusMessage: "OK",
        client: {
          _tlsOptions: {
            allowHalfOpen: undefined,
            pipe: false,
            secureContext: {
              context: {
              },
              singleUse: true,
            },
            isServer: false,
            requestCert: true,
            rejectUnauthorized: true,
            session: undefined,
            ALPNProtocols: undefined,
            requestOCSP: undefined,
            enableTrace: undefined,
            pskCallback: undefined,
            highWaterMark: undefined,
          },
          _secureEstablished: true,
          _securePending: false,
          _newSessionPending: false,
          _controlReleased: true,
          secureConnecting: false,
          _SNICallback: null,
          servername: "soccer.sportmonks.com",
          alpnProtocol: false,
          authorized: true,
          authorizationError: null,
          encrypted: true,
          _events: {
            close: [
              function onSocketCloseDestroySSL() {
                // Make sure we are not doing it on OpenSSL's stack
                setImmediate(destroySSL, this);
                this[kRes] = null;
              },
              function () { [native_code] },
              function onClose(err) {
                debug('CLIENT socket onClose');
                // This is the only place where sockets get removed from the Agent.
                // If you want to remove a socket from the pool, just close it.
                // All socket errors end in a close event anyway.
                agent.removeSocket(s, options);
              },
              function socketCloseListener() {
                const socket = this;
                const req = socket._httpMessage;
                debug('HTTP socket close');
                
                // Pull through final chunk, if anything is buffered.
                // the ondata function will handle it properly, and this
                // is a no-op if no final chunk remains.
                socket.read();
                
                // NOTE: It's important to get parser here, because it could be freed by
                // the `socketOnData`.
                const parser = socket.parser;
                const res = req.res;
                
                req.destroyed = true;
                if (res) {
                  // Socket closed before we emitted 'end' below.
                  if (!res.complete) {
                    res.aborted = true;
                    res.emit('aborted');
                  }
                  req.emit('close');
                  if (!res.aborted && res.readable) {
                    res.on('end', function() {
                      this.emit('close');
                    });
                    res.push(null);
                  } else {
                    res.emit('close');
                  }
                } else {
                  if (!req.socket._hadError) {
                    // This socket error fired before we started to
                    // receive a response. The error needs to
                    // fire on the request.
                    req.socket._hadError = true;
                    req.emit('error', connResetException('socket hang up'));
                  }
                  req.emit('close');
                }
                
                // Too bad.  That output wasn't getting written.
                // This is pretty terrible that it doesn't raise an error.
                // Fixed better in v0.10
                if (req.outputData)
                  req.outputData.length = 0;
                
                if (parser) {
                  parser.finish();
                  freeParser(parser, req, socket);
                }
              },
            ],
            end: function onReadableStreamEnd() {
              if (!this.allowHalfOpen) {
                this.write = writeAfterFIN;
                if (this.writable)
                  this.end();
                else if (!this.writableLength)
                  this.destroy();
              } else if (!this.destroyed && !this.writable && !this.writableLength)
                this.destroy();
            },
            newListener: function keylogNewListener(event) {
              if (event !== 'keylog')
                return;
              
              ssl.enableKeylogCallback();
              
              // Remove this listener since it's no longer needed.
              this.removeListener('newListener', keylogNewListener);
            },
            secure: function onConnectSecure() {
              const options = this[kConnectOptions];
              
              // Check the size of DHE parameter above minimum requirement
              // specified in options.
              const ekeyinfo = this.getEphemeralKeyInfo();
              if (ekeyinfo.type === 'DH' && ekeyinfo.size < options.minDHSize) {
                const err = new ERR_TLS_DH_PARAM_SIZE(ekeyinfo.size);
                debug('client emit:', err);
                this.emit('error', err);
                this.destroy();
                return;
              }
              
              let verifyError = this._handle.verifyError();
              
              // Verify that server's identity matches it's certificate's names
              // Unless server has resumed our existing session
              if (!verifyError && !this.isSessionReused()) {
                const hostname = options.servername ||
                               options.host ||
                               (options.socket && options.socket._host) ||
                               'localhost';
                const cert = this.getPeerCertificate(true);
                verifyError = options.checkServerIdentity(hostname, cert);
              }
              
              if (verifyError) {
                this.authorized = false;
                this.authorizationError = verifyError.code || verifyError.message;
              
                if (options.rejectUnauthorized) {
                  this.destroy(verifyError);
                  return;
                }
                debug('client emit secureConnect. rejectUnauthorized: %s, ' +
                      'authorizationError: %s', options.rejectUnauthorized,
                      this.authorizationError);
                this.secureConnecting = false;
                this.emit('secureConnect');
              } else {
                this.authorized = true;
                debug('client emit secureConnect. authorized:', this.authorized);
                this.secureConnecting = false;
                this.emit('secureConnect');
              }
              
              this[kIsVerified] = true;
              const session = this[kPendingSession];
              this[kPendingSession] = null;
              if (session)
                this.emit('session', session);
              
              this.removeListener('end', onConnectEnd);
            },
            session: (session) => {
              this._cacheSession(options._agentKey, session);
            },
            free: function onFree() {
              debug('CLIENT socket onFree');
              agent.emit('free', s, options);
            },
            timeout: function onTimeout() {
              debug('CLIENT socket onTimeout');
              
              // Destroy if in free list.
              // TODO(ronag): Always destroy, even if not in free list.
              const sockets = agent.freeSockets;
              for (const name of ObjectKeys(sockets)) {
                if (sockets[name].includes(s)) {
                  return s.destroy();
                }
              }
            },
            agentRemove: function onRemove() {
              // We need this function for cases like HTTP 'upgrade'
              // (defined by WebSockets) where we need to remove a socket from the
              // pool because it'll be locked up indefinitely
              debug('CLIENT socket onRemove');
              agent.removeSocket(s, options);
              s.removeListener('close', onClose);
              s.removeListener('free', onFree);
              s.removeListener('timeout', onTimeout);
              s.removeListener('agentRemove', onRemove);
            },
            error: function socketErrorListener(err) {
              const socket = this;
              const req = socket._httpMessage;
              debug('SOCKET ERROR:', err.message, err.stack);
              
              if (req) {
                // For Safety. Some additional errors might fire later on
                // and we need to make sure we don't double-fire the error event.
                req.socket._hadError = true;
                req.emit('error', err);
              }
              
              const parser = socket.parser;
              if (parser) {
                parser.finish();
                freeParser(parser, req, socket);
              }
              
              // Ensure that no further data will come out of the socket
              socket.removeListener('data', socketOnData);
              socket.removeListener('end', socketOnEnd);
              socket.destroy();
            },
            finish: function () { [native_code] },
          },
          _eventsCount: 10,
          connecting: false,
          _hadError: false,
          _parent: null,
          _host: "soccer.sportmonks.com",
          _readableState: {
            objectMode: false,
            highWaterMark: 16384,
            buffer: {
              head: null,
              tail: null,
              length: 0,
            },
            length: 0,
            pipes: [
            ],
            flowing: true,
            ended: false,
            endEmitted: false,
            reading: true,
            sync: false,
            needReadable: true,
            emittedReadable: false,
            readableListening: false,
            resumeScheduled: false,
            errorEmitted: false,
            emitClose: false,
            autoDestroy: false,
            destroyed: false,
            errored: null,
            closed: false,
            closeEmitted: false,
            defaultEncoding: "utf8",
            awaitDrainWriters: null,
            multiAwaitDrain: false,
            readingMore: false,
            decoder: null,
            encoding: null,
          },
          _maxListeners: undefined,
          _writableState: {
            objectMode: false,
            highWaterMark: 16384,
            finalCalled: true,
            needDrain: false,
            ending: true,
            ended: true,
            finished: false,
            destroyed: false,
            decodeStrings: false,
            defaultEncoding: "utf8",
            length: 0,
            writing: false,
            corked: 0,
            sync: false,
            bufferProcessing: false,
            onwrite: function () { [native_code] },
            writecb: null,
            writelen: 0,
            afterWriteTickInfo: null,
            buffered: [
            ],
            bufferedIndex: 0,
            allBuffers: true,
            allNoop: true,
            pendingcb: 1,
            prefinished: false,
            errorEmitted: false,
            emitClose: false,
            autoDestroy: false,
            errored: null,
            closed: false,
            closeEmitted: false,
            writable: true,
          },
          allowHalfOpen: false,
          _sockname: null,
          _pendingData: null,
          _pendingEncoding: "",
          server: undefined,
          _server: null,
          ssl: {
            _parent: {
              reading: true,
              onconnection: null,
            },
            _parentWrap: undefined,
            _secureContext: {
              context: {
              },
              singleUse: true,
            },
            reading: true,
            onkeylog: function onkeylog(line) {
              debug('onkeylog');
              this[owner_symbol].emit('keylog', line);
            },
            onhandshakestart: () => {},
            onhandshakedone: () => {
              debug('client onhandshakedone');
              this._finishInit();
            },
            onocspresponse: function onocspresponse(resp) {
              debug('client onocspresponse');
              this[owner_symbol].emit('OCSPResponse', resp);
            },
            onnewsession: function onnewsessionclient(sessionId, session) {
              debug('client emit session');
              const owner = this[owner_symbol];
              if (owner[kIsVerified]) {
                owner.emit('session', session);
              } else {
                owner[kPendingSession] = session;
              }
            },
            onerror: function onerror(err) {
              const owner = this[owner_symbol];
              debug('%s onerror %s had? %j',
                    owner._tlsOptions.isServer ? 'server' : 'client', err,
                    owner._hadError);
              
              if (owner._hadError)
                return;
              
              owner._hadError = true;
              
              // Destroy socket if error happened before handshake's finish
              if (!owner._secureEstablished) {
                // When handshake fails control is not yet released,
                // so self._tlsError will return null instead of actual error
                owner.destroy(err);
              } else if (owner._tlsOptions.isServer &&
                         owner._rejectUnauthorized &&
                         /peer did not return a certificate/.test(err.message)) {
                // Ignore server's authorization errors
                owner.destroy();
              } else {
                // Emit error
                owner._emitTLSError(err);
              }
            },
          },
          _requestCert: true,
          _rejectUnauthorized: true,
          parser: null,
          _httpMessage: [Circular],
        },
        _consuming: true,
        _dumped: false,
        req: [Circular],
        responseUrl: "https://soccer.sportmonks.com/api/v2.0/teams/1020?include=league&api_token=k7sFqtrMuRacf25VT3pQ5DrqyOjrls03zXvIyz8JNV3Cul7DxZRMJ6Y7VNZx",
        redirects: [
        ],
      },
      aborted: false,
      timeoutCb: null,
      upgradeOrConnect: false,
      parser: null,
      maxHeadersCount: null,
      reusedSocket: false,
      host: "soccer.sportmonks.com",
      protocol: "https:",
      _redirectable: {
        _writableState: {
          objectMode: false,
          highWaterMark: 16384,
          finalCalled: false,
          needDrain: false,
          ending: false,
          ended: false,
          finished: false,
          destroyed: false,
          decodeStrings: true,
          defaultEncoding: "utf8",
          length: 0,
          writing: false,
          corked: 0,
          sync: true,
          bufferProcessing: false,
          onwrite: function () { [native_code] },
          writecb: null,
          writelen: 0,
          afterWriteTickInfo: null,
          buffered: [
          ],
          bufferedIndex: 0,
          allBuffers: true,
          allNoop: true,
          pendingcb: 0,
          prefinished: false,
          errorEmitted: false,
          emitClose: true,
          autoDestroy: true,
          errored: null,
          closed: false,
        },
        _events: {
          response: function handleResponse(res) {
            if (req.aborted) return;
            
            // uncompress the response body transparently if required
            var stream = res;
            
            // return the last request in case of redirects
            var lastRequest = res.req || req;
            
            
            // if no content, is HEAD request or decompress disabled we should not decompress
            if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
              switch (res.headers['content-encoding']) {
              /*eslint default-case:0*/
              case 'gzip':
              case 'compress':
              case 'deflate':
              // add the unzipper to the body stream processing pipeline
                stream = stream.pipe(zlib.createUnzip());
            
                // remove the content-encoding in order to not confuse downstream operations
                delete res.headers['content-encoding'];
                break;
              }
            }
            
            var response = {
              status: res.statusCode,
              statusText: res.statusMessage,
              headers: res.headers,
              config: config,
              request: lastRequest
            };
            
            if (config.responseType === 'stream') {
              response.data = stream;
              settle(resolve, reject, response);
            } else {
              var responseBuffer = [];
              stream.on('data', function handleStreamData(chunk) {
                responseBuffer.push(chunk);
            
                // make sure the content length is not over the maxContentLength if specified
                if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
                  stream.destroy();
                  reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
                    config, null, lastRequest));
                }
              });
            
              stream.on('error', function handleStreamError(err) {
                if (req.aborted) return;
                reject(enhanceError(err, config, null, lastRequest));
              });
            
              stream.on('end', function handleStreamEnd() {
                var responseData = Buffer.concat(responseBuffer);
                if (config.responseType !== 'arraybuffer') {
                  responseData = responseData.toString(config.responseEncoding);
                  if (!config.responseEncoding || config.responseEncoding === 'utf8') {
                    responseData = utils.stripBOM(responseData);
                  }
                }
            
                response.data = responseData;
                settle(resolve, reject, response);
              });
            }
          },
          error: function handleRequestError(err) {
            if (req.aborted && err.code !== 'ERR_FR_TOO_MANY_REDIRECTS') return;
            reject(enhanceError(err, config, null, req));
          },
        },
        _eventsCount: 2,
        _maxListeners: undefined,
        _options: {
          maxRedirects: 21,
          maxBodyLength: 10485760,
          protocol: "https:",
          path: "/api/v2.0/teams/1020?include=league&api_token=k7sFqtrMuRacf25VT3pQ5DrqyOjrls03zXvIyz8JNV3Cul7DxZRMJ6Y7VNZx",
          method: "GET",
          headers: {
            Accept: "application/json, text/plain, */*",
            "User-Agent": "axios/0.21.1",
          },
          agent: undefined,
          agents: {
            http: undefined,
            https: undefined,
          },
          auth: undefined,
          hostname: "soccer.sportmonks.com",
          port: null,
          nativeProtocols: {
            "http:": {
              _connectionListener: function connectionListener(socket) {
                defaultTriggerAsyncIdScope(
                  getOrSetAsyncId(socket), connectionListenerInternal, this, socket
                );
              },
              METHODS: [
                "ACL",
                "BIND",
                "CHECKOUT",
                "CONNECT",
                "COPY",
                "DELETE",
                "GET",
                "HEAD",
                "LINK",
                "LOCK",
                "M-SEARCH",
                "MERGE",
                "MKACTIVITY",
                "MKCALENDAR",
                "MKCOL",
                "MOVE",
                "NOTIFY",
                "OPTIONS",
                "PATCH",
                "POST",
                "PRI",
                "PROPFIND",
                "PROPPATCH",
                "PURGE",
                "PUT",
                "REBIND",
                "REPORT",
                "SEARCH",
                "SOURCE",
                "SUBSCRIBE",
                "TRACE",
                "UNBIND",
                "UNLINK",
                "UNLOCK",
                "UNSUBSCRIBE",
              ],
              STATUS_CODES: {
                "100": "Continue",
                "101": "Switching Protocols",
                "102": "Processing",
                "103": "Early Hints",
                "200": "OK",
                "201": "Created",
                "202": "Accepted",
                "203": "Non-Authoritative Information",
                "204": "No Content",
                "205": "Reset Content",
                "206": "Partial Content",
                "207": "Multi-Status",
                "208": "Already Reported",
                "226": "IM Used",
                "300": "Multiple Choices",
                "301": "Moved Permanently",
                "302": "Found",
                "303": "See Other",
                "304": "Not Modified",
                "305": "Use Proxy",
                "307": "Temporary Redirect",
                "308": "Permanent Redirect",
                "400": "Bad Request",
                "401": "Unauthorized",
                "402": "Payment Required",
                "403": "Forbidden",
                "404": "Not Found",
                "405": "Method Not Allowed",
                "406": "Not Acceptable",
                "407": "Proxy Authentication Required",
                "408": "Request Timeout",
                "409": "Conflict",
                "410": "Gone",
                "411": "Length Required",
                "412": "Precondition Failed",
                "413": "Payload Too Large",
                "414": "URI Too Long",
                "415": "Unsupported Media Type",
                "416": "Range Not Satisfiable",
                "417": "Expectation Failed",
                "418": "I'm a Teapot",
                "421": "Misdirected Request",
                "422": "Unprocessable Entity",
                "423": "Locked",
                "424": "Failed Dependency",
                "425": "Too Early",
                "426": "Upgrade Required",
                "428": "Precondition Required",
                "429": "Too Many Requests",
                "431": "Request Header Fields Too Large",
                "451": "Unavailable For Legal Reasons",
                "500": "Internal Server Error",
                "501": "Not Implemented",
                "502": "Bad Gateway",
                "503": "Service Unavailable",
                "504": "Gateway Timeout",
                "505": "HTTP Version Not Supported",
                "506": "Variant Also Negotiates",
                "507": "Insufficient Storage",
                "508": "Loop Detected",
                "509": "Bandwidth Limit Exceeded",
                "510": "Not Extended",
                "511": "Network Authentication Required",
              },
              Agent: function Agent(options) {
                if (!(this instanceof Agent))
                  return new Agent(options);
                
                EventEmitter.call(this);
                
                this.defaultPort = 80;
                this.protocol = 'http:';
                
                this.options = { ...options };
                
                // Don't confuse net and make it think that we're connecting to a pipe
                this.options.path = null;
                this.requests = {};
                this.sockets = {};
                this.freeSockets = {};
                this.keepAliveMsecs = this.options.keepAliveMsecs || 1000;
                this.keepAlive = this.options.keepAlive || false;
                this.maxSockets = this.options.maxSockets || Agent.defaultMaxSockets;
                this.maxFreeSockets = this.options.maxFreeSockets || 256;
                this.scheduling = this.options.scheduling || 'fifo';
                this.maxTotalSockets = this.options.maxTotalSockets;
                this.totalSocketCount = 0;
                
                validateOneOf(this.scheduling, 'scheduling', ['fifo', 'lifo'], true);
                
                if (this.maxTotalSockets !== undefined) {
                  validateNumber(this.maxTotalSockets, 'maxTotalSockets');
                  if (this.maxTotalSockets <= 0 || NumberIsNaN(this.maxTotalSockets))
                    throw new ERR_OUT_OF_RANGE('maxTotalSockets', '> 0',
                                               this.maxTotalSockets);
                } else {
                  this.maxTotalSockets = Infinity;
                }
                
                this.on('free', (socket, options) => {
                  const name = this.getName(options);
                  debug('agent.on(free)', name);
                
                  // TODO(ronag): socket.destroy(err) might have been called
                  // before coming here and have an 'error' scheduled. In the
                  // case of socket.destroy() below this 'error' has no handler
                  // and could cause unhandled exception.
                
                  if (!socket.writable) {
                    socket.destroy();
                    return;
                  }
                
                  const requests = this.requests[name];
                  if (requests && requests.length) {
                    const req = requests.shift();
                    const reqAsyncRes = req[kRequestAsyncResource];
                    if (reqAsyncRes) {
                      // Run request within the original async context.
                      reqAsyncRes.runInAsyncScope(() => {
                        asyncResetHandle(socket);
                        setRequestSocket(this, req, socket);
                      });
                      req[kRequestAsyncResource] = null;
                    } else {
                      setRequestSocket(this, req, socket);
                    }
                    if (requests.length === 0) {
                      delete this.requests[name];
                    }
                    return;
                  }
                
                  // If there are no pending requests, then put it in
                  // the freeSockets pool, but only if we're allowed to do so.
                  const req = socket._httpMessage;
                  if (!req || !req.shouldKeepAlive || !this.keepAlive) {
                    socket.destroy();
                    return;
                  }
                
                  const freeSockets = this.freeSockets[name] || [];
                  const freeLen = freeSockets.length;
                  let count = freeLen;
                  if (this.sockets[name])
                    count += this.sockets[name].length;
                
                  if (this.totalSocketCount > this.maxTotalSockets ||
                      count > this.maxSockets ||
                      freeLen >= this.maxFreeSockets ||
                      !this.keepSocketAlive(socket)) {
                    socket.destroy();
                    return;
                  }
                
                  this.freeSockets[name] = freeSockets;
                  socket[async_id_symbol] = -1;
                  socket._httpMessage = null;
                  this.removeSocket(socket, options);
                
                  socket.once('error', freeSocketErrorListener);
                  freeSockets.push(socket);
                });
                
                // Don't emit keylog events unless there is a listener for them.
                this.on('newListener', maybeEnableKeylog);
              },
              ClientRequest: function ClientRequest(input, options, cb) {
                OutgoingMessage.call(this);
                
                if (typeof input === 'string') {
                  const urlStr = input;
                  try {
                    input = urlToOptions(new URL(urlStr));
                  } catch (err) {
                    input = url.parse(urlStr);
                    if (!input.hostname) {
                      throw err;
                    }
                    if (!urlWarningEmitted && !process.noDeprecation) {
                      urlWarningEmitted = true;
                      process.emitWarning(
                        `The provided URL ${urlStr} is not a valid URL, and is supported ` +
                        'in the http module solely for compatibility.',
                        'DeprecationWarning', 'DEP0109');
                    }
                  }
                } else if (input && input[searchParamsSymbol] &&
                           input[searchParamsSymbol][searchParamsSymbol]) {
                  // url.URL instance
                  input = urlToOptions(input);
                } else {
                  cb = options;
                  options = input;
                  input = null;
                }
                
                if (typeof options === 'function') {
                  cb = options;
                  options = input || {};
                } else {
                  options = ObjectAssign(input || {}, options);
                }
                
                let agent = options.agent;
                const defaultAgent = options._defaultAgent || Agent.globalAgent;
                if (agent === false) {
                  agent = new defaultAgent.constructor();
                } else if (agent === null || agent === undefined) {
                  if (typeof options.createConnection !== 'function') {
                    agent = defaultAgent;
                  }
                  // Explicitly pass through this statement as agent will not be used
                  // when createConnection is provided.
                } else if (typeof agent.addRequest !== 'function') {
                  throw new ERR_INVALID_ARG_TYPE('options.agent',
                                                 ['Agent-like Object', 'undefined', 'false'],
                                                 agent);
                }
                this.agent = agent;
                
                const protocol = options.protocol || defaultAgent.protocol;
                let expectedProtocol = defaultAgent.protocol;
                if (this.agent && this.agent.protocol)
                  expectedProtocol = this.agent.protocol;
                
                if (options.path) {
                  const path = String(options.path);
                  if (INVALID_PATH_REGEX.test(path))
                    throw new ERR_UNESCAPED_CHARACTERS('Request path');
                }
                
                if (protocol !== expectedProtocol) {
                  throw new ERR_INVALID_PROTOCOL(protocol, expectedProtocol);
                }
                
                const defaultPort = options.defaultPort ||
                                  (this.agent && this.agent.defaultPort);
                
                const port = options.port = options.port || defaultPort || 80;
                const host = options.host = validateHost(options.hostname, 'hostname') ||
                                          validateHost(options.host, 'host') || 'localhost';
                
                const setHost = (options.setHost === undefined || Boolean(options.setHost));
                
                this.socketPath = options.socketPath;
                
                if (options.timeout !== undefined)
                  this.timeout = getTimerDuration(options.timeout, 'timeout');
                
                let method = options.method;
                const methodIsString = (typeof method === 'string');
                if (method !== null && method !== undefined && !methodIsString) {
                  throw new ERR_INVALID_ARG_TYPE('options.method', 'string', method);
                }
                
                if (methodIsString && method) {
                  if (!checkIsHttpToken(method)) {
                    throw new ERR_INVALID_HTTP_TOKEN('Method', method);
                  }
                  method = this.method = method.toUpperCase();
                } else {
                  method = this.method = 'GET';
                }
                
                const maxHeaderSize = options.maxHeaderSize;
                if (maxHeaderSize !== undefined)
                  validateInteger(maxHeaderSize, 'maxHeaderSize', 0);
                this.maxHeaderSize = maxHeaderSize;
                
                const insecureHTTPParser = options.insecureHTTPParser;
                if (insecureHTTPParser !== undefined &&
                    typeof insecureHTTPParser !== 'boolean') {
                  throw new ERR_INVALID_ARG_TYPE(
                    'options.insecureHTTPParser', 'boolean', insecureHTTPParser);
                }
                this.insecureHTTPParser = insecureHTTPParser;
                
                this.path = options.path || '/';
                if (cb) {
                  this.once('response', cb);
                }
                
                if (method === 'GET' ||
                    method === 'HEAD' ||
                    method === 'DELETE' ||
                    method === 'OPTIONS' ||
                    method === 'TRACE' ||
                    method === 'CONNECT') {
                  this.useChunkedEncodingByDefault = false;
                } else {
                  this.useChunkedEncodingByDefault = true;
                }
                
                this._ended = false;
                this.res = null;
                this.aborted = false;
                this.timeoutCb = null;
                this.upgradeOrConnect = false;
                this.parser = null;
                this.maxHeadersCount = null;
                this.reusedSocket = false;
                this.host = host;
                this.protocol = protocol;
                
                let called = false;
                
                if (this.agent) {
                  // If there is an agent we should default to Connection:keep-alive,
                  // but only if the Agent will actually reuse the connection!
                  // If it's not a keepAlive agent, and the maxSockets==Infinity, then
                  // there's never a case where this socket will actually be reused
                  if (!this.agent.keepAlive && !NumberIsFinite(this.agent.maxSockets)) {
                    this._last = true;
                    this.shouldKeepAlive = false;
                  } else {
                    this._last = false;
                    this.shouldKeepAlive = true;
                  }
                }
                
                const headersArray = ArrayIsArray(options.headers);
                if (!headersArray) {
                  if (options.headers) {
                    const keys = ObjectKeys(options.headers);
                    // Retain for(;;) loop for performance reasons
                    // Refs: https://github.com/nodejs/node/pull/30958
                    for (let i = 0; i < keys.length; i++) {
                      const key = keys[i];
                      this.setHeader(key, options.headers[key]);
                    }
                  }
                
                  if (host && !this.getHeader('host') && setHost) {
                    let hostHeader = host;
                
                    // For the Host header, ensure that IPv6 addresses are enclosed
                    // in square brackets, as defined by URI formatting
                    // https://tools.ietf.org/html/rfc3986#section-3.2.2
                    const posColon = hostHeader.indexOf(':');
                    if (posColon !== -1 &&
                        hostHeader.includes(':', posColon + 1) &&
                        hostHeader.charCodeAt(0) !== 91/* '[' */) {
                      hostHeader = `[${hostHeader}]`;
                    }
                
                    if (port && +port !== defaultPort) {
                      hostHeader += ':' + port;
                    }
                    this.setHeader('Host', hostHeader);
                  }
                
                  if (options.auth && !this.getHeader('Authorization')) {
                    this.setHeader('Authorization', 'Basic ' +
                                   Buffer.from(options.auth).toString('base64'));
                  }
                
                  if (this.getHeader('expect')) {
                    if (this._header) {
                      throw new ERR_HTTP_HEADERS_SENT('render');
                    }
                
                    this._storeHeader(this.method + ' ' + this.path + ' HTTP/1.1\r\n',
                                      this[kOutHeaders]);
                  }
                } else {
                  this._storeHeader(this.method + ' ' + this.path + ' HTTP/1.1\r\n',
                                    options.headers);
                }
                
                const oncreate = (err, socket) => {
                  if (called)
                    return;
                  called = true;
                  if (err) {
                    process.nextTick(() => this.emit('error', err));
                    return;
                  }
                  this.onSocket(socket);
                  this._deferToConnect(null, null, () => this._flush());
                };
                
                // initiate connection
                if (this.agent) {
                  this.agent.addRequest(this, options);
                } else {
                  // No agent, default to Connection:close.
                  this._last = true;
                  this.shouldKeepAlive = false;
                  if (typeof options.createConnection === 'function') {
                    const newSocket = options.createConnection(options, oncreate);
                    if (newSocket && !called) {
                      called = true;
                      this.onSocket(newSocket);
                    } else {
                      return;
                    }
                  } else {
                    debug('CLIENT use net.createConnection', options);
                    this.onSocket(net.createConnection(options));
                  }
                }
                
                this._deferToConnect(null, null, () => this._flush());
              },
              IncomingMessage: function IncomingMessage(socket) {
                let streamOptions;
                
                if (socket) {
                  streamOptions = {
                    highWaterMark: socket.readableHighWaterMark
                  };
                }
                
                Stream.Readable.call(this, { autoDestroy: false, ...streamOptions });
                
                this._readableState.readingMore = true;
                
                this.socket = socket;
                
                this.httpVersionMajor = null;
                this.httpVersionMinor = null;
                this.httpVersion = null;
                this.complete = false;
                this.headers = {};
                this.rawHeaders = [];
                this.trailers = {};
                this.rawTrailers = [];
                
                this.aborted = false;
                
                this.upgrade = null;
                
                // request (server) only
                this.url = '';
                this.method = null;
                
                // response (client) only
                this.statusCode = null;
                this.statusMessage = null;
                this.client = socket;
                
                this._consuming = false;
                // Flag for when we decide that this message cannot possibly be
                // read by the user, so there's no point continuing to handle it.
                this._dumped = false;
              },
              OutgoingMessage: function OutgoingMessage() {
                Stream.call(this);
                
                // Queue that holds all currently pending data, until the response will be
                // assigned to the socket (until it will its turn in the HTTP pipeline).
                this.outputData = [];
                
                // `outputSize` is an approximate measure of how much data is queued on this
                // response. `_onPendingData` will be invoked to update similar global
                // per-connection counter. That counter will be used to pause/unpause the
                // TCP socket and HTTP Parser and thus handle the backpressure.
                this.outputSize = 0;
                
                this.writable = true;
                this.destroyed = false;
                
                this._last = false;
                this.chunkedEncoding = false;
                this.shouldKeepAlive = true;
                this._defaultKeepAlive = true;
                this.useChunkedEncodingByDefault = true;
                this.sendDate = false;
                this._removedConnection = false;
                this._removedContLen = false;
                this._removedTE = false;
                
                this._contentLength = null;
                this._hasBody = true;
                this._trailer = '';
                this[kNeedDrain] = false;
                
                this.finished = false;
                this._headerSent = false;
                this[kCorked] = 0;
                
                this.socket = null;
                this._header = null;
                this[kOutHeaders] = null;
                
                this._keepAliveTimeout = 0;
                
                this._onPendingData = noopPendingOutput;
              },
              Server: function Server(options, requestListener) {
                if (!(this instanceof Server)) return new Server(options, requestListener);
                
                if (typeof options === 'function') {
                  requestListener = options;
                  options = {};
                } else if (options == null || typeof options === 'object') {
                  options = { ...options };
                } else {
                  throw new ERR_INVALID_ARG_TYPE('options', 'object', options);
                }
                
                this[kIncomingMessage] = options.IncomingMessage || IncomingMessage;
                this[kServerResponse] = options.ServerResponse || ServerResponse;
                
                const maxHeaderSize = options.maxHeaderSize;
                if (maxHeaderSize !== undefined)
                  validateInteger(maxHeaderSize, 'maxHeaderSize', 0);
                this.maxHeaderSize = maxHeaderSize;
                
                const insecureHTTPParser = options.insecureHTTPParser;
                if (insecureHTTPParser !== undefined)
                  validateBoolean(insecureHTTPParser, 'options.insecureHTTPParser');
                this.insecureHTTPParser = insecureHTTPParser;
                
                net.Server.call(this, { allowHalfOpen: true });
                
                if (requestListener) {
                  this.on('request', requestListener);
                }
                
                // Similar option to this. Too lazy to write my own docs.
                // http://www.squid-cache.org/Doc/config/half_closed_clients/
                // https://wiki.squid-cache.org/SquidFaq/InnerWorkings#What_is_a_half-closed_filedescriptor.3F
                this.httpAllowHalfOpen = false;
                
                this.on('connection', connectionListener);
                
                this.timeout = 0;
                this.keepAliveTimeout = 5000;
                this.maxHeadersCount = null;
                this.headersTimeout = 60 * 1000; // 60 seconds
                this.requestTimeout = 0;
              },
              ServerResponse: function ServerResponse(req) {
                OutgoingMessage.call(this);
                
                if (req.method === 'HEAD') this._hasBody = false;
                
                this.sendDate = true;
                this._sent100 = false;
                this._expect_continue = false;
                
                if (req.httpVersionMajor < 1 || req.httpVersionMinor < 1) {
                  this.useChunkedEncodingByDefault = chunkExpression.test(req.headers.te);
                  this.shouldKeepAlive = false;
                }
                
                const httpObserverCount = observerCounts[NODE_PERFORMANCE_ENTRY_TYPE_HTTP];
                if (httpObserverCount > 0) {
                  this[kServerResponseStatistics] = {
                    startTime: process.hrtime()
                  };
                }
              },
              createServer: function createServer(opts, requestListener) {
                return new Server(opts, requestListener);
              },
              validateHeaderName: function hidden(...args) {
                // Make sure the most outer `hideStackFrames()` function is used.
                let setStackFn = false;
                if (excludedStackFn === undefined) {
                  excludedStackFn = hidden;
                  setStackFn = true;
                }
                try {
                  return fn(...args);
                } finally {
                  if (setStackFn === true) {
                    excludedStackFn = undefined;
                  }
                }
              },
              validateHeaderValue: function hidden(...args) {
                // Make sure the most outer `hideStackFrames()` function is used.
                let setStackFn = false;
                if (excludedStackFn === undefined) {
                  excludedStackFn = hidden;
                  setStackFn = true;
                }
                try {
                  return fn(...args);
                } finally {
                  if (setStackFn === true) {
                    excludedStackFn = undefined;
                  }
                }
              },
              get: function get(url, options, cb) {
                const req = request(url, options, cb);
                req.end();
                return req;
              },
              request: function request(url, options, cb) {
                return new ClientRequest(url, options, cb);
              },
              maxHeaderSize: 16384,
              globalAgent: {
                _events: {
                  free: (socket, options) => {
                    const name = this.getName(options);
                    debug('agent.on(free)', name);
                    
                    // TODO(ronag): socket.destroy(err) might have been called
                    // before coming here and have an 'error' scheduled. In the
                    // case of socket.destroy() below this 'error' has no handler
                    // and could cause unhandled exception.
                    
                    if (!socket.writable) {
                      socket.destroy();
                      return;
                    }
                    
                    const requests = this.requests[name];
                    if (requests && requests.length) {
                      const req = requests.shift();
                      const reqAsyncRes = req[kRequestAsyncResource];
                      if (reqAsyncRes) {
                        // Run request within the original async context.
                        reqAsyncRes.runInAsyncScope(() => {
                          asyncResetHandle(socket);
                          setRequestSocket(this, req, socket);
                        });
                        req[kRequestAsyncResource] = null;
                      } else {
                        setRequestSocket(this, req, socket);
                      }
                      if (requests.length === 0) {
                        delete this.requests[name];
                      }
                      return;
                    }
                    
                    // If there are no pending requests, then put it in
                    // the freeSockets pool, but only if we're allowed to do so.
                    const req = socket._httpMessage;
                    if (!req || !req.shouldKeepAlive || !this.keepAlive) {
                      socket.destroy();
                      return;
                    }
                    
                    const freeSockets = this.freeSockets[name] || [];
                    const freeLen = freeSockets.length;
                    let count = freeLen;
                    if (this.sockets[name])
                      count += this.sockets[name].length;
                    
                    if (this.totalSocketCount > this.maxTotalSockets ||
                        count > this.maxSockets ||
                        freeLen >= this.maxFreeSockets ||
                        !this.keepSocketAlive(socket)) {
                      socket.destroy();
                      return;
                    }
                    
                    this.freeSockets[name] = freeSockets;
                    socket[async_id_symbol] = -1;
                    socket._httpMessage = null;
                    this.removeSocket(socket, options);
                    
                    socket.once('error', freeSocketErrorListener);
                    freeSockets.push(socket);
                  },
                  newListener: function maybeEnableKeylog(eventName) {
                    if (eventName === 'keylog') {
                      this.removeListener('newListener', maybeEnableKeylog);
                      // Future sockets will listen on keylog at creation.
                      const agent = this;
                      this[kOnKeylog] = function onkeylog(keylog) {
                        agent.emit('keylog', keylog, this);
                      };
                      // Existing sockets will start listening on keylog now.
                      for (const socket of ObjectValues(this.sockets)) {
                        socket.on('keylog', this[kOnKeylog]);
                      }
                    }
                  },
                },
                _eventsCount: 2,
                _maxListeners: undefined,
                defaultPort: 80,
                protocol: "http:",
                options: {
                  path: null,
                },
                requests: {
                },
                sockets: {
                },
                freeSockets: {
                },
                keepAliveMsecs: 1000,
                keepAlive: false,
                maxSockets: Infinity,
                maxFreeSockets: 256,
                scheduling: "fifo",
                maxTotalSockets: Infinity,
                totalSocketCount: 0,
              },
            },
            "https:": {
              Agent: function Agent(options) {
                if (!(this instanceof Agent))
                  return new Agent(options);
                
                HttpAgent.call(this, options);
                this.defaultPort = 443;
                this.protocol = 'https:';
                this.maxCachedSessions = this.options.maxCachedSessions;
                if (this.maxCachedSessions === undefined)
                  this.maxCachedSessions = 100;
                
                this._sessionCache = {
                  map: {},
                  list: []
                };
              },
              globalAgent: {
                _events: {
                  free: (socket, options) => {
                    const name = this.getName(options);
                    debug('agent.on(free)', name);
                    
                    // TODO(ronag): socket.destroy(err) might have been called
                    // before coming here and have an 'error' scheduled. In the
                    // case of socket.destroy() below this 'error' has no handler
                    // and could cause unhandled exception.
                    
                    if (!socket.writable) {
                      socket.destroy();
                      return;
                    }
                    
                    const requests = this.requests[name];
                    if (requests && requests.length) {
                      const req = requests.shift();
                      const reqAsyncRes = req[kRequestAsyncResource];
                      if (reqAsyncRes) {
                        // Run request within the original async context.
                        reqAsyncRes.runInAsyncScope(() => {
                          asyncResetHandle(socket);
                          setRequestSocket(this, req, socket);
                        });
                        req[kRequestAsyncResource] = null;
                      } else {
                        setRequestSocket(this, req, socket);
                      }
                      if (requests.length === 0) {
                        delete this.requests[name];
                      }
                      return;
                    }
                    
                    // If there are no pending requests, then put it in
                    // the freeSockets pool, but only if we're allowed to do so.
                    const req = socket._httpMessage;
                    if (!req || !req.shouldKeepAlive || !this.keepAlive) {
                      socket.destroy();
                      return;
                    }
                    
                    const freeSockets = this.freeSockets[name] || [];
                    const freeLen = freeSockets.length;
                    let count = freeLen;
                    if (this.sockets[name])
                      count += this.sockets[name].length;
                    
                    if (this.totalSocketCount > this.maxTotalSockets ||
                        count > this.maxSockets ||
                        freeLen >= this.maxFreeSockets ||
                        !this.keepSocketAlive(socket)) {
                      socket.destroy();
                      return;
                    }
                    
                    this.freeSockets[name] = freeSockets;
                    socket[async_id_symbol] = -1;
                    socket._httpMessage = null;
                    this.removeSocket(socket, options);
                    
                    socket.once('error', freeSocketErrorListener);
                    freeSockets.push(socket);
                  },
                  newListener: function maybeEnableKeylog(eventName) {
                    if (eventName === 'keylog') {
                      this.removeListener('newListener', maybeEnableKeylog);
                      // Future sockets will listen on keylog at creation.
                      const agent = this;
                      this[kOnKeylog] = function onkeylog(keylog) {
                        agent.emit('keylog', keylog, this);
                      };
                      // Existing sockets will start listening on keylog now.
                      for (const socket of ObjectValues(this.sockets)) {
                        socket.on('keylog', this[kOnKeylog]);
                      }
                    }
                  },
                },
                _eventsCount: 2,
                _maxListeners: undefined,
                defaultPort: 443,
                protocol: "https:",
                options: {
                  path: null,
                },
                requests: {
                },
                sockets: {
                  "soccer.sportmonks.com:443::::::::::::::::::": [
                    {
                      _tlsOptions: {
                        allowHalfOpen: undefined,
                        pipe: false,
                        secureContext: {
                          context: {
                          },
                          singleUse: true,
                        },
                        isServer: false,
                        requestCert: true,
                        rejectUnauthorized: true,
                        session: undefined,
                        ALPNProtocols: undefined,
                        requestOCSP: undefined,
                        enableTrace: undefined,
                        pskCallback: undefined,
                        highWaterMark: undefined,
                      },
                      _secureEstablished: true,
                      _securePending: false,
                      _newSessionPending: false,
                      _controlReleased: true,
                      secureConnecting: false,
                      _SNICallback: null,
                      servername: "soccer.sportmonks.com",
                      alpnProtocol: false,
                      authorized: true,
                      authorizationError: null,
                      encrypted: true,
                      _events: {
                        close: [
                          function onSocketCloseDestroySSL() {
                            // Make sure we are not doing it on OpenSSL's stack
                            setImmediate(destroySSL, this);
                            this[kRes] = null;
                          },
                          function () { [native_code] },
                          function onClose(err) {
                            debug('CLIENT socket onClose');
                            // This is the only place where sockets get removed from the Agent.
                            // If you want to remove a socket from the pool, just close it.
                            // All socket errors end in a close event anyway.
                            agent.removeSocket(s, options);
                          },
                          function socketCloseListener() {
                            const socket = this;
                            const req = socket._httpMessage;
                            debug('HTTP socket close');
                            
                            // Pull through final chunk, if anything is buffered.
                            // the ondata function will handle it properly, and this
                            // is a no-op if no final chunk remains.
                            socket.read();
                            
                            // NOTE: It's important to get parser here, because it could be freed by
                            // the `socketOnData`.
                            const parser = socket.parser;
                            const res = req.res;
                            
                            req.destroyed = true;
                            if (res) {
                              // Socket closed before we emitted 'end' below.
                              if (!res.complete) {
                                res.aborted = true;
                                res.emit('aborted');
                              }
                              req.emit('close');
                              if (!res.aborted && res.readable) {
                                res.on('end', function() {
                                  this.emit('close');
                                });
                                res.push(null);
                              } else {
                                res.emit('close');
                              }
                            } else {
                              if (!req.socket._hadError) {
                                // This socket error fired before we started to
                                // receive a response. The error needs to
                                // fire on the request.
                                req.socket._hadError = true;
                                req.emit('error', connResetException('socket hang up'));
                              }
                              req.emit('close');
                            }
                            
                            // Too bad.  That output wasn't getting written.
                            // This is pretty terrible that it doesn't raise an error.
                            // Fixed better in v0.10
                            if (req.outputData)
                              req.outputData.length = 0;
                            
                            if (parser) {
                              parser.finish();
                              freeParser(parser, req, socket);
                            }
                          },
                        ],
                        end: function onReadableStreamEnd() {
                          if (!this.allowHalfOpen) {
                            this.write = writeAfterFIN;
                            if (this.writable)
                              this.end();
                            else if (!this.writableLength)
                              this.destroy();
                          } else if (!this.destroyed && !this.writable && !this.writableLength)
                            this.destroy();
                        },
                        newListener: function keylogNewListener(event) {
                          if (event !== 'keylog')
                            return;
                          
                          ssl.enableKeylogCallback();
                          
                          // Remove this listener since it's no longer needed.
                          this.removeListener('newListener', keylogNewListener);
                        },
                        secure: function onConnectSecure() {
                          const options = this[kConnectOptions];
                          
                          // Check the size of DHE parameter above minimum requirement
                          // specified in options.
                          const ekeyinfo = this.getEphemeralKeyInfo();
                          if (ekeyinfo.type === 'DH' && ekeyinfo.size < options.minDHSize) {
                            const err = new ERR_TLS_DH_PARAM_SIZE(ekeyinfo.size);
                            debug('client emit:', err);
                            this.emit('error', err);
                            this.destroy();
                            return;
                          }
                          
                          let verifyError = this._handle.verifyError();
                          
                          // Verify that server's identity matches it's certificate's names
                          // Unless server has resumed our existing session
                          if (!verifyError && !this.isSessionReused()) {
                            const hostname = options.servername ||
                                           options.host ||
                                           (options.socket && options.socket._host) ||
                                           'localhost';
                            const cert = this.getPeerCertificate(true);
                            verifyError = options.checkServerIdentity(hostname, cert);
                          }
                          
                          if (verifyError) {
                            this.authorized = false;
                            this.authorizationError = verifyError.code || verifyError.message;
                          
                            if (options.rejectUnauthorized) {
                              this.destroy(verifyError);
                              return;
                            }
                            debug('client emit secureConnect. rejectUnauthorized: %s, ' +
                                  'authorizationError: %s', options.rejectUnauthorized,
                                  this.authorizationError);
                            this.secureConnecting = false;
                            this.emit('secureConnect');
                          } else {
                            this.authorized = true;
                            debug('client emit secureConnect. authorized:', this.authorized);
                            this.secureConnecting = false;
                            this.emit('secureConnect');
                          }
                          
                          this[kIsVerified] = true;
                          const session = this[kPendingSession];
                          this[kPendingSession] = null;
                          if (session)
                            this.emit('session', session);
                          
                          this.removeListener('end', onConnectEnd);
                        },
                        session: (session) => {
                          this._cacheSession(options._agentKey, session);
                        },
                        free: function onFree() {
                          debug('CLIENT socket onFree');
                          agent.emit('free', s, options);
                        },
                        timeout: function onTimeout() {
                          debug('CLIENT socket onTimeout');
                          
                          // Destroy if in free list.
                          // TODO(ronag): Always destroy, even if not in free list.
                          const sockets = agent.freeSockets;
                          for (const name of ObjectKeys(sockets)) {
                            if (sockets[name].includes(s)) {
                              return s.destroy();
                            }
                          }
                        },
                        agentRemove: function onRemove() {
                          // We need this function for cases like HTTP 'upgrade'
                          // (defined by WebSockets) where we need to remove a socket from the
                          // pool because it'll be locked up indefinitely
                          debug('CLIENT socket onRemove');
                          agent.removeSocket(s, options);
                          s.removeListener('close', onClose);
                          s.removeListener('free', onFree);
                          s.removeListener('timeout', onTimeout);
                          s.removeListener('agentRemove', onRemove);
                        },
                        error: function socketErrorListener(err) {
                          const socket = this;
                          const req = socket._httpMessage;
                          debug('SOCKET ERROR:', err.message, err.stack);
                          
                          if (req) {
                            // For Safety. Some additional errors might fire later on
                            // and we need to make sure we don't double-fire the error event.
                            req.socket._hadError = true;
                            req.emit('error', err);
                          }
                          
                          const parser = socket.parser;
                          if (parser) {
                            parser.finish();
                            freeParser(parser, req, socket);
                          }
                          
                          // Ensure that no further data will come out of the socket
                          socket.removeListener('data', socketOnData);
                          socket.removeListener('end', socketOnEnd);
                          socket.destroy();
                        },
                        finish: function () { [native_code] },
                      },
                      _eventsCount: 10,
                      connecting: false,
                      _hadError: false,
                      _parent: null,
                      _host: "soccer.sportmonks.com",
                      _readableState: {
                        objectMode: false,
                        highWaterMark: 16384,
                        buffer: {
                          head: null,
                          tail: null,
                          length: 0,
                        },
                        length: 0,
                        pipes: [
                        ],
                        flowing: true,
                        ended: false,
                        endEmitted: false,
                        reading: true,
                        sync: false,
                        needReadable: true,
                        emittedReadable: false,
                        readableListening: false,
                        resumeScheduled: false,
                        errorEmitted: false,
                        emitClose: false,
                        autoDestroy: false,
                        destroyed: false,
                        errored: null,
                        closed: false,
                        closeEmitted: false,
                        defaultEncoding: "utf8",
                        awaitDrainWriters: null,
                        multiAwaitDrain: false,
                        readingMore: false,
                        decoder: null,
                        encoding: null,
                      },
                      _maxListeners: undefined,
                      _writableState: {
                        objectMode: false,
                        highWaterMark: 16384,
                        finalCalled: true,
                        needDrain: false,
                        ending: true,
                        ended: true,
                        finished: false,
                        destroyed: false,
                        decodeStrings: false,
                        defaultEncoding: "utf8",
                        length: 0,
                        writing: false,
                        corked: 0,
                        sync: false,
                        bufferProcessing: false,
                        onwrite: function () { [native_code] },
                        writecb: null,
                        writelen: 0,
                        afterWriteTickInfo: null,
                        buffered: [
                        ],
                        bufferedIndex: 0,
                        allBuffers: true,
                        allNoop: true,
                        pendingcb: 1,
                        prefinished: false,
                        errorEmitted: false,
                        emitClose: false,
                        autoDestroy: false,
                        errored: null,
                        closed: false,
                        closeEmitted: false,
                        writable: true,
                      },
                      allowHalfOpen: false,
                      _sockname: null,
                      _pendingData: null,
                      _pendingEncoding: "",
                      server: undefined,
                      _server: null,
                      ssl: {
                        _parent: {
                          reading: true,
                          onconnection: null,
                        },
                        _parentWrap: undefined,
                        _secureContext: {
                          context: {
                          },
                          singleUse: true,
                        },
                        reading: true,
                        onkeylog: function onkeylog(line) {
                          debug('onkeylog');
                          this[owner_symbol].emit('keylog', line);
                        },
                        onhandshakestart: () => {},
                        onhandshakedone: () => {
                          debug('client onhandshakedone');
                          this._finishInit();
                        },
                        onocspresponse: function onocspresponse(resp) {
                          debug('client onocspresponse');
                          this[owner_symbol].emit('OCSPResponse', resp);
                        },
                        onnewsession: function onnewsessionclient(sessionId, session) {
                          debug('client emit session');
                          const owner = this[owner_symbol];
                          if (owner[kIsVerified]) {
                            owner.emit('session', session);
                          } else {
                            owner[kPendingSession] = session;
                          }
                        },
                        onerror: function onerror(err) {
                          const owner = this[owner_symbol];
                          debug('%s onerror %s had? %j',
                                owner._tlsOptions.isServer ? 'server' : 'client', err,
                                owner._hadError);
                          
                          if (owner._hadError)
                            return;
                          
                          owner._hadError = true;
                          
                          // Destroy socket if error happened before handshake's finish
                          if (!owner._secureEstablished) {
                            // When handshake fails control is not yet released,
                            // so self._tlsError will return null instead of actual error
                            owner.destroy(err);
                          } else if (owner._tlsOptions.isServer &&
                                     owner._rejectUnauthorized &&
                                     /peer did not return a certificate/.test(err.message)) {
                            // Ignore server's authorization errors
                            owner.destroy();
                          } else {
                            // Emit error
                            owner._emitTLSError(err);
                          }
                        },
                      },
                      _requestCert: true,
                      _rejectUnauthorized: true,
                      parser: null,
                      _httpMessage: [Circular],
                    },
                  ],
                },
                freeSockets: {
                },
                keepAliveMsecs: 1000,
                keepAlive: false,
                maxSockets: Infinity,
                maxFreeSockets: 256,
                scheduling: "fifo",
                maxTotalSockets: Infinity,
                totalSocketCount: 1,
                maxCachedSessions: 100,
                _sessionCache: {
                  map: {
                    "soccer.sportmonks.com:443::::::::::::::::::": {
                      "0": 48,
                      "1": 130,
                      "2": 6,
                      "3": 48,
                      "4": 2,
                      "5": 1,
                      "6": 1,
                      "7": 2,
                      "8": 2,
                      "9": 3,
                      "10": 4,
                      "11": 4,
                      "12": 2,
                      "13": 19,
                      "14": 2,
                      "15": 4,
                      "16": 32,
                      "17": 125,
                      "18": 213,
                      "19": 245,
                      "20": 247,
                      "21": 252,
                      "22": 112,
                      "23": 88,
                      "24": 174,
                      "25": 14,
                      "26": 4,
                      "27": 11,
                      "28": 28,
                      "29": 14,
                      "30": 140,
                      "31": 147,
                      "32": 116,
                      "33": 35,
                      "34": 141,
                      "35": 58,
                      "36": 72,
                      "37": 12,
                      "38": 113,
                      "39": 42,
                      "40": 123,
                      "41": 86,
                      "42": 173,
                      "43": 49,
                      "44": 48,
                      "45": 7,
                      "46": 225,
                      "47": 196,
                      "48": 95,
                      "49": 4,
                      "50": 48,
                      "51": 18,
                      "52": 102,
                      "53": 83,
                      "54": 41,
                      "55": 207,
                      "56": 7,
                      "57": 12,
                      "58": 163,
                      "59": 204,
                      "60": 120,
                      "61": 84,
                      "62": 194,
                      "63": 0,
                      "64": 251,
                      "65": 120,
                      "66": 193,
                      "67": 91,
                      "68": 163,
                      "69": 180,
                      "70": 99,
                      "71": 50,
                      "72": 174,
                      "73": 245,
                      "74": 97,
                      "75": 164,
                      "76": 252,
                      "77": 241,
                      "78": 26,
                      "79": 178,
                      "80": 155,
                      "81": 135,
                      "82": 234,
                      "83": 135,
                      "84": 14,
                      "85": 14,
                      "86": 251,
                      "87": 5,
                      "88": 97,
                      "89": 17,
                      "90": 26,
                      "91": 250,
                      "92": 132,
                      "93": 129,
                      "94": 79,
                      "95": 92,
                      "96": 50,
                      "97": 0,
                      "98": 56,
                      "99": 161,
                      "100": 6,
                      "101": 2,
                      "102": 4,
                      "103": 96,
                      "104": 191,
                      "105": 75,
                      "106": 54,
                      "107": 162,
                      "108": 4,
                      "109": 2,
                      "110": 2,
                      "111": 28,
                      "112": 32,
                      "113": 163,
                      "114": 130,
                      "115": 4,
                      "116": 204,
                      "117": 48,
                      "118": 130,
                      "119": 4,
                      "120": 200,
                      "121": 48,
                      "122": 130,
                      "123": 4,
                      "124": 110,
                      "125": 160,
                      "126": 3,
                      "127": 2,
                      "128": 1,
                      "129": 2,
                      "130": 2,
                      "131": 16,
                      "132": 14,
                      "133": 38,
                      "134": 122,
                      "135": 10,
                      "136": 89,
                      "137": 196,
                      "138": 177,
                      "139": 207,
                      "140": 117,
                      "141": 194,
                      "142": 72,
                      "143": 243,
                      "144": 227,
                      "145": 41,
                      "146": 79,
                      "147": 107,
                      "148": 48,
                      "149": 10,
                      "150": 6,
                      "151": 8,
                      "152": 42,
                      "153": 134,
                      "154": 72,
                      "155": 206,
                      "156": 61,
                      "157": 4,
                      "158": 3,
                      "159": 2,
                      "160": 48,
                      "161": 74,
                      "162": 49,
                      "163": 11,
                      "164": 48,
                      "165": 9,
                      "166": 6,
                      "167": 3,
                      "168": 85,
                      "169": 4,
                      "170": 6,
                      "171": 19,
                      "172": 2,
                      "173": 85,
                      "174": 83,
                      "175": 49,
                      "176": 25,
                      "177": 48,
                      "178": 23,
                      "179": 6,
                      "180": 3,
                      "181": 85,
                      "182": 4,
                      "183": 10,
                      "184": 19,
                      "185": 16,
                      "186": 67,
                      "187": 108,
                      "188": 111,
                      "189": 117,
                      "190": 100,
                      "191": 102,
                      "192": 108,
                      "193": 97,
                      "194": 114,
                      "195": 101,
                      "196": 44,
                      "197": 32,
                      "198": 73,
                      "199": 110,
                      "200": 99,
                      "201": 46,
                      "202": 49,
                      "203": 32,
                      "204": 48,
                      "205": 30,
                      "206": 6,
                      "207": 3,
                      "208": 85,
                      "209": 4,
                      "210": 3,
                      "211": 19,
                      "212": 23,
                      "213": 67,
                      "214": 108,
                      "215": 111,
                      "216": 117,
                      "217": 100,
                      "218": 102,
                      "219": 108,
                      "220": 97,
                      "221": 114,
                      "222": 101,
                      "223": 32,
                      "224": 73,
                      "225": 110,
                      "226": 99,
                      "227": 32,
                      "228": 69,
                      "229": 67,
                      "230": 67,
                      "231": 32,
                      "232": 67,
                      "233": 65,
                      "234": 45,
                      "235": 51,
                      "236": 48,
                      "237": 30,
                      "238": 23,
                      "239": 13,
                      "240": 50,
                      "241": 48,
                      "242": 48,
                      "243": 55,
                      "244": 49,
                      "245": 55,
                      "246": 48,
                      "247": 48,
                      "248": 48,
                      "249": 48,
                      "250": 48,
                      "251": 48,
                      "252": 90,
                      "253": 23,
                      "254": 13,
                      "255": 50,
                      "256": 49,
                      "257": 48,
                      "258": 55,
                      "259": 49,
                      "260": 55,
                      "261": 49,
                      "262": 50,
                      "263": 48,
                      "264": 48,
                      "265": 48,
                      "266": 48,
                      "267": 90,
                      "268": 48,
                      "269": 109,
                      "270": 49,
                      "271": 11,
                      "272": 48,
                      "273": 9,
                      "274": 6,
                      "275": 3,
                      "276": 85,
                      "277": 4,
                      "278": 6,
                      "279": 19,
                      "280": 2,
                      "281": 85,
                      "282": 83,
                      "283": 49,
                      "284": 11,
                      "285": 48,
                      "286": 9,
                      "287": 6,
                      "288": 3,
                      "289": 85,
                      "290": 4,
                      "291": 8,
                      "292": 19,
                      "293": 2,
                      "294": 67,
                      "295": 65,
                      "296": 49,
                      "297": 22,
                      "298": 48,
                      "299": 20,
                      "300": 6,
                      "301": 3,
                      "302": 85,
                      "303": 4,
                      "304": 7,
                      "305": 19,
                      "306": 13,
                      "307": 83,
                      "308": 97,
                      "309": 110,
                      "310": 32,
                      "311": 70,
                      "312": 114,
                      "313": 97,
                      "314": 110,
                      "315": 99,
                      "316": 105,
                      "317": 115,
                      "318": 99,
                      "319": 111,
                      "320": 49,
                      "321": 25,
                      "322": 48,
                      "323": 23,
                      "324": 6,
                      "325": 3,
                      "326": 85,
                      "327": 4,
                      "328": 10,
                      "329": 19,
                      "330": 16,
                      "331": 67,
                      "332": 108,
                      "333": 111,
                      "334": 117,
                      "335": 100,
                      "336": 102,
                      "337": 108,
                      "338": 97,
                      "339": 114,
                      "340": 101,
                      "341": 44,
                      "342": 32,
                      "343": 73,
                      "344": 110,
                      "345": 99,
                      "346": 46,
                      "347": 49,
                      "348": 30,
                      "349": 48,
                      "350": 28,
                      "351": 6,
                      "352": 3,
                      "353": 85,
                      "354": 4,
                      "355": 3,
                      "356": 19,
                      "357": 21,
                      "358": 115,
                      "359": 110,
                      "360": 105,
                      "361": 46,
                      "362": 99,
                      "363": 108,
                      "364": 111,
                      "365": 117,
                      "366": 100,
                      "367": 102,
                      "368": 108,
                      "369": 97,
                      "370": 114,
                      "371": 101,
                      "372": 115,
                      "373": 115,
                      "374": 108,
                      "375": 46,
                      "376": 99,
                      "377": 111,
                      "378": 109,
                      "379": 48,
                      "380": 89,
                      "381": 48,
                      "382": 19,
                      "383": 6,
                      "384": 7,
                      "385": 42,
                      "386": 134,
                      "387": 72,
                      "388": 206,
                      "389": 61,
                      "390": 2,
                      "391": 1,
                      "392": 6,
                      "393": 8,
                      "394": 42,
                      "395": 134,
                      "396": 72,
                      "397": 206,
                      "398": 61,
                      "399": 3,
                      "400": 1,
                      "401": 7,
                      "402": 3,
                      "403": 66,
                      "404": 0,
                      "405": 4,
                      "406": 88,
                      "407": 59,
                      "408": 40,
                      "409": 148,
                      "410": 3,
                      "411": 43,
                      "412": 156,
                      "413": 118,
                      "414": 179,
                      "415": 53,
                      "416": 95,
                      "417": 72,
                      "418": 28,
                      "419": 43,
                      "420": 9,
                      "421": 251,
                      "422": 166,
                      "423": 229,
                      "424": 72,
                      "425": 170,
                      "426": 243,
                      "427": 128,
                      "428": 226,
                      "429": 204,
                      "430": 247,
                      "431": 83,
                      "432": 219,
                      "433": 69,
                      "434": 83,
                      "435": 28,
                      "436": 72,
                      "437": 206,
                      "438": 165,
                      "439": 141,
                      "440": 91,
                      "441": 101,
                      "442": 246,
                      "443": 82,
                      "444": 234,
                      "445": 7,
                      "446": 250,
                      "447": 0,
                      "448": 214,
                      "449": 174,
                      "450": 52,
                      "451": 9,
                      "452": 250,
                      "453": 34,
                      "454": 224,
                      "455": 142,
                      "456": 137,
                      "457": 153,
                      "458": 21,
                      "459": 200,
                      "460": 15,
                      "461": 210,
                      "462": 73,
                      "463": 255,
                      "464": 26,
                      "465": 80,
                      "466": 42,
                      "467": 55,
                      "468": 48,
                      "469": 30,
                      "470": 163,
                      "471": 130,
                      "472": 3,
                      "473": 17,
                      "474": 48,
                      "475": 130,
                      "476": 3,
                      "477": 13,
                      "478": 48,
                      "479": 31,
                      "480": 6,
                      "481": 3,
                      "482": 85,
                      "483": 29,
                      "484": 35,
                      "485": 4,
                      "486": 24,
                      "487": 48,
                      "488": 22,
                      "489": 128,
                      "490": 20,
                      "491": 165,
                      "492": 206,
                      "493": 55,
                      "494": 234,
                      "495": 235,
                      "496": 176,
                      "497": 117,
                      "498": 14,
                      "499": 148,
                      "500": 103,
                      "501": 136,
                      "502": 180,
                      "503": 69,
                      "504": 250,
                      "505": 217,
                      "506": 36,
                      "507": 16,
                      "508": 135,
                      "509": 150,
                      "510": 31,
                      "511": 48,
                      "512": 29,
                      "513": 6,
                      "514": 3,
                      "515": 85,
                      "516": 29,
                      "517": 14,
                      "518": 4,
                      "519": 22,
                      "520": 4,
                      "521": 20,
                      "522": 181,
                      "523": 105,
                      "524": 75,
                      "525": 133,
                      "526": 51,
                      "527": 172,
                      "528": 244,
                      "529": 50,
                      "530": 4,
                      "531": 2,
                      "532": 206,
                      "533": 113,
                      "534": 182,
                      "535": 4,
                      "536": 241,
                      "537": 34,
                      "538": 239,
                      "539": 178,
                      "540": 29,
                      "541": 253,
                      "542": 48,
                      "543": 66,
                      "544": 6,
                      "545": 3,
                      "546": 85,
                      "547": 29,
                      "548": 17,
                      "549": 4,
                      "550": 59,
                      "551": 48,
                      "552": 57,
                      "553": 130,
                      "554": 14,
                      "555": 115,
                      "556": 112,
                      "557": 111,
                      "558": 114,
                      "559": 116,
                      "560": 109,
                      "561": 111,
                      "562": 110,
                      "563": 107,
                      "564": 115,
                      "565": 46,
                      "566": 99,
                      "567": 111,
                      "568": 109,
                      "569": 130,
                      "570": 16,
                      "571": 42,
                      "572": 46,
                      "573": 115,
                      "574": 112,
                      "575": 111,
                      "576": 114,
                      "577": 116,
                      "578": 109,
                      "579": 111,
                      "580": 110,
                      "581": 107,
                      "582": 115,
                      "583": 46,
                      "584": 99,
                      "585": 111,
                      "586": 109,
                      "587": 130,
                      "588": 21,
                      "589": 115,
                      "590": 110,
                      "591": 105,
                      "592": 46,
                      "593": 99,
                      "594": 108,
                      "595": 111,
                      "596": 117,
                      "597": 100,
                      "598": 102,
                      "599": 108,
                      "600": 97,
                      "601": 114,
                      "602": 101,
                      "603": 115,
                      "604": 115,
                      "605": 108,
                      "606": 46,
                      "607": 99,
                      "608": 111,
                      "609": 109,
                      "610": 48,
                      "611": 14,
                      "612": 6,
                      "613": 3,
                      "614": 85,
                      "615": 29,
                      "616": 15,
                      "617": 1,
                      "618": 1,
                      "619": 255,
                      "620": 4,
                      "621": 4,
                      "622": 3,
                      "623": 2,
                      "624": 7,
                      "625": 128,
                      "626": 48,
                      "627": 29,
                      "628": 6,
                      "629": 3,
                      "630": 85,
                      "631": 29,
                      "632": 37,
                      "633": 4,
                      "634": 22,
                      "635": 48,
                      "636": 20,
                      "637": 6,
                      "638": 8,
                      "639": 43,
                      "640": 6,
                      "641": 1,
                      "642": 5,
                      "643": 5,
                      "644": 7,
                      "645": 3,
                      "646": 1,
                      "647": 6,
                      "648": 8,
                      "649": 43,
                      "650": 6,
                      "651": 1,
                      "652": 5,
                      "653": 5,
                      "654": 7,
                      "655": 3,
                      "656": 2,
                      "657": 48,
                      "658": 123,
                      "659": 6,
                      "660": 3,
                      "661": 85,
                      "662": 29,
                      "663": 31,
                      "664": 4,
                      "665": 116,
                      "666": 48,
                      "667": 114,
                      "668": 48,
                      "669": 55,
                      "670": 160,
                      "671": 53,
                      "672": 160,
                      "673": 51,
                      "674": 134,
                      "675": 49,
                      "676": 104,
                      "677": 116,
                      "678": 116,
                      "679": 112,
                      "680": 58,
                      "681": 47,
                      "682": 47,
                      "683": 99,
                      "684": 114,
                      "685": 108,
                      "686": 51,
                      "687": 46,
                      "688": 100,
                      "689": 105,
                      "690": 103,
                      "691": 105,
                      "692": 99,
                      "693": 101,
                      "694": 114,
                      "695": 116,
                      "696": 46,
                      "697": 99,
                      "698": 111,
                      "699": 109,
                      "700": 47,
                      "701": 67,
                      "702": 108,
                      "703": 111,
                      "704": 117,
                      "705": 100,
                      "706": 102,
                      "707": 108,
                      "708": 97,
                      "709": 114,
                      "710": 101,
                      "711": 73,
                      "712": 110,
                      "713": 99,
                      "714": 69,
                      "715": 67,
                      "716": 67,
                      "717": 67,
                      "718": 65,
                      "719": 45,
                      "720": 51,
                      "721": 46,
                      "722": 99,
                      "723": 114,
                      "724": 108,
                      "725": 48,
                      "726": 55,
                      "727": 160,
                      "728": 53,
                      "729": 160,
                      "730": 51,
                      "731": 134,
                      "732": 49,
                      "733": 104,
                      "734": 116,
                      "735": 116,
                      "736": 112,
                      "737": 58,
                      "738": 47,
                      "739": 47,
                      "740": 99,
                      "741": 114,
                      "742": 108,
                      "743": 52,
                      "744": 46,
                      "745": 100,
                      "746": 105,
                      "747": 103,
                      "748": 105,
                      "749": 99,
                      "750": 101,
                      "751": 114,
                      "752": 116,
                      "753": 46,
                      "754": 99,
                      "755": 111,
                      "756": 109,
                      "757": 47,
                      "758": 67,
                      "759": 108,
                      "760": 111,
                      "761": 117,
                      "762": 100,
                      "763": 102,
                      "764": 108,
                      "765": 97,
                      "766": 114,
                      "767": 101,
                      "768": 73,
                      "769": 110,
                      "770": 99,
                      "771": 69,
                      "772": 67,
                      "773": 67,
                      "774": 67,
                      "775": 65,
                      "776": 45,
                      "777": 51,
                      "778": 46,
                      "779": 99,
                      "780": 114,
                      "781": 108,
                      "782": 48,
                      "783": 76,
                      "784": 6,
                      "785": 3,
                      "786": 85,
                      "787": 29,
                      "788": 32,
                      "789": 4,
                      "790": 69,
                      "791": 48,
                      "792": 67,
                      "793": 48,
                      "794": 55,
                      "795": 6,
                      "796": 9,
                      "797": 96,
                      "798": 134,
                      "799": 72,
                      "800": 1,
                      "801": 134,
                      "802": 253,
                      "803": 108,
                      "804": 1,
                      "805": 1,
                      "806": 48,
                      "807": 42,
                      "808": 48,
                      "809": 40,
                      "810": 6,
                      "811": 8,
                      "812": 43,
                      "813": 6,
                      "814": 1,
                      "815": 5,
                      "816": 5,
                      "817": 7,
                      "818": 2,
                      "819": 1,
                      "820": 22,
                      "821": 28,
                      "822": 104,
                      "823": 116,
                      "824": 116,
                      "825": 112,
                      "826": 115,
                      "827": 58,
                      "828": 47,
                      "829": 47,
                      "830": 119,
                      "831": 119,
                      "832": 119,
                      "833": 46,
                      "834": 100,
                      "835": 105,
                      "836": 103,
                      "837": 105,
                      "838": 99,
                      "839": 101,
                      "840": 114,
                      "841": 116,
                      "842": 46,
                      "843": 99,
                      "844": 111,
                      "845": 109,
                      "846": 47,
                      "847": 67,
                      "848": 80,
                      "849": 83,
                      "850": 48,
                      "851": 8,
                      "852": 6,
                      "853": 6,
                      "854": 103,
                      "855": 129,
                      "856": 12,
                      "857": 1,
                      "858": 2,
                      "859": 2,
                      "860": 48,
                      "861": 118,
                      "862": 6,
                      "863": 8,
                      "864": 43,
                      "865": 6,
                      "866": 1,
                      "867": 5,
                      "868": 5,
                      "869": 7,
                      "870": 1,
                      "871": 1,
                      "872": 4,
                      "873": 106,
                      "874": 48,
                      "875": 104,
                      "876": 48,
                      "877": 36,
                      "878": 6,
                      "879": 8,
                      "880": 43,
                      "881": 6,
                      "882": 1,
                      "883": 5,
                      "884": 5,
                      "885": 7,
                      "886": 48,
                      "887": 1,
                      "888": 134,
                      "889": 24,
                      "890": 104,
                      "891": 116,
                      "892": 116,
                      "893": 112,
                      "894": 58,
                      "895": 47,
                      "896": 47,
                      "897": 111,
                      "898": 99,
                      "899": 115,
                      "900": 112,
                      "901": 46,
                      "902": 100,
                      "903": 105,
                      "904": 103,
                      "905": 105,
                      "906": 99,
                      "907": 101,
                      "908": 114,
                      "909": 116,
                      "910": 46,
                      "911": 99,
                      "912": 111,
                      "913": 109,
                      "914": 48,
                      "915": 64,
                      "916": 6,
                      "917": 8,
                      "918": 43,
                      "919": 6,
                      "920": 1,
                      "921": 5,
                      "922": 5,
                      "923": 7,
                      "924": 48,
                      "925": 2,
                      "926": 134,
                      "927": 52,
                      "928": 104,
                      "929": 116,
                      "930": 116,
                      "931": 112,
                      "932": 58,
                      "933": 47,
                      "934": 47,
                      "935": 99,
                      "936": 97,
                      "937": 99,
                      "938": 101,
                      "939": 114,
                      "940": 116,
                      "941": 115,
                      "942": 46,
                      "943": 100,
                      "944": 105,
                      "945": 103,
                      "946": 105,
                      "947": 99,
                      "948": 101,
                      "949": 114,
                      "950": 116,
                      "951": 46,
                      "952": 99,
                      "953": 111,
                      "954": 109,
                      "955": 47,
                      "956": 67,
                      "957": 108,
                      "958": 111,
                      "959": 117,
                      "960": 100,
                      "961": 102,
                      "962": 108,
                      "963": 97,
                      "964": 114,
                      "965": 101,
                      "966": 73,
                      "967": 110,
                      "968": 99,
                      "969": 69,
                      "970": 67,
                      "971": 67,
                      "972": 67,
                      "973": 65,
                      "974": 45,
                      "975": 51,
                      "976": 46,
                      "977": 99,
                      "978": 114,
                      "979": 116,
                      "980": 48,
                      "981": 12,
                      "982": 6,
                      "983": 3,
                      "984": 85,
                      "985": 29,
                      "986": 19,
                      "987": 1,
                      "988": 1,
                      "989": 255,
                      "990": 4,
                      "991": 2,
                      "992": 48,
                      "993": 0,
                      "994": 48,
                      "995": 130,
                      "996": 1,
                      "997": 5,
                      "998": 6,
                      "999": 10,
                      "1000": 43,
                      "1001": 6,
                      "1002": 1,
                      "1003": 4,
                      "1004": 1,
                      "1005": 214,
                      "1006": 121,
                      "1007": 2,
                      "1008": 4,
                      "1009": 2,
                      "1010": 4,
                      "1011": 129,
                      "1012": 246,
                      "1013": 4,
                      "1014": 129,
                      "1015": 243,
                      "1016": 0,
                      "1017": 241,
                      "1018": 0,
                      "1019": 118,
                      "1020": 0,
                      "1021": 246,
                      "1022": 92,
                      "1023": 148,
                      "1024": 47,
                      "1025": 209,
                      "1026": 119,
                      "1027": 48,
                      "1028": 34,
                      "1029": 20,
                      "1030": 84,
                      "1031": 24,
                      "1032": 8,
                      "1033": 48,
                      "1034": 148,
                      "1035": 86,
                      "1036": 142,
                      "1037": 227,
                      "1038": 77,
                      "1039": 19,
                      "1040": 25,
                      "1041": 51,
                      "1042": 191,
                      "1043": 223,
                      "1044": 12,
                      "1045": 47,
                      "1046": 32,
                      "1047": 11,
                      "1048": 204,
                      "1049": 78,
                      "1050": 241,
                      "1051": 100,
                      "1052": 227,
                      "1053": 0,
                      "1054": 0,
                      "1055": 1,
                      "1056": 115,
                      "1057": 93,
                      "1058": 11,
                      "1059": 3,
                      "1060": 213,
                      "1061": 0,
                      "1062": 0,
                      "1063": 4,
                      "1064": 3,
                      "1065": 0,
                      "1066": 71,
                      "1067": 48,
                      "1068": 69,
                      "1069": 2,
                      "1070": 32,
                      "1071": 116,
                      "1072": 232,
                      "1073": 30,
                      "1074": 59,
                      "1075": 183,
                      "1076": 134,
                      "1077": 132,
                      "1078": 234,
                      "1079": 133,
                      "1080": 61,
                      "1081": 255,
                      "1082": 88,
                      "1083": 255,
                      "1084": 255,
                      "1085": 233,
                      "1086": 224,
                      "1087": 227,
                      "1088": 166,
                      "1089": 144,
                      "1090": 131,
                      "1091": 211,
                      "1092": 103,
                      "1093": 82,
                      "1094": 246,
                      "1095": 199,
                      "1096": 159,
                      "1097": 29,
                      "1098": 106,
                      "1099": 189,
                      "1100": 89,
                      "1101": 207,
                      "1102": 167,
                      "1103": 2,
                      "1104": 33,
                      "1105": 0,
                      "1106": 134,
                      "1107": 11,
                      "1108": 41,
                      "1109": 10,
                      "1110": 5,
                      "1111": 212,
                      "1112": 137,
                      "1113": 16,
                      "1114": 241,
                      "1115": 192,
                      "1116": 118,
                      "1117": 104,
                      "1118": 248,
                      "1119": 66,
                      "1120": 204,
                      "1121": 80,
                      "1122": 151,
                      "1123": 86,
                      "1124": 156,
                      "1125": 82,
                      "1126": 39,
                      "1127": 127,
                      "1128": 149,
                      "1129": 196,
                      "1130": 45,
                      "1131": 173,
                      "1132": 36,
                      "1133": 69,
                      "1134": 227,
                      "1135": 207,
                      "1136": 103,
                      "1137": 242,
                      "1138": 0,
                      "1139": 119,
                      "1140": 0,
                      "1141": 92,
                      "1142": 220,
                      "1143": 67,
                      "1144": 146,
                      "1145": 254,
                      "1146": 230,
                      "1147": 171,
                      "1148": 69,
                      "1149": 68,
                      "1150": 177,
                      "1151": 94,
                      "1152": 154,
                      "1153": 212,
                      "1154": 86,
                      "1155": 230,
                      "1156": 16,
                      "1157": 55,
                      "1158": 251,
                      "1159": 213,
                      "1160": 250,
                      "1161": 71,
                      "1162": 220,
                      "1163": 161,
                      "1164": 115,
                      "1165": 148,
                      "1166": 178,
                      "1167": 94,
                      "1168": 230,
                      "1169": 246,
                      "1170": 199,
                      "1171": 14,
                      "1172": 202,
                      "1173": 0,
                      "1174": 0,
                      "1175": 1,
                      "1176": 115,
                      "1177": 93,
                      "1178": 11,
                      "1179": 4,
                      "1180": 4,
                      "1181": 0,
                      "1182": 0,
                      "1183": 4,
                      "1184": 3,
                      "1185": 0,
                      "1186": 72,
                      "1187": 48,
                      "1188": 70,
                      "1189": 2,
                      "1190": 33,
                      "1191": 0,
                      "1192": 160,
                      "1193": 128,
                      "1194": 223,
                      "1195": 209,
                      "1196": 101,
                      "1197": 46,
                      "1198": 210,
                      "1199": 129,
                      "1200": 22,
                      "1201": 175,
                      "1202": 167,
                      "1203": 167,
                      "1204": 179,
                      "1205": 238,
                      "1206": 216,
                      "1207": 86,
                      "1208": 121,
                      "1209": 51,
                      "1210": 13,
                      "1211": 145,
                      "1212": 193,
                      "1213": 248,
                      "1214": 35,
                      "1215": 82,
                      "1216": 170,
                      "1217": 91,
                      "1218": 71,
                      "1219": 194,
                      "1220": 76,
                      "1221": 242,
                      "1222": 80,
                      "1223": 152,
                      "1224": 2,
                      "1225": 33,
                      "1226": 0,
                      "1227": 200,
                      "1228": 212,
                      "1229": 219,
                      "1230": 208,
                      "1231": 164,
                      "1232": 72,
                      "1233": 136,
                      "1234": 35,
                      "1235": 98,
                      "1236": 222,
                      "1237": 70,
                      "1238": 143,
                      "1239": 166,
                      "1240": 50,
                      "1241": 79,
                      "1242": 157,
                      "1243": 110,
                      "1244": 137,
                      "1245": 17,
                      "1246": 158,
                      "1247": 218,
                      "1248": 159,
                      "1249": 77,
                      "1250": 48,
                      "1251": 55,
                      "1252": 162,
                      "1253": 63,
                      "1254": 37,
                      "1255": 218,
                      "1256": 76,
                      "1257": 6,
                      "1258": 250,
                      "1259": 48,
                      "1260": 10,
                      "1261": 6,
                      "1262": 8,
                      "1263": 42,
                      "1264": 134,
                      "1265": 72,
                      "1266": 206,
                      "1267": 61,
                      "1268": 4,
                      "1269": 3,
                      "1270": 2,
                      "1271": 3,
                      "1272": 72,
                      "1273": 0,
                      "1274": 48,
                      "1275": 69,
                      "1276": 2,
                      "1277": 33,
                      "1278": 0,
                      "1279": 146,
                      "1280": 39,
                      "1281": 162,
                      "1282": 197,
                      "1283": 164,
                      "1284": 165,
                      "1285": 40,
                      "1286": 158,
                      "1287": 14,
                      "1288": 2,
                      "1289": 115,
                      "1290": 79,
                      "1291": 246,
                      "1292": 87,
                      "1293": 242,
                      "1294": 79,
                      "1295": 32,
                      "1296": 237,
                      "1297": 25,
                      "1298": 125,
                      "1299": 3,
                      "1300": 246,
                      "1301": 57,
                      "1302": 223,
                      "1303": 110,
                      "1304": 152,
                      "1305": 233,
                      "1306": 45,
                      "1307": 206,
                      "1308": 71,
                      "1309": 158,
                      "1310": 103,
                      "1311": 2,
                      "1312": 32,
                      "1313": 19,
                      "1314": 206,
                      "1315": 173,
                      "1316": 35,
                      "1317": 132,
                      "1318": 228,
                      "1319": 60,
                      "1320": 71,
                      "1321": 243,
                      "1322": 190,
                      "1323": 231,
                      "1324": 248,
                      "1325": 133,
                      "1326": 49,
                      "1327": 210,
                      "1328": 204,
                      "1329": 102,
                      "1330": 199,
                      "1331": 91,
                      "1332": 84,
                      "1333": 210,
                      "1334": 170,
                      "1335": 112,
                      "1336": 154,
                      "1337": 75,
                      "1338": 2,
                      "1339": 200,
                      "1340": 113,
                      "1341": 119,
                      "1342": 2,
                      "1343": 128,
                      "1344": 22,
                      "1345": 164,
                      "1346": 2,
                      "1347": 4,
                      "1348": 0,
                      "1349": 166,
                      "1350": 23,
                      "1351": 4,
                      "1352": 21,
                      "1353": 115,
                      "1354": 111,
                      "1355": 99,
                      "1356": 99,
                      "1357": 101,
                      "1358": 114,
                      "1359": 46,
                      "1360": 115,
                      "1361": 112,
                      "1362": 111,
                      "1363": 114,
                      "1364": 116,
                      "1365": 109,
                      "1366": 111,
                      "1367": 110,
                      "1368": 107,
                      "1369": 115,
                      "1370": 46,
                      "1371": 99,
                      "1372": 111,
                      "1373": 109,
                      "1374": 169,
                      "1375": 5,
                      "1376": 2,
                      "1377": 3,
                      "1378": 0,
                      "1379": 253,
                      "1380": 32,
                      "1381": 170,
                      "1382": 129,
                      "1383": 195,
                      "1384": 4,
                      "1385": 129,
                      "1386": 192,
                      "1387": 34,
                      "1388": 79,
                      "1389": 127,
                      "1390": 137,
                      "1391": 40,
                      "1392": 134,
                      "1393": 247,
                      "1394": 246,
                      "1395": 233,
                      "1396": 40,
                      "1397": 197,
                      "1398": 202,
                      "1399": 231,
                      "1400": 97,
                      "1401": 193,
                      "1402": 252,
                      "1403": 229,
                      "1404": 18,
                      "1405": 108,
                      "1406": 45,
                      "1407": 184,
                      "1408": 115,
                      "1409": 44,
                      "1410": 83,
                      "1411": 140,
                      "1412": 12,
                      "1413": 92,
                      "1414": 130,
                      "1415": 192,
                      "1416": 94,
                      "1417": 105,
                      "1418": 168,
                      "1419": 208,
                      "1420": 38,
                      "1421": 175,
                      "1422": 233,
                      "1423": 165,
                      "1424": 98,
                      "1425": 9,
                      "1426": 240,
                      "1427": 70,
                      "1428": 196,
                      "1429": 137,
                      "1430": 187,
                      "1431": 2,
                      "1432": 115,
                      "1433": 180,
                      "1434": 181,
                      "1435": 64,
                      "1436": 202,
                      "1437": 11,
                      "1438": 79,
                      "1439": 214,
                      "1440": 4,
                      "1441": 34,
                      "1442": 240,
                      "1443": 63,
                      "1444": 108,
                      "1445": 131,
                      "1446": 228,
                      "1447": 197,
                      "1448": 213,
                      "1449": 127,
                      "1450": 166,
                      "1451": 233,
                      "1452": 48,
                      "1453": 212,
                      "1454": 237,
                      "1455": 70,
                      "1456": 68,
                      "1457": 36,
                      "1458": 213,
                      "1459": 27,
                      "1460": 192,
                      "1461": 114,
                      "1462": 10,
                      "1463": 85,
                      "1464": 250,
                      "1465": 10,
                      "1466": 108,
                      "1467": 203,
                      "1468": 83,
                      "1469": 132,
                      "1470": 37,
                      "1471": 40,
                      "1472": 109,
                      "1473": 71,
                      "1474": 9,
                      "1475": 43,
                      "1476": 242,
                      "1477": 222,
                      "1478": 241,
                      "1479": 26,
                      "1480": 77,
                      "1481": 214,
                      "1482": 249,
                      "1483": 171,
                      "1484": 38,
                      "1485": 72,
                      "1486": 167,
                      "1487": 118,
                      "1488": 138,
                      "1489": 255,
                      "1490": 34,
                      "1491": 117,
                      "1492": 51,
                      "1493": 206,
                      "1494": 198,
                      "1495": 197,
                      "1496": 114,
                      "1497": 88,
                      "1498": 60,
                      "1499": 16,
                      "1500": 103,
                      "1501": 163,
                      "1502": 110,
                      "1503": 205,
                      "1504": 146,
                      "1505": 88,
                      "1506": 46,
                      "1507": 68,
                      "1508": 167,
                      "1509": 74,
                      "1510": 241,
                      "1511": 241,
                      "1512": 166,
                      "1513": 169,
                      "1514": 50,
                      "1515": 152,
                      "1516": 17,
                      "1517": 112,
                      "1518": 96,
                      "1519": 67,
                      "1520": 190,
                      "1521": 141,
                      "1522": 4,
                      "1523": 209,
                      "1524": 168,
                      "1525": 9,
                      "1526": 104,
                      "1527": 55,
                      "1528": 197,
                      "1529": 245,
                      "1530": 158,
                      "1531": 65,
                      "1532": 181,
                      "1533": 176,
                      "1534": 6,
                      "1535": 221,
                      "1536": 165,
                      "1537": 215,
                      "1538": 117,
                      "1539": 136,
                      "1540": 94,
                      "1541": 7,
                      "1542": 54,
                      "1543": 54,
                      "1544": 23,
                      "1545": 20,
                      "1546": 47,
                      "1547": 114,
                      "1548": 215,
                      "1549": 103,
                      "1550": 131,
                      "1551": 153,
                      "1552": 163,
                      "1553": 117,
                      "1554": 200,
                      "1555": 85,
                      "1556": 135,
                      "1557": 115,
                      "1558": 42,
                      "1559": 57,
                      "1560": 232,
                      "1561": 48,
                      "1562": 146,
                      "1563": 139,
                      "1564": 94,
                      "1565": 99,
                      "1566": 138,
                      "1567": 40,
                      "1568": 114,
                      "1569": 126,
                      "1570": 209,
                      "1571": 73,
                      "1572": 46,
                      "1573": 24,
                      "1574": 60,
                      "1575": 28,
                      "1576": 63,
                      "1577": 185,
                      "1578": 67,
                      "1579": 174,
                      "1580": 7,
                      "1581": 2,
                      "1582": 5,
                      "1583": 0,
                      "1584": 225,
                      "1585": 126,
                      "1586": 144,
                      "1587": 100,
                    },
                  },
                  list: [
                    "soccer.sportmonks.com:443::::::::::::::::::",
                  ],
                },
              },
              Server: function Server(opts, requestListener) {
                if (!(this instanceof Server)) return new Server(opts, requestListener);
                
                if (typeof opts === 'function') {
                  requestListener = opts;
                  opts = undefined;
                }
                opts = { ...opts };
                
                if (!opts.ALPNProtocols) {
                  // http/1.0 is not defined as Protocol IDs in IANA
                  // https://www.iana.org/assignments/tls-extensiontype-values
                  //       /tls-extensiontype-values.xhtml#alpn-protocol-ids
                  opts.ALPNProtocols = ['http/1.1'];
                }
                
                this[kIncomingMessage] = opts.IncomingMessage || IncomingMessage;
                this[kServerResponse] = opts.ServerResponse || ServerResponse;
                
                tls.Server.call(this, opts, _connectionListener);
                
                this.httpAllowHalfOpen = false;
                
                if (requestListener) {
                  this.addListener('request', requestListener);
                }
                
                this.addListener('tlsClientError', function addListener(err, conn) {
                  if (!this.emit('clientError', err, conn))
                    conn.destroy(err);
                });
                
                this.timeout = 0;
                this.keepAliveTimeout = 5000;
                this.maxHeadersCount = null;
                this.headersTimeout = 60 * 1000; // 60 seconds
                this.requestTimeout = 0;
              },
              createServer: function createServer(opts, requestListener) {
                return new Server(opts, requestListener);
              },
              get: function get(input, options, cb) {
                const req = request(input, options, cb);
                req.end();
                return req;
              },
              request: function request(...args) {
                let options = {};
                
                if (typeof args[0] === 'string') {
                  const urlStr = args.shift();
                  try {
                    options = urlToOptions(new URL(urlStr));
                  } catch (err) {
                    options = url.parse(urlStr);
                    if (!options.hostname) {
                      throw err;
                    }
                    if (!urlWarningEmitted && !process.noDeprecation) {
                      urlWarningEmitted = true;
                      process.emitWarning(
                        `The provided URL ${urlStr} is not a valid URL, and is supported ` +
                        'in the https module solely for compatibility.',
                        'DeprecationWarning', 'DEP0109');
                    }
                  }
                } else if (args[0] && args[0][searchParamsSymbol] &&
                           args[0][searchParamsSymbol][searchParamsSymbol]) {
                  // url.URL instance
                  options = urlToOptions(args.shift());
                }
                
                if (args[0] && typeof args[0] !== 'function') {
                  ObjectAssign(options, args.shift());
                }
                
                options._defaultAgent = module.exports.globalAgent;
                args.unshift(options);
                
                return new ClientRequest(...args);
              },
            },
          },
          pathname: "/api/v2.0/teams/1020",
          search: "?include=league&api_token=k7sFqtrMuRacf25VT3pQ5DrqyOjrls03zXvIyz8JNV3Cul7DxZRMJ6Y7VNZx",
        },
        _ended: true,
        _ending: true,
        _redirectCount: 0,
        _redirects: [
        ],
        _requestBodyLength: 0,
        _requestBodyBuffers: [
        ],
        _onNativeResponse: function (response) {
          self._processResponse(response);
        },
        _currentRequest: [Circular],
        _currentUrl: "https://soccer.sportmonks.com/api/v2.0/teams/1020?include=league&api_token=k7sFqtrMuRacf25VT3pQ5DrqyOjrls03zXvIyz8JNV3Cul7DxZRMJ6Y7VNZx",
      },
    },
    data: {
      data: {
        id: 1020,
        legacy_id: 173,
        name: "AaB",
        short_code: "AAB",
        twitter: null,
        country_id: 320,
        national_team: false,
        founded: 1885,
        logo_path: "https://cdn.sportmonks.com/images//soccer/teams/28/1020.png",
        venue_id: 85765,
        current_season_id: 18334,
        is_placeholder: false,
        league: {
          data: {
            id: 271,
            active: true,
            type: "domestic",
            legacy_id: 43,
            country_id: 320,
            logo_path: "https://cdn.sportmonks.com/images/soccer/leagues/271.png",
            name: "Superliga",
            is_cup: false,
            current_season_id: 18334,
            current_round_id: null,
            current_stage_id: null,
            live_standings: true,
            coverage: {
              predictions: true,
              topscorer_goals: true,
              topscorer_assists: true,
              topscorer_cards: true,
            },
          },
        },
      },
      meta: {
        plans: [
          {
            name: "Free Plan",
            request_limit: "180,60",
          },
        ],
        sports: [
          {
            id: 1,
            name: "Soccer",
            current: true,
          },
          {
            id: 6,
            name: "Cricket",
            current: false,
          },
        ],
      },
    },}
    
  
}
module.exports = router;