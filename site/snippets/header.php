<!doctype html>
<html lang="en">
<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />

  <?php if($text = $page->shareTitle()): ?>
    <meta property="og:title" content="<?php echo $text; ?>" />
  <?php else: ?>
    <meta property="og:title" content="<?php echo $page->title() ?> | <?php echo $site->title() ?>"/>
  <?php endif ?>

  <?php if($image = $page->sharePic()->toFile()): ?>
    <meta property="og:image" content="<?php echo $image->url(); ?>" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  <?php endif ?>

  <title><?= $site->title() ?> | <?= $page->title() ?></title>

  <?= css(['assets/css/typography.css', 'assets/css/index.css', '@auto']) ?>

  <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@12.0.0/dist/lazyload.min.js"></script>
</head>
<body>

  <div class="page">
    <header class="header">
      <div class="header-row">
        <div class="header-row--item is-link" data-menu-open>Alexandra Cepeda</div>
        <div class="header-row--item">Photographer & Art Director</div>
        <div class="header-row--item"><?= $site->find('about')->phone() ?></div>
        <div class="header-row--item"><a href="mailto:<?= $site->find('about')->email() ?>"><?= $site->find('about')->email() ?></a></div>
      </div>

      <div class="header-row">
        <a class="header-row--item" href="<?= $site->url() ?>">Selected Project</a>
        <div class="header-row--item" data-project-title><?= $site->find('photography')->children()->listed()->nth(0)->headline() ?></div>
        <a class="header-row--item" href="<?= $site->url() ?>">Index</a>
      </div>

      <div class="header-menu" data-menu>
        <div class="header-menu--inner header-menu--desc"><?= $site->find('about')->text() ?></div>
        <div class="header-menu--inner header-menu--clients">
          <div class="header-menu--clients-header">Selected Clients</div>
          <?php foreach ($site->find('about')->clients()->split($separator = ',') as $tag): ?>
            <span><?= $tag ?></span>
          <?php endforeach ?>
        </div>
      </div>
    </header>
