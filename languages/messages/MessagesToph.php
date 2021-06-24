<?php
/** Tâi-gí (Tâi-oân-pit)
 *
 * @ingroup Language
 * @file
 *
 */

$datePreferences = [
	'default',
	'mdy',
	'dmy',
	'ymd',
	'ISO 8601',
];

$defaultDateFormat = 'ymd';

$dateFormats = [
	'mdy time' => 'H:i',
	'mdy date' => 'F j, Y',
	'mdy monthonly' => 'F Y',
	'mdy both' => 'H:i, F j, Y',
	'mdy pretty' => 'F j',

	'dmy time' => 'H:i',
	'dmy date' => 'j F Y',
	'dmy monthonly' => 'F Y',
	'dmy both' => 'H:i, j F Y',
	'dmy pretty' => 'j F',

	'ymd time' => 'H:i',
	'ymd date' => 'Y "年" n "月" j "日"',
	'ymd monthonly' => 'Y "年" n "月"',
	'ymd both' => 'Y "年" n "月" j "日", H:i',
	'ymd pretty' => 'n "月" j "日"',

	'ISO 8601 time' => 'xnH:xni:xns',
	'ISO 8601 date' => 'xnY-xnm-xnd',
	'ISO 8601 monthonly' => 'xnY-xnm',
	'ISO 8601 both' => 'xnY-xnm-xnd"T"xnH:xni:xns',
	'ISO 8601 pretty' => 'xnm-xnd'
];