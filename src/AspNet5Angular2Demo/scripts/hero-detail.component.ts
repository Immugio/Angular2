import {Component} from "angular2/core";

@Component({
    selector: "my-hero-detail",
    templateUrl: "hero-detail.html",
    inputs: ["hero"]
})
export class HeroDetailComponent {
    public hero: IHero;
}