const kitInfo = {

    Vanilla: `
        <h3><b>Testing for T1:</b></h3>
        <br>
        <ul class="indented">
            <li><b>Phase 1:</b> Beat two T3 opponents. <i>(first to 4)</i></li>
            <li><b>Phase 2:</b> Beat two T2 opponents. <i>(first to 4)</i></li>
            <li><b>Phase 3:</b> Beat the T1 player. if successful, you will steal their title. <i>(first to 4)</i></li>
        </ul>
        <br>
        <br>
        <h3><b>Testing for T2:</b></h3>
        <br>
        <ul class="indented">
            <li><b>Phase 1:</b> Beat two T3 opponents. <i>(first to 4)</i></li>
            <li><b>Phase 2:</b> Achieve an equal or better overall score against two T2 players.
                You must get a minimum of 3 rounds on each opponent. <i>(first to 4)</i></li>
        </ul>
        <br>
        <br>
        <h3><b>Missing Opponents?</b></h3>
        <br>
        <ul class="indented">
            <li>Replace each missing opponent with 2 lower tiered opponents.</li>
            <li>If you are missing an opponent from your region, you will fight cross-regionally with ping equalization.</li>
            <li>"Equalized" Ping must be within 20ms and within the same tick-range. 
                A tick-range is 50ms, meaning a 99ms player vs. a 101ms player is not considered equalized.</li>
        </ul>
        <br>
        <br>
        <h3><b>Failed Tests</b></h3>
        <br>
        <ul class="indented">
            <li>Failing a Tier Test will result in a 30 day cooldown.</li>
            <li>Failing a T2 Tier Test to an opponent who ranks up within 4 days of your test 
                in a condition that you might have otherwise passed will result in the test being re-opened.</li>
            <ul class="indented">
                <li>For example, If you are testing for T2 and lose 3-4 to a T3 who passes T2, 
                    your test will be re-opened counting them as a T2 instead.
            </ul>
        </ul>
        <br>
        <br>
        <h3><b>Retirement & Peak Tiers</b></h3>
        <br>
        <p>Players T2 or higher will have to hold or defend their rank before their Peak Tier is applied to them.<br>
            Inactive players who choose to retire will be retired at their peak Tier on their profile.<br>
            Peak Tiers are a good way for players to retain their points after earning a rank.</p>
        <br>
        <p><u>Peak Tier Requirements:</u></p>
        <br>
        <ul class="indented">
            <li><b>T1:</b> 90 days without rank defenses or 2 rank defenses and 50 days holding the rank</li>
            <br>
            <li><b>T2:</b> 2 rank defenses and 50 days holding the rank</li>
            <br>
            <br>
            <li>Rank "Holding" is considered paused while unavailable to complete assigned fights</li>
        </ul>
        <br>
        <br>
        <p><u>Retirement Rules:</u><p>
        <br>
        <ul class="indented">
            <li>Retiring players must have 35d of inactivity from their own most recent Tier Test.</li>
            <li>It is advisable to carefully consider whether or not you wish to retire before contacting a staff member.</li>
            <ul class="indented">
                <li>Contacting a staff member to retire means you will automatically be retired 
                as soon as you meet the requirements (if not already).</li>
                <li>Contacting a staff member to retire will automatically initiate the retirement process, 
                which can only be cancelled in the first hour after the process is initiated; after this period, 
                it cannot be backtracked. To prevent abuse, you may only cancel a retirement once per retirement cycle, 
                with the counter being reset each unretirement.</li>
                <li>Being retired means being unable to return to competition for 3 months from your initial retirement.</li>
            </ul>
        </ul>
        <br>
        <br>
        <h3><b>Demotions:</b></h3>
        <br>
        <p><b>Demotions for T1:</b></p>
        <ul class="indented">
            <li>1 loss against a lesser Tier will result in a demotion.</li>
        </ul>
        <br>
        <p><b>Demotions for T2:</b></p>
        <ul class="indented">
            <li>2 losses to a lesser Tier will result in a demotion.</li>
            <li>2 significant losses to players in the same Tier will result in a demotion.</li>
        </ul>
        <br>
        <p><b>Any forfeit will result in instant demotion.</b></p>
        <br>
        <p><b><i>"Significant loss" refers to a score of less than half.</i></b></p>
        <br>
        <br>
        <h3><b><u>Kit Rules & Limits</u></b></h3>
        <br>
        <ul class="indented"; style="list-style-type: '-  ';">
            <li>8 Totems of Undying</li>
            <li>No Weakness Arrows</li>
            <li>No Beacons</li>
            <li>No Milk</li>
            <li>No Enchanted Golden Apples</li>
            <li>No Potions or arrows of the Turtle Master</li>
            <li>64 Respawn Anchors</li>
            <li>24 Firework Rockets</li>
            <li>4 Armor Pieces</li>
        </ul>
    `,

    UHC: `
        <h3><b>Testing for T1:</b></h3>
        <br>
        <ul class="indented">
            <li><b>Phase 1:</b> Beat two T3 opponents. Don't let anyone get more than 6 rounds on you. <i>(first to 10)</i></li>
            <li><b>Phase 2:</b> Beat two T2 opponents with at least a 20-14 overall score. <i>(first to 10)</i></li>
            <li><b>Phase 3:</b> Beat the T1 player. if successful, you will steal their title. <i>(first to 10)</i></li>
        </ul>
        <br>
        <br>
        <h3><b>Testing for T2:</b></h3>
        <br>
        <ul class="indented">
            <li><b>Phase 1:</b> Beat two T3 opponents with at least a 20-14 overall score. <i>(first to 10)</i></li>
            <li><b>Phase 2:</b> Achieve an equal or better overall score against two T2 players.
                You must get a minimum of 7 rounds on each opponent. <i>(first to 10)</i></li>
        </ul>
        <br>
        <br>
        <h3><b>Missing Opponents?</b></h3>
        <br>
        <ul class="indented">
            <li>Replace each missing opponent with 2 lower tiered opponents.</li>
            <li>If you are missing an opponent from your region, you will fight cross-regionally with ping equalization.</li>
            <li>"Equalized" Ping must be within 20ms and within the same tick-range. 
                A tick-range is 50ms, meaning a 99ms player vs. a 101ms player is not considered equalized.</li>
        </ul>
        <br>
        <br>
        <h3><b>Forfeit Regulations</b></h3>
        <br>
        <ul class="indented">
            <li>Any sort of Forfeit by the Tester will result in a Tier Demotion, no matter the phase of the test.</li>
            <li>In case the Testee forfeits, they will automatically fail their test, regardless on whether they had passing scores or not.</li>
            <li>You may discontinue your test before you have been assigned an opponent. 
                Discontinuing your test after your first opponent has been added with be counted as a forfeit.</li>
        </ul>
        <br>
        <br>
        <h3><b>Retirement & Peak Tiers</b></h3>
        <br>
        <p>Players T2 or higher will have to hold or defend their rank before their Peak Tier is applied to them.<br>
            Inactive players who choose to retire will be retired at their peak Tier on their profile.<br>
            Peak Tiers are a good way for players to retain their points after earning a rank.
        </p>
        <br>
        <br>
        <h3><b>T2 Peak Tier</b></h3>
        <br>
        <ul class="indented">
            <li>2 Rank Defenses + 30 Days of holding the rank OR 50+ Days of holding the rank.</li>
        </ul>
        <br>
        <br>
        <h3><b>T1 Peak Tier</b></h3>
        <br>
        <ul class="indented">
            <li>2 Rank Defenses + 30 Days of holding the rank OR 50+ Days of holding the rank.</li>
        </ul>
        <br>
        <br>
        <h3><b>Retirement Requirements:</b></h3>
        <br>
        <ul class="indented">
            <li>35 Day of inactivity from YOUR last tier test.</li>
            <li>Rank "Holding" is considered paused when unable to fight in assigned tests.</li>
            <li>Once you have retired, you must wait 60 days before returning back to competitive fights.</li>
        </ul>
        <br>
        <br>
        <h3><b>Demotions:</b></h3>
        <br>
        <p><b>Demotions for T1:</b></p>
        <ul class="indented">
            <li>1 loss against a lesser Tier will result in a demotion.</li>
        </ul>
        <br>
        <p><b>Demotions for T2:</b></p>
        <ul class="indented">
            <li>2 losses to a lesser Tier will result in a demotion.</li>
            <li>2 significant losses to players in the same Tier will result in a demotion.</li>
        </ul>
        <br>
        <br>
        <h2><b><u>The Official UHC Kit</u></b></h2>
        <br>
        <p>This kit must be used in all forms of tests.<br>
            <i>If the server does not have golden heads, it cannot be used to test on.</i></p>
        <br>
        <ul class="indented"; style="list-style-type: '-  ';">
            <li><b>Diamond Helmet</b> (Prot III)</li>
            <li><b>Diamond Chestplate</b> (Prot II)</li>
            <li><b>Diamond Leggings</b> (Prot II)</li>
            <li><b>Diamond Boots</b> (Prot III)</li>
            <li><b>Shield</b></li>
            <br>
            <li><b>4 Water Buckets</b></li>
            <li><b>2 Lava Buckets</b></li>
            <li><b>8 Cobwebs</b></li>
            <li><b>2 Stacks of Oak Planks</b></li>
            <li><b>Diamond Pickaxe</b> (Efficiency III)</li>
            <br>
            <li><b>Diamond Sword</b> (Sharpness III)</li>
            <li><b>Diamond Axe</b> (Efficiency 3)</li>
            <li><b>Bow</b> (Power I)</li>
            <li><b>Crossbow</b> (Piercing I)</li>
            <li><b>10 Arrows</b></li>
            <li><b>8 Golden Apples</b></li>
            <li><b>2 Golden Heads</b></li>
        </ul>
        <br>
        <p><u>Golden Heads Info</u><br>
            5s Regeneration III (4 Hearts)<br>
            2m Absorption I (2 Golden Hearts)<br>
            1s Eating Duration With a 10s Cooldown.<br>
        </p>
    `,

    Pot: `
        <h3><b>Testing for T1:</b></h3>
        <br>
        <ul class="indented">
            <li><b>Phase 1:</b> Beat two T3 opponents. Don't let anyone get more than 10 rounds on you. <i>(first to 15)</i></li>
            <li><b>Phase 2:</b> Beat two T2 opponents with at least a 30-22 overall score. <i>(first to 15)</i></li>
            <li><b>Phase 3:</b> Beat the T1 player. if successful, you will steal their title. <i>(first to 15)</i></li>
        </ul>
        <br>
        <br>
        <h3><b>Testing for T2:</b></h3>
        <br>
        <ul class="indented">
            <li><b>Phase 1:</b> Beat two T3 opponents with at least a 30-22 overall score. <i>(first to 15)</i></li>
            <li><b>Phase 2:</b> Achieve an equal or better overall score against two T2 players.
                You must get a minimum of 10 rounds on each opponent. <i>(first to 15)</i></li>
        </ul>
        <br>
        <br>
        <h3><b>Missing Opponents?</b></h3>
        <br>
        <ul class="indented">
            <li>Replace each missing opponent with 2 lower tiered opponents.</li>
            <li>If you are missing an opponent from your region, you will fight cross-regionally with ping equalization.</li>
            <li>"Equalized" Ping must be within 20ms and within the same tick-range. 
                A tick-range is 50ms, meaning a 99ms player vs. a 101ms player is not considered equalized.</li>
        </ul>
        <br>
        <br>
        <h3><b>Forfeit Regulations</b></h3>
        <br>
        <ul class="indented">
            <li>Any sort of Forfeit by the Tester will result in a Tier Demotion, no matter the phase of the test.</li>
            <li>In case the Testee forfeits, they will automatically fail their test, regardless on whether they had passing scores or not.</li>
            <li>You may discontinue your test before you have been assigned an opponent. 
                Discontinuing your test after your first opponent has been added with be counted as a forfeit.</li>
        </ul>
        <br>
        <br>
        <h3><b>Retirement & Peak Tiers</b></h3>
        <br>
        <p>Players T2 or higher will have to hold or defend their rank before their Peak Tier is applied to them.<br>
            Inactive players who choose to retire will be retired at their peak Tier on their profile.<br>
            Peak Tiers are a good way for players to retain their points after earning a rank.
        </p>
        <br>
        <p><u>Peak Tier Requirements:</u></p>
        <br>
        <p><b>T2</b></p>
        <ul class="indented">
            <li>2 Rank Defenses AND 50 Days of holding the rank.</li>
            <p>or</p>
            <li>90 Days of holding the rank</li>
        </ul>
        <br>
        <p><b>T1</b></p>
        <ul class="indented">
            <li>2 Rank Defenses AND 50 Days of holding the rank.</li>
            <p>or</p>
            <li>120 Days of holding the rank</li>
        </ul>
        <br>
        <p>Rank "Holding" is considered paused when unable to fight in assigned tests.<br>
            <br>
            <u>Retirement Requirements:</u>
        </p>
        <br>
        <ul class="indented">
            <li>35d of inactivity from last tier test.</li>
        </ul>
        <br>
        <br>
        <h3><b>Tier Demotions</b></h3>
        <br>
        <p><b>Demotions for T1:</b></p>
        <ul class="indented">
            <li>1 loss against a lesser Tier will result in a demotion.</li>
        </ul>
        <br>
        <p><b>Demotions for T2:</b></p>
        <ul class="indented">
            <li>2 losses to a lesser Tier will result in a demotion.</li>
            <li>2 significant losses to players in the same Tier will result in a demotion.</li>
        </ul>
        <br>
        <br>
        <h2><b><u>Pot PvP Kit</u></b></h2>
        <br>
        <ul class="indented"; style="list-style-type: '-  ';">
            <li>Sharpness V</li>
            <li>Protection IV + Unbreaking III</li>
            <li>Protection IV + Unbreaking III</li>
            <li>Protection IV + Unbreaking III</li>
            <li>Protection IV + Unbreaking III</li>
            <br>
            <li>5 Steak</li>
            <li>26 Instant Health II Potions</li>
            <li>3 sets of buffs (1:30 Strength II, 1:30 Speed II, 1:30 Regeneration I)</li>
        </ul>
    `,

    NethOP: `
        <h3><b>Testing for T1:</b></h3>
        <br>
        <ul class="indented">
            <li><b>Phase 1:</b> Beat two T3 opponents. <i>(first to 4)</i></li>
            <li><b>Phase 2:</b> Beat two T2 opponents. <i>(first to 4)</i></li>
            <li><b>Phase 3:</b> Beat the T1 player. if successful, you will steal their title. <i>(first to 4)</i></li>
        </ul>
        <br>
        <br>
        <h3><b>Testing for T2:</b></h3>
        <br>
        <ul class="indented">
            <li><b>Phase 1:</b> Beat two T3 opponents. <i>(first to 4)</i></li>
            <li><b>Phase 2:</b> Achieve an equal or better overall score against two T2 players.
                You must get a minimum of 3 rounds on each opponent. <i>(first to 4)</i></li>
        </ul>
        <br>
        <br>
        <h3><b>Missing Opponents?</b></h3>
        <br>
        <ul class="indented">
            <li>Replace each missing opponent with 2 lower tiered opponents.</li>
            <li>If you are missing an opponent from your region, you will fight cross-regionally with ping equalization.</li>
            <li>"Equalized" Ping must be within 20ms and within the same tick-range. 
                A tick-range is 50ms, meaning a 99ms player vs. a 101ms player is not considered equalized.</li>
        </ul>
        <br>
        <br>
        <h3><b>Failed Tests</b></h3>
        <br>
        <ul class="indented">
            <li>Failing a Tier Test will result in a 30 day cooldown.</li>
            <li>Failing a T2 Tier Test to an opponent who ranks up within 4 days of your test 
                in a condition that you might have otherwise passed will result in the test being re-opened.</li>
            <ul class="indented">
                <li>For example, If you are testing for T2 and lose 3-4 to a T3 who passes T2, 
                    your test will be re-opened counting them as a T2 instead.
            </ul>
        </ul>
        <br>
        <br>
        <h3><b>Retirement & Peak Tiers</b></h3>
        <br>
        <p><i>Players T2 or higher will have to defend their rank before their Peak Tier is applied to them.<br>
            Inactive players who choose to retire will be retired at their peak Tier on their profile.<br>
            Peak Tiers are a good way for players to retain their points after earning a rank.</i>
        </p>
        <br>
        <p><u>Peak Tier Requirements:</u></p>
        <br>
        <ul class="indented">
            <li>2 Rank Defenses OR 50+ Days of holding the rank.</li>
            <ul class="indented">
                <li>Rank "Holding" is considered paused when unable to fight in assigned tests.</li>
            </ul>
        </ul>
        <br>
        <p><u>Retirement Requirements:</u></p>
        <br>
        <ul class="indented">
            <li>35d of inactivity from last tier test.</li>
        </ul>
        <br>
        <br>
        <h3><b>Tier Demotions</b></h3>
        <br>
        <p><b>Demotions for T1:</b></p>
        <ul class="indented">
            <li>1 loss against a lesser Tier will result in a demotion.</li>
        </ul>
        <br>
        <p><b>Demotions for T2:</b></p>
        <ul class="indented">
            <li>2 losses to a lesser Tier will result in a demotion.</li>
            <li>2 significant losses to players in the same Tier will result in a demotion.</li>
        </ul>
    `,

    SMP: `
        <h3><b><u>Testing Kit</u></b></h3>
        <br>
        <ul class="indented"; style="list-style-type: '-  ';">
            <li>Full Netherite Armor (Protection 4, Unbreaking 3, Mending 
                [Boots MUST have Feather Falling 4, Leggings MUST have Swift Sneak 3])</li>
            <li>Netherite Sword (Sharpness 5, Fire Aspect 2, Sweeping Edge 3)</li>
            <li>Netherite Sword (Sharpness 5, Fire Aspect 2, Sweeping Edge 3, Knockback 1)</li>
            <li>Netherite Axe (Sharpness 5)</li>
            <li>1 Stack of Bottles O' Enchanting</li>
            <li>2 Stacks of Golden Apples</li>
            <li>2 Stacks of Ender Pearls</li>
            <li>Shield (Unbreaking 3, Mending)</li>
            <li>12 Strength II Potions</li>
            <li>12 Speed II Potions</li>
            <li>3 Fire Resistance Potions (8 Minute)</li>
            <li>1 Totem of Undying</li>
        </ul>
        <br>
        <br>
        <h3><b>Testing for T2</b></h3>
        <br>
        <ul class="indented">
            <li><b>Phase 1:</b> Beat two T3 opponents with at least an 8-4 overall score. <i>(first to 4)</i></li>
            <li><b>Phase 2:</b> Achieve an equal or better overall score against two T2 opponents. <i>(first to 4)</i></li>
        </ul>
        <br>
        <br>
        <h3><b>Testing for T1</b></h3>
        <br>
        <ul class="indented">
            <li><b>Phase 1:</b> Beat two T3 opponents with at least an 8-4 overall score. <i>(first to 4)</i></li>
            <li><b>Phase 2:</b> Beat two T2 opponents with at least a 8-6 overall score. <i>(fist to 4)</i></li>
            <li><b>Phase 3:</b> Beat the T1 player. If successful, you will steal their title. <i>(first to 4)</i></li>
        </ul>
        <br>
        <br>
        <h3><b>Tier Demotions</b></h3>
        <br>
        <p><b>Demotions for T1:</b></p>
        <ul class="indented">
            <li>1 loss against a lesser Tier will result in a demotion.</li>
        </ul>
        <br>
        <p><b>Demotions for T2:</b></p>
        <ul class="indented">
            <li>2 losses to a lesser Tier will result in a demotion.</li>
            <li>2 significant losses to players in the same Tier will result in a demotion.</li>
        </ul>
        <br>
        <br>
        <h3><b>Forfeit Regulations</b></h3>
        <br>
        <ul class="indented">
            <li>Any sort of Forfeit by the Tester will result in a Tier Demotion, no matter the phase of the test.</li>
            <li>In case the Testee forfeits, they will automatically fail their test, regardless on whether they had passing scores or not.</li>
            <li>You may discontinue your test before you have been assigned an opponent. 
                Discontinuing your test after your first opponent has been added with be counted as a forfeit.</li>
        </ul>
        <br>
        <br>
        <h3><b>Equal MS Ruleset</b></h3>
        <br>
        <p>All fights which require cross-region assignment will be done with the equal MS format.<br>
            The regulations for equal MS are as follows:
        </p>
        <br>
        <ul class="indented"; style="list-style-type: '-  ';">
            <li>Both players must be within the same tick range.</li>
            <li>One player must be within 15-20MS of the other.</li>
            <li>If the required delay for any player exceeds 199MS, the fight will not be done, 
                and an alternative solution will be mediated.</li>
        </ul>
        <br>
        <p>A Minecraft tick is 50MS. Because of this, "tick range" is defined as the barrier between different ticks. 
            For example:
        </p>
        <br>
        <ul class="indented">
            <li>0-49MS is tick range 1.</li>
            <li>50-99MS is tick range 2.</li>
            <li>100-149MS is tick range 3.</li>
            <li>150-199MS is tick range 4.</li>
        </ul
        <br>
        <br>
        <br>
        <h3><b>Retirement & Peak Tiers</b></h3>
        <br>
        <p>Players T2 or higher will have to defend their rank before their Peak Tier is applied to them.<br>
            Inactive players who choose to retire will be retired at their peak Tier on their profile.<br>
            Peak Tiers are a good way for players to retain their points after earning a rank.
        </p>
        <br>
        <br>
        <h3><b><u>T2 Peak Tier Requirements:</u></b></h3>
        <br>
        <ul class="indented">
            <li>2 Rank Defenses and 30+ Days of holding the rank</li>
        </ul>
        <br>
        <br>
        <h3><b><u>T1 Peak Tier Requirements:</u></b></h3>
        <br>
        <ul class="indented">
            <li>2 Rank Defenses OR 75+ Days of holding the rank</li>
        </ul>
        <br>
        <p>Rank "Holding" is considered paused when unable to fight in assigned tests.</p>
        <br>
        <br>
        <h3><b><u>Retirements</u></b></h3>
        <br>
        <ul class="indented">
            <li>Retiring players must have 35 days of inactivity from their most recent test.</li>
            <li>Upon retirement, the retiring player must wait 75 days before unretiring.</li>
        </ul>
    `,

    Sword: `
        <h3><b>Testing for T1:</b></h3>
        <br>
        <ul class="indented">
            <li><b>Phase 1:</b> Beat two T3 opponents. Don't let anyone get more than 6 rounds on you. <i>(first to 10)</i></li>
            <li><b>Phase 2:</b> Beat two T2 opponents with at least a 20-14 overall score. <i>(first to 10)</i></li>
            <li><b>Phase 3:</b> Beat the T1 player. if successful, you will steal their title. <i>(first to 20)</i></li>
        </ul>
        <br>
        <br>
        <h3><b>Testing for T2:</b></h3>
        <br>
        <ul class="indented">
            <li><b>Phase 1:</b> Beat two T3 opponents with at least a 20-14 overall score. <i>(first to 10)</i></li>
            <li><b>Phase 2:</b> Achieve an equal or better overall score against two T2 players.
                You must get a minimum of 7 rounds on each opponent. <i>(first to 10)</i></li>
        </ul>
        <br>
        <br>
        <h3><b>Missing opponents?</b></h3>
        <br>
        <ul class="indented">
            <li>Replace missing opponents with two lower tiered opponents per one missing opponent</li>
        </ul>
        <br>
        <br>
        <h3><b>Forfeits and Dodges</b></h3>
        <br>
        <p>Both <b>Forfeiting</b> and <b>Dodging</b> are highly discouraged. 
            Forfeiting, either not initiating a fight as a Testee/Tester or leaving mid-fight, counts as a loss towards all subsequent rounds. 
            Dodging, a form of forfeiting where a user fails to initiate a fight they were assigned to by a staff member without a valid excuse, leads a demotion. 
            If you are a T2 and you forfeit with a score worse than 7 rounds on your first opponent in your <b>own</b> test, a demotion to T3 will be initiated. 
            If it is not your test, <b>any forfeit</b> will result in a demotion. 
            <b>All testee forfeits</b> will also result in a 7 day testing cooldown.
        </p>
        <br>
        <br>
        <h3><b>Retirement & Peak Tiers</b></h3>
        <br>
        <p>Players T2 or higher will have to defend their rank before their Peak Tier is applied to them.<br>
            Inactive players who choose to retire will be retired at their peak Tier on their profile.<br>
            Peak Tiers are a good way for players to retain their points after earning a rank.<br>
            Players without a peak tier will typically be prioritized in match assignment.
        </p>
        <br>
        <br>
        <p><u>Peak Tier Requirements:</u></p>
        <br>
        <ul class="indented">
            <li>2 Rank Defenses OR 50+ Days of holding the rank.</li>
            <li>Rank "Holding" is considered paused when unable to fight in assigned tests.</li>
        </ul>
        <br>
        <br>
        <p><u>Retirement Requirements:</u></p>
        <br>
        <ul class="indented">
            <li>35d of inactivity from YOUR last tier test.</li>
        </ul>
    `,

    Axe: `
        <h3><b>Testing for T1:</b></h3>
        <br>
        <ul class="indented">
            <li><b>Phase 1:</b> Beat two T3 opponents with at least a 40-30 overall score. <i>(first to 20)</i></li>
            <li><b>Phase 2:</b> Beat two T2 opponents with at least a 40-30 overall score. <i>(first to 20)</i></li>
            <li><b>Phase 3:</b> Beat the T1 player. if successful, you will steal their title. <i>(first to 40)</i></li>
        </ul>
        <br>
        <br>
        <h3><b>Testing for T2:</b></h3>
        <br>
        <ul class="indented">
            <li><b>Phase 1:</b> Beat two T3 opponents with at least a 40-30 overall score. <i>(first to 20)</i></li>
            <li><b>Phase 2:</b> Achieve an equal or better overall score against two T2 players.
                You must get a minimum of 17 rounds on each opponent, 
                and your score must be within a true score of 4 (e.g. 17-20, 19-20). <i>(first to 20)</i></li>
        </ul>
        <br>
        <br>
        <h3><b>Missing opponents?</b></h3>
        <br>
        <ul class="indented">
            <li>If no players from the tier being tested are available, the participant's lowest-performance opponent 
            will serve as a replacement (2 replacements, drawn from a lower tier).</li>
        </ul>
        <br>
        <br>
        <h3><b>Tier Demotions</b></h3>
        <br>
        <p><b>Demotions for T1:</b></p>
        <ul class="indented">
            <li>1 loss against a lesser Tier will result in a demotion.</li>
        </ul>
        <br>
        <p><b>Demotions for T2:</b></p>
        <ul class="indented">
            <li>2 losses to a lesser Tier will result in a demotion.</li>
            <li>2 significant losses to players in the same Tier will result in a demotion.</li>
        </ul>
        <br>
        <p><b><u>Any forfeit when testing another player will result in instant demotion.</u></b></p>
        <br>
        <br>
        <h3><b>Retirement & Peak Tiers</b></h3>
        <br>
        <ul class="indented">
            <li>Players T2 or higher will have to defend their rank before their Peak Tier is applied to them.</li>
            <li>Inactive players who choose to retire will be retired at their peak Tier on their profile.</li>
            <li>Peak Tiers are a good way for players to retain their points after earning a rank.</li>
            <li>Players without a peak tier will typically be prioritized in match assignment.</li>
        </ul>
        <br>
        <br>
        <h3><b><u>T2 Peak Tier Requirements:</u></b></h3>
        <br>
        <ul class="indented">
            <li>2 Rank Defenses & 30+ Days of holding the rank OR 70+ Days of holding the rank</li>
        </ul>
        <br>
        <br>
        <h3><b><u>T1 Peak Tier Requirements:</u></b></h3>
        <br>
        <ul class="indented">
            <li>2 Rank Defenses OR 75+ Days of holding the rank</li>
        </ul>
        <br>
        <p>Rank "Holding" is considered paused when unable to fight in assigned tests.</p>
        <br>
        <br>
        <h3><b><u>Retirement Requirements:</u></b></h3>
        <br>
        <ul class="indented">
            <li>35 Days of inactivity from YOUR last tier test.</li>
        </ul>
        <br>
        <br>
        <br>
        <h2><b>Testing Kit</b></h2>
        <br>
        <ul class="indented"; style="list-style-type: '-  ';">
            <li>Diamond Helmet</li>
            <li>Diamond Chestplate</li>
            <li>Diamond Leggings</li>
            <li>Diamond Boots</li>
            <li>Diamond Axe</li>
            <li>Diamond Sword</li>
            <li>Crossbow</li>
            <li>Bow</li>
            <li>6 Arrows</li>
            <li>Shield</li>
        </ul>
    `,

    Mace: `
        <h3><b>Testing for T1:</b></h3>
        <br>
        <ul class="indented">
            <li><b>Phase 1:</b> Beat two T3 opponents and win 4-2 or better on each opponent. <i>(first to 4)</i></li>
            <li><b>Phase 2:</b> Beat two T2 opponents with at least a 8-5 overall score. <i>(first to 4)</i></li>
            <li><b>Phase 3:</b> Beat the T1 player. if successful, you will steal their title. <i>(first to 4)</i></li>
        </ul>
        <br>
        <br>
        <h3><b>Testing for T2:</b></h3>
        <br>
        <ul class="indented">
            <li><b>Phase 1:</b> Beat two T3 opponents with at least a 8-5 overall score. <i>(first to 4)</i></li>
            <li><b>Phase 2:</b> Achieve an equal or better overall score against two T2 players.
                You must get a minimum of 3 rounds on each opponent. <i>(first to 4)</i></li>
        </ul>
        <br>
        <br>
        <h3><b>Missing opponents?</b></h3>
        <br>
        <ul class="indented">
            <li>If no players from the tier being tested are available, the participant's lowest-performance opponent
                will serve as a replacement.</li>
        </ul>
        <br>
        <br>
        <h3><b>Tier Demotions</b></h3>
        <br>
        <p><b>Demotions for T1:</b></p>
        <ul class="indented">
            <li>1 loss against a lesser Tier will result in a demotion.</li>
        </ul>
        <br>
        <p><b>Demotions for T2:</b></p>
        <ul class="indented">
            <li>2 losses to a lesser Tier will result in a demotion.</li>
            <li>2 significant losses to players in the same Tier will result in a demotion.</li>
        </ul>
        <br>
        <br>
        <h3><b>Failed Tests</b></h3>
        <br>
        <p>Failing a Tier Test will result in a 30 day cooldown</p>
        <br>
        <br>
        <h3><b>Forfeit Rules:</b></h3>
        <br>
        <p>If your opponent forfeits while down 0-2, 1-2, 1-3 or 2-3 it'll result in you winning the fights.<br>
            If your opponent forfeits while up it'll result in the fights being invalidated.<br>
            If your opponent forfeits while the score is equal 0-0, 1-1, 2-2, 3-3 the fights will be invalidated.<br>
            If your opponent forfeits while the same or a lower tier then you it'll result in the fights being invalidated.<br>
            If they are a tier above you the 1-0 will carry over into the next player to fight.<br>
            <br>
            Any forfeit will result in instant demotion.
        </p>
        <br>
        <br>
        <h3><b>Retirement & Peak Tiers</b></h3>
        <br>
        <p>Players T2 or higher will have to defend their rank before their Peak Tier is applied to them.<br>
            Inactive players who choose to retire will be retired at their peak Tier on their profile.<br>
            Peak Tiers are a good way for players to retain their points after earning a rank.<br>
            Players without a peak tier will typically be prioritized in match assignment.
        </p>
        <br>
        <br>
        <h3><b><u>T2 Peak Tier Requirements:</u></b></h3>
        <br>
        <ul class="indented">
            <li>75+ Days of holding the rank, -20 days for every Rank Defense.</li>
        </ul>
        <br>
        <br>
        <h3><b><u>T1 Peak Tier Requirements:</u></b></h3>
        <br>
        <ul class="indented">
            <li>90+ Days of holding the rank, -30 days for every Rank Defense.</li>
        </ul>
        <br>
        <p>Rank "Holding" is considered paused when unable to fight in assigned tests.</p>
        <br>
        <br>
        <h3><b>Retirement Requirements:</b></h3>
        <br>
        <ul class="indented">
            <li>35 Days of inactivity from YOUR last tier test.</li>
        </ul>
    `
};