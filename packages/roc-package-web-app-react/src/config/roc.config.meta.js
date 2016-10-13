import { isString, isBoolean, isPath, isArray, isObject, required } from 'roc/validators';

export default {
    settings: {
        groups: {
            runtime: {
                base: 'Base tag to be used in <head>, ' +
                    'see https://github.com/nfl/react-helmet.'
            }
        },
        descriptions: {
            runtime: {
                stats: 'Path to client stats file from build.',
                applicationName: 'Default application name to use for <title>.',
                applicationNameTemplate: 'Template to be used for <title>. ' +
                    'See https://github.com/nfl/react-helmet.',
                htmlAttributes: 'Attributes that should be added to the <html> tag.',
                meta: 'Meta tags to be used in <head>, should be formatted as objects. ' +
                    'see https://github.com/nfl/react-helmet.',
                link: 'Link tags to be used in <head>, should be formatted as objects. ' +
                    'See https://github.com/nfl/react-helmet.',
                base: {
                    href: 'The document base address from which relative links are made.',
                    target: 'The browsing context in which the links should open.'
                },
                script: 'Script tags to be used in <head>, should be formatted as objects. ' +
                    'See https://github.com/nfl/react-helmet.',
                style: 'Style tags to be used in <head>, should be formatted as objects. ' +
                    'See https://github.com/nfl/react-helmet.',
                ssr: 'If server side rendering should be enabled.',
                template: {
                    path: 'A directory where the template for the application can be found. Will default to internal ' +
                        'path.',
                    name: 'Name of the template file that will be used. Uses Nunjucks, please see documentation for ' +
                        'more info.'
                },
                debug: {
                    client: 'Filter for debug messages that should be shown for the client, see ' +
                        'https://npmjs.com/package/debug.'
                },
                configWhitelistProperty: 'A single property to expose to the client from node-config. Make sure that ' +
                    'this property does NOT contain any secrets that should not be exposed to the world.',
                fetch: {
                    server: 'What redial hooks that should run on the server and in what order.',
                    client: {
                        blocking: 'What redial hooks that should run on the client that blocks route transitions ' +
                            'and in what order.',
                        defer: 'What redial hooks that should run on the client that should not block route ' +
                            'transitions and in what order.',
                        parallel: 'If defer hooks should be started at the same time as the blocking ones.'
                    }
                }
            }
        },

        validations: {
            runtime: {
                stats: isPath,
                applicationName: required(isString),
                applicationNameTemplate: isString,
                htmlAttributes: isObject(),
                meta: isArray(isObject(isString)),
                link: isArray(isObject(isString)),
                base: {
                    href: isString,
                    target: isString
                },
                script: isArray(isObject(isString)),
                style: isArray(isObject(isString)),
                ssr: isBoolean,
                template: {
                    path: isPath,
                    name: isString
                },
                debug: {
                    client: isString
                },
                configWhitelistProperty: isString,
                fetch: {
                    server: isArray(),
                    client: {
                        blocking: isArray(),
                        defer: isArray(),
                        parallel: isBoolean
                    }
                }
            }
        }
    }
};