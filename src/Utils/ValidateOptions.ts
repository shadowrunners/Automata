import { AutomataOptions } from '../Manager';
import { NodeOptions } from './Utils';

export function validateOptions(options: NodeOptions, secondaryOptions: AutomataOptions) {
	if (!options) throw new TypeError('NodeOptions must not be empty.');

	if (
		typeof options.host !== 'string' ||
      !/.+/.test(options.host)
	)
		throw new TypeError('Node option "host" must be present and be a non-empty string.');

	if (
		typeof options.port !== 'undefined' &&
      typeof options.port !== 'number'
	)
		throw new TypeError('Node option "port" must be a number.');

	if (
		typeof options.password !== 'undefined' &&
      (typeof options.password !== 'string' ||
      !/.+/.test(options.password))
	)
		throw new TypeError('Node option "password" must be a non-empty string.');

	if (
		typeof options.secure !== 'undefined' &&
      typeof options.secure !== 'boolean'
	)
		throw new TypeError('Node option "secure" must be a boolean.');

	if (
		typeof options.name !== 'undefined' &&
      typeof options.name !== 'string'
	)
		throw new TypeError('Node option "name" must be a non-empty string.');

	if (
		typeof secondaryOptions.resumeStatus !== 'undefined' &&
		typeof secondaryOptions.resumeStatus !== 'boolean'
	)
		throw new TypeError('Manager option "resumeKey" must be a boolean.');

	if (
		typeof secondaryOptions.resumeTimeout !== 'undefined' &&
		typeof secondaryOptions.resumeTimeout !== 'number'
	)
		throw new TypeError('Manager option "resumeTimeout" must be a number.');

	if (
		typeof secondaryOptions.reconnectTimeout !== 'undefined' &&
		typeof secondaryOptions.reconnectTimeout !== 'number'
	)
		throw new TypeError('Manager option "reconnectTimeout" must be a number.');

	if (
		typeof secondaryOptions.reconnectTries !== 'undefined' &&
		typeof secondaryOptions.reconnectTries !== 'number'
	)
		throw new TypeError('Manager option "reconnectTries" must be a number.');
}