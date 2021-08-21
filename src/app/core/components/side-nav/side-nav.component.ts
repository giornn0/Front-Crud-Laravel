import { Component, OnInit } from "@angular/core";
import {
	faBars,
	faAngleLeft,
	faUser,
	faMoneyBill,
	faHome,
	faCalculator,
	faBoxes,
	faTruck,
	faUsers,
	faShoppingCart,
	faBuilding
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  faBuilding = faBuilding;
	faBars = faBars;
	faAngleLeft = faAngleLeft;
	faUser = faUser;
	faMoneyBill = faMoneyBill;
	faHome = faHome;
	faCalculator = faCalculator;
	faBoxes = faBoxes;
	faTruck = faTruck;
	faUsers = faUsers;
	faShoppingCart = faShoppingCart;

	activated = 'false'

  constructor() { }

  ngOnInit(): void {
  }

}
