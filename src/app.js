var size;
var gameScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer0 = new fieldLayer();
        var layer1 = new gameLayer();
        var layer2 = new charaLayer();
        var layer3 = new particleLayer();
        this.addChild(layer0);
        this.addChild(layer1);
        this.addChild(layer2);
        this.addChild(layer3);

    }
});

//デバッグ用ラベル
var debugText;
var gameLayer = cc.Layer.extend({
    sprite: null,
    ctor: function() {
        this._super();
        size = cc.winSize;
        //デバッグ用ラベルをcreate
        debugText = cc.LabelTTF.create("debug", "Arial", "32", cc.TEXT_ALIGNMENT_CENTER);
        this.addChild(debugText);
        debugText.setPosition(450, size.height - 20);
        return true;
    },

});

var fieldLayer = cc.Layer.extend({
    ctor: function() {
        this._super();

        var size = cc.director.getWinSize();

        var sprite = cc.Sprite.create(res.ss_BattleScene_bg1);
        sprite.setPosition(size.width / 2, size.height / 2);
        sprite.setScale(0.8);
        this.addChild(sprite, 0);
    }
});

var charaLayer = cc.Layer.extend({
    ctor: function() {
        this._super();

        var size = cc.director.getWinSize();

        //水キャラクターを追加
        var sprite11 = cc.Sprite.create(res.chara_princessselect_11);
        sprite11.setPosition(size.width * 0.25, size.height * 0.4);
        sprite11.setScale(0.8);
        this.addChild(sprite11, 0);

        //火属性のキャラクター
        var sprite10 = cc.Sprite.create(res.chara_princessselect_10);
        sprite10.setPosition(size.width * 0.3, size.height * 0.3);
        sprite10.setScale(0.8);
        this.addChild(sprite10, 0);

        //木属性キャラクター
        var sprite12 = cc.Sprite.create(res.chara_princessselect_12);
        sprite12.setPosition(size.width * 0.15, size.height * 0.25);
        sprite12.setScale(0.8);
        this.addChild(sprite12, 0);

        //火属性　敵ｻｺキャラクター
        var sprite1 = cc.Sprite.create(res.chara_enemy_1);
        sprite1.setPosition(size.width * 0.65, size.height * 0.45);
        sprite1.setScale(1.2);
        this.addChild(sprite1, 0);
        //水属性　敵ｻｺキャラクター
        var sprite2 = cc.Sprite.create(res.chara_enemy_2);
        sprite2.setPosition(size.width * 0.70, size.height * 0.35);
        sprite2.setScale(1.2);
        this.addChild(sprite2, 0);
        //火属性　敵ｻｺ中ボスキャラクター
        var sprite4 = cc.Sprite.create(res.chara_enemy_4);
        sprite4.setPosition(size.width * 0.85, size.height * 0.30);
        sprite4.setScale(1.2);
        this.addChild(sprite4, 0);
        //敵追加キャラクター
        var sprite7 = cc.Sprite.create(res.chara_enemy_7);
        sprite7.setPosition(size.width * 0.85, size.height * 0.40);
        sprite7.setScale(1.3);
        this.addChild(sprite7, 0);
    }
});

//パーティクル用のレイヤー
var particleLayer = cc.Layer.extend({
    skillSelect: 0,
    skillLevel: 1,
    skillCnt: 1,

    ctor: function() {
        this._super();
        size = cc.winSize;
        this.scheduleUpdate();
        return true;
    },
    update: function(_dt) {


        if (this.skillCnt == 1) {

            debugText.setString("this.skillCnt:" + this.skillCnt +
                " skillSelect:" + this.skillSelect +
                " skillLevel:" + this.skillLevel
            );

            this.skillParticle(this.skillSelect, this.skillLevel, 350, 100);
            //debug
            //this.skillParticle(4,1, 350, 100);

        }
        if ((this.skillCnt % 220) == 0) {
            this.skillCnt = 0;
            this.skillLevel++;
            //HealとSlipスキル追加
            if (this.skillSelect < 3) {
                this.skillLevel = this.skillLevel % 4;
            } else {
                this.skillLevel = this.skillLevel % 2;
            }

            this.removeAllChildren();
            if (this.skillLevel == 0) {
                this.skillLevel++;
                this.skillSelect++;
                this.skillSelect = this.skillSelect % 2;
            }

        }
        //フレームをカウントする
        this.skillCnt++;
        /*
    debugText.setString("this.skillCnt:"+this.skillCnt
    + " skillSelect:"+this.skillSelect
    + " skillLevel:"+this.skillLevel);
*/
    },

    //属性とスキルレベルと座標を与えてパーティクルを生成する関数
    skillParticle: function(attrib, rare, x, y) {

        //debugText.setString("attrib:"+attrib);
        　　 //HealとSlipスキル追加
        var skillName = ["particle","Yami", "Fire", "Water", "Wood", "Heal", "Slip"];
        var sName = "res." + skillName[attrib] + "Texture" + rare + "_plist";
        var sName2 = "res." + skillName[attrib] + "Texture2" + rare + "_plist";
        var sName3 = "res." + skillName[attrib] + "Texture3" + rare + "_plist";
        var sName4 = "res." + skillName[attrib] + "Texture4" + rare + "_plist";
        var sName5 = "res." + skillName[attrib] + "Texture5" + rare + "_plist";
        var sName6 = "res." + skillName[attrib] + "Texture6" + rare + "_plist";
        var sName7 = "res." + skillName[attrib] + "Texture7" + rare + "_plist";
        var sName8 = "res." + skillName[attrib] + "Texture8" + rare + "_plist";
        var sName9 = "res." + skillName[attrib] + "Texture9" + rare + "_plist";
        var sName10 = "res." + skillName[attrib] + "Texture10" + rare + "_plist";
        var sName11 = "res." + skillName[attrib] + "Texture11" + rare + "_plist";
        var sName12 = "res." + skillName[attrib] + "Texture12" + rare + "_plist";
        var sName13 = "res." + skillName[attrib] + "Texture13" + rare + "_plist";
        var sName14 = "res." + skillName[attrib] + "Texture14" + rare + "_plist";
        var sName15 = "res." + skillName[attrib] + "Texture15" + rare + "_plist";
        var sName16 = "res." + skillName[attrib] + "Texture16" + rare + "_plist";
        var sName17 = "res." + skillName[attrib] + "Texture17" + rare + "_plist";
        var sName18 = "res." + skillName[attrib] + "Texture18" + rare + "_plist";
        var sName19 = "res." + skillName[attrib] + "Texture19" + rare + "_plist";
        var sName20 = "res." + skillName[attrib] + "Texture20" + rare + "_plist";
        var sName21 = "res." + skillName[attrib] + "Texture21" + rare + "_plist";
        var sName22 = "res." + skillName[attrib] + "Texture22" + rare + "_plist";
        var sName23 = "res." + skillName[attrib] + "Texture23" + rare + "_plist";
        var sName24 = "res." + skillName[attrib] + "Texture24" + rare + "_plist";


        debugText.setString(sName);

        var tempParticle = new cc.ParticleSystem(eval(sName));
        tempParticle.setPosition(187, 29);
        this.addChild(tempParticle, 20);
        tempParticle.setAutoRemoveOnFinish(true);

        debugText.setString(sName2);

        var tempParticle2 = new cc.ParticleSystem(eval(sName2));
        tempParticle2.setPosition(317, 447);
        this.addChild(tempParticle2, 20);
        tempParticle2.setAutoRemoveOnFinish(true);

        debugText.setString(sName3);

        var tempParticle3 = new cc.ParticleSystem(eval(sName3));
        tempParticle3.setPosition(447, 48);
        this.addChild(tempParticle3, 20);
        tempParticle3.setAutoRemoveOnFinish(true);

        debugText.setString(sName4);

        var tempParticle4 = new cc.ParticleSystem(eval(sName4));
        tempParticle4.setPosition(65, 296);
        this.addChild(tempParticle4, 20);
        tempParticle4.setAutoRemoveOnFinish(true);

        debugText.setString(sName5);

        var tempParticle5 = new cc.ParticleSystem(eval(sName5));
        tempParticle5.setPosition(580, 306);
        this.addChild(tempParticle5, 20);
        tempParticle5.setAutoRemoveOnFinish(true);

        debugText.setString(sName6);

        var tempParticle6 = new cc.ParticleSystem(eval(sName6));
        tempParticle6.setPosition(307, 232);
        this.addChild(tempParticle6, 20);
        tempParticle6.setAutoRemoveOnFinish(true);

        debugText.setString(sName7);

        var tempParticle7 = new cc.ParticleSystem(eval(sName7));
        tempParticle7.setPosition(703, 149);
        this.addChild(tempParticle7, 20);
        tempParticle7.setAutoRemoveOnFinish(true);

        debugText.setString(sName8);

        var tempParticle8 = new cc.ParticleSystem(eval(sName8));
        tempParticle8.setPosition(730, 190);
        this.addChild(tempParticle8, 20);
        tempParticle8.setAutoRemoveOnFinish(true);

        debugText.setString(sName9);

        var tempParticle9 = new cc.ParticleSystem(eval(sName9));
        tempParticle9.setPosition(726, 248);
        this.addChild(tempParticle9, 20);
        tempParticle9.setAutoRemoveOnFinish(true);

        debugText.setString(sName15);

        var tempParticle15 = new cc.ParticleSystem(eval(sName15));
        tempParticle15.setPosition(759, 178);
        this.addChild(tempParticle15, 20);
        tempParticle15.setAutoRemoveOnFinish(true);

        debugText.setString(sName10);

        var tempParticle10 = new cc.ParticleSystem(eval(sName10));
        tempParticle10.setPosition(745, 176);
        this.addChild(tempParticle10, 20);
        tempParticle10.setAutoRemoveOnFinish(true);

        debugText.setString(sName11);

        var tempParticle11 = new cc.ParticleSystem(eval(sName11));
        tempParticle11.setPosition(732, 161);
        this.addChild(tempParticle11, 20);
        tempParticle11.setAutoRemoveOnFinish(true);

        debugText.setString(sName12);

        var tempParticle12 = new cc.ParticleSystem(eval(sName12));
        tempParticle12.setPosition(704, 178);
        this.addChild(tempParticle12, 20);
        tempParticle12.setAutoRemoveOnFinish(true);

        debugText.setString(sName13);

        var tempParticle13 = new cc.ParticleSystem(eval(sName13));
        tempParticle13.setPosition(716, 173);
        this.addChild(tempParticle13, 20);
        tempParticle13.setAutoRemoveOnFinish(true);

        debugText.setString(sName16);

        var tempParticle16 = new cc.ParticleSystem(eval(sName16));
        tempParticle16.setPosition(724, 184);
        this.addChild(tempParticle16, 20);
        tempParticle16.setAutoRemoveOnFinish(true);

        debugText.setString(sName14);

        var tempParticle14 = new cc.ParticleSystem(eval(sName14));
        tempParticle14.setPosition(735, 186);
        this.addChild(tempParticle14, 20);
        tempParticle14.setAutoRemoveOnFinish(true);

        debugText.setString(sName17);

        var tempParticle17 = new cc.ParticleSystem(eval(sName17));
        tempParticle17.setPosition(724, 84);
        this.addChild(tempParticle17, 20);
        tempParticle17.setAutoRemoveOnFinish(true);

        debugText.setString(sName18);

        var tempParticle18 = new cc.ParticleSystem(eval(sName18));
        tempParticle18.setPosition(724, 84);
        this.addChild(tempParticle18, 20);
        tempParticle18.setAutoRemoveOnFinish(true);

        debugText.setString(sName19);

        var tempParticle19 = new cc.ParticleSystem(eval(sName19));
        tempParticle19.setPosition(724, 184);
        this.addChild(tempParticle19, 20);
        tempParticle19.setAutoRemoveOnFinish(true);

        debugText.setString(sName20);

        var tempParticle20 = new cc.ParticleSystem(eval(sName20));
        tempParticle20.setPosition(724, 84);
        this.addChild(tempParticle20, 20);
        tempParticle20.setAutoRemoveOnFinish(true);

        debugText.setString(sName21);

        var tempParticle21 = new cc.ParticleSystem(eval(sName21));
        tempParticle21.setPosition(524, 184);
        this.addChild(tempParticle21, 20);
        tempParticle21.setAutoRemoveOnFinish(true);

        debugText.setString(sName22);

        var tempParticle22 = new cc.ParticleSystem(eval(sName22));
        tempParticle22.setPosition(524, 184);
        this.addChild(tempParticle22, 20);
        tempParticle22.setAutoRemoveOnFinish(true);

        debugText.setString(sName23);

        var tempParticle23 = new cc.ParticleSystem(eval(sName23));
        tempParticle23.setPosition(524, 184);
        this.addChild(tempParticle23, 20);
        tempParticle23.setAutoRemoveOnFinish(true);

        debugText.setString(sName24);

        var tempParticle24 = new cc.ParticleSystem(eval(sName24));
        tempParticle24.setPosition(524, 184);
        this.addChild(tempParticle24, 20);
        tempParticle24.setAutoRemoveOnFinish(true);



    },


});
