<?php

$originalTag = Kirby\Text\KirbyTag::$types['image'];
Kirby::plugin('vasilisa/customtags', [
    'tags' => [
        'image' => [
            'attr' => [
                // list of attributes
            ],
            'html' => function ($tag) {
                if ($tag->file = $tag->file($tag->value)) {
                    $tag->src     = $tag->file->url();
                    $tag->alt     = $tag->alt     ?? $tag->file->alt()->or(' ')->value();
                    $tag->title   = $tag->title   ?? $tag->file->title()->value();
                    $tag->caption = $tag->caption ?? $tag->file->caption()->value();
                } else {
                    $tag->src = Url::to($tag->value);
                }

                $link = function ($img) use ($tag) {
                    if (empty($tag->link) === true) {
                        return $img;
                    }

                    if ($link = $tag->file($tag->link)) {
                        $link = $link->url();
                    } else {
                        $link = $tag->link === 'self' ? $tag->src : $tag->link;
                    }

                    return Html::a($link, [$img], [
                        'rel'    => $tag->rel,
                        'class'  => $tag->linkclass,
                        'target' => $tag->target
                    ]);
                };

                $file = $tag->file($tag->value());
                $classes;
                $urlFull;
                $urlCrop = $file ? $file->thumb('small')->url() : url($url);

                if ($tag->file->height() > $tag->file->width()) {
                  $classes = 'lazy is-portrait';
                  $urlCrop = $file ? $file->thumb('mediumheight')->url() : url($url);
                } else if ($tag->file->width() > $tag->file->height()) {
                  $column = rand(1, 3);
                  $classes = "lazy is-landscape column-".$column."";
                  $urlCrop = $file ? $file->thumb('mediumwidth')->url() : url($url);
                }

                $image = Html::img($urlCrop, [
                    'width'  => $tag->width,
                    'height' => $tag->height,
                    'class'  => $classes,
                    'data-src' => $urlFull
                ]);

                if ($tag->kirby()->option('kirbytext.image.figure', true) === false) {
                    return $link($image);
                }

                // render KirbyText in caption
                if ($tag->caption) {
                    $tag->caption = [$tag->kirby()->kirbytext($tag->caption, [], true)];
                }

                return Html::figure([ $link($image) ], $tag->caption, [
                    'class' => $tag->class
                ]);
            }
        ]
    ]
]);
