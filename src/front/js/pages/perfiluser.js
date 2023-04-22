import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PerfilUser from "../components/PerfilUser";

export const UserPerfil  = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<PerfilUser />
		</div>
	);
};