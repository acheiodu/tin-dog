import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AddUserComponent } from './views/add-user/add-user.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
	declarations: [
		AddUserComponent,
		AppComponent,
		UsuarioComponent,
		LoginComponent,
	],
	imports: [
		AppRoutes,
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule {}
