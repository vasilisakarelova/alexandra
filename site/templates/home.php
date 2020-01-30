<?php snippet('header') ?>

<div class="page-container">
  <div class="grid">
    <?php foreach (page('photography')->children()->listed() as $album): ?>
      <div class="case-wrapper" data-title="<?= $album->headline() ?>">
        <?php if($image = $album->cover()): ?>
          <img class="lazy case-wrapper-img is-<?= $image->orientation() ?>"
            src="<?php echo $image->thumb('small')->url() ?>"
            <?php if ($image->isPortrait()): ?>data-src="<?php echo $image->thumb('defaultheight')->url() ?>"<?php endif ?>
            <?php if ($image->isLandscape()): ?>data-src="<?php echo $image->thumb('defaultwidth')->url() ?>"<?php endif ?> />
        <?php endif ?>
        <div class="case-gallery-wrap">
          <div class="case-gallery">
            <?php foreach ($album->images() as $image): ?>
              <img class="lazy is-<?= $image->orientation() ?>"
                src="<?php echo $image->thumb('small')->url() ?>"
                <?php if ($image->isPortrait()): ?>data-src="<?php echo $image->thumb('defaultheight')->url() ?>"<?php endif ?>
                <?php if ($image->isLandscape()): ?>data-src="<?php echo $image->thumb('defaultwidth')->url() ?>"<?php endif ?> />
            <?php endforeach ?>
          </div>
        </div>
      </div>
      <div class="case-wrapper-name caps"><?= $album->headline() ?></div>
    <?php endforeach ?>
  </div>

</div>

<?php snippet('footer') ?>
