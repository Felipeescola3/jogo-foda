const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Acts.Scroll,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.solid.Acts.SetEnabled,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Lava: 0},
	{Sólido: 0},
	{Sprite2: 0},
	{Portal: 0},
	{Moeda: 0},
	{Plataforma: 0},
	{Player: 0},
	{Sprite7: 0},
	{Texto: 0},
	{Sprite: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Texto2: 0},
	{Pontos: 0}
];

self.InstanceType = {
	Lava: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Portal: class extends self.ISpriteInstance {},
	Moeda: class extends self.ISpriteInstance {},
	Player: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Texto2: class extends self.ITextInstance {}
}