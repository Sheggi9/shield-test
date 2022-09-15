import { Component } from '@angular/core';
import {Tree} from "@types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Tree = [
    {
      location: 'Location',
      subLocations: [
        {
          location: 'Africa'
        },
        {
          location: 'America'
        },
        {
          location: 'Europe',
          subLocations: [
            {
              location: 'Germany'
            },
            {
              location: 'Spain'
            },
            {
              location: 'France',
              subLocations: [
                {
                  location: 'Paris'
                },
                {
                  location: 'Marseille'
                },
                {
                  location: 'Lyon'
                },
                {
                  location: 'Toulouse'
                },
                {
                  location: 'Nice'
                },
              ]
            },
          ]
        }
      ]
    }
  ];
  title = 'shield-iot';
}
