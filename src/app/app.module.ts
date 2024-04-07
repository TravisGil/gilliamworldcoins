import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { OrderByPipe } from './shared/services/pipes/orderby.pipe';

// Components
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SocialComponent } from './social/social.component';
import { WebsiteBlockComponent } from './website-block/website-block.component';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { RedZoomModule } from 'ngx-red-zoom';
import { MatIconModule } from '@angular/material/icon';

// Services
import { ConfigService } from './shared/services/config.service';
import { InMemoryDataService } from './shared/services/in-memory-data.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
	declarations: [AppComponent, OrderByPipe],
	imports: [
		AppRoutingModule,
		BrowserModule,
		HttpClientModule,
		ReactiveFormsModule,
		RedZoomModule,
		MatIconModule,
		// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
		// and returns simulated server responses.
		// Remove it when a real server is ready to receive requests.
		HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
			dataEncapsulation: false,
			passThruUnknownUrl: true,
		}),
		FooterComponent,
		NavigationComponent,
		NavmenuComponent,
		SocialComponent,
		WebsiteBlockComponent,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		ConfigService,
		provideAnimationsAsync(),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
