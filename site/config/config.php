<?php

/**
 * The config file is optional. It accepts a return array with config options
 * Note: Never include more than one return statement, all options go within this single return array
 * In this example, we set debugging to true, so that errors are displayed onscreen.
 * This setting must be set to false in production.
 * All config options: https://getkirby.com/docs/reference/system/options
 */

c::set('kirbytext.image.figure', false);

return [
  'debug' => true,
  'thumbs' => [
    'presets' => [
        'defaultwidth' => ['width' => 1400, 'quality' => 90],
        'defaultheight' => ['height' => 1400, 'quality' => 90],
        'mediumwidth' => ['width' => 600, 'quality' => 90],
        'mediumheight' => ['height' => 600, 'quality' => 90],
        'small' => ['width' => 100, 'quality' => 90]
    ]
  ]
];
