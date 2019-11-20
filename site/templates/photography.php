<?php snippet('header') ?>

<div class="page-container">
  <div class="photography-grid">
    <?php foreach (page('photography')->children()->listed() as $album): ?>
      <?php
        $last = $album->images()->last();
        foreach ($album->images() as $image): ?>
          <img class="photography-case-img lazy is-<?= $image->orientation() ?><?php if($image == $last) echo ' photography-case-img_last' ?>"
            data-gallery-group="<?= $album->indexOf($image) ?>"
            src="<?php echo $image->thumb('small')->url() ?>"
            <?php if ($image->isPortrait()): ?>data-src="<?php echo $image->thumb('mediumheight')->url() ?>"<?php endif ?>
            <?php if ($image->isLandscape()): ?>data-src="<?php echo $image->thumb('mediumwidth')->url() ?>"<?php endif ?>
          />
      <?php endforeach ?>
    <?php endforeach ?>
  </div>

</div>

<?php snippet('footer') ?>
