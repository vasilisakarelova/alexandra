<?php
/**
 * Snippets are a great way to store code snippets for reuse or to keep your templates clean.
 * in loops or simply to keep your templates clean.
 * This footer snippet is reused in all templates. In fetches information from the `site.txt` content file
 * and from the `about` page.
 * More about snippets: https://getkirby.com/docs/guide/templates/snippets
 */
?>


  </div>
  <?php if(!$_COOKIE["accepted"]): ?>
    <div class="cookie-banner" data-cookie-banner>
      <p>This website uses its own cookies to collect information in order to improve our services, as well as the analysis of your browsing habits. If you continue browsing, it means acceptance of the installation of the same. The user has the possibility to configure your browser, if you wish, to prevent them from being installed on your hard drive, although you must take into account that such action may cause navigation difficulties on the website.</p>
      <div class="cookie-btn-wrapper">
        <span class="cookie-btn" data-cookie-btn="accept">[OK]</span>
        <span class="cookie-btn" data-cookie-btn="decline">[Decline]</span>
      </div>
    </div>
  <?php endif ?>
  <?= js(['assets/js/jquery-3.4.1.min.js', 'assets/js/zoom.js', 'assets/js/index.js', '@auto']) ?>
</body>
</html>
