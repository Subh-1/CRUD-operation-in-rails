// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

rails .start();
Turbolinks.start()
ActiveStorage.start()

import $ from 'jquery';
global.$ = jQeury;

import 'stylesheets/application'
import 'bootstrap';