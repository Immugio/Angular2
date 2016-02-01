import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";

@Component({
    selector: "my-app",
    templateUrl: "my-app.html",
    styleUrls: ["my-app-styles.css"],
    directives: [HeroDetailComponent],
    providers : [HeroService]
})
export class AppComponent implements OnInit {

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    public heroes: IHero[];
    public title = "Tour of Heroes";
    public selectedHero: IHero;
    public onSelect(hero: IHero) { this.selectedHero = hero; }

    getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}