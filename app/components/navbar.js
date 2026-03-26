import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";

export default class NavbarComponent extends Component {

  @tracked isScrolling = false;

  @action bgNav(){
    let toggler = document.querySelector(".navbar-toggler");
    if (toggler) {
      toggler.classList.add("collapsed");
    }
  }
}
