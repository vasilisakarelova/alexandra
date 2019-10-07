<?php

class MyPlugin {
  static function shopAndBlog($field) {
    $kirby = kirby();
    $shopPage = $kirby->site()->find('shop');
    $products = $shopPage->children();
    $blogPage = $kirby->site()->find('blog');
    $posts = $blogPage->children();

    $result = array();

    foreach ($products as $product) {
      $result[$product->id()] = $product->title();
    }

    foreach ($posts as $post) {
      $result[$post->id()] = $post->title();
    }

    return $result;
  }

  static function projects($field) {
    $kirby = kirby();
    $projectsPage = $kirby->site()->find('projects');

    if ($projectsPage->hasChildren()):
      $projects = $projectsPage->children();
      $result = array();

      foreach ($projects as $project) {
        $result[$project->id()] = $project->title();
      }
    else:
      $result = array();
    endif;

    return $result;
  }
}
