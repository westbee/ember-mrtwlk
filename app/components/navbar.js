import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";
import $ from 'jquery';

export default class NavbarComponent extends Component {

  @tracked isScrolling = false;

  @action bgNav(){
    this.isScrolling = true;
  }
}
