$("#button").on("click", function(){

    player = $('#playerName').val();


    $.ajax({
        url: '/findPlayer.php?playerName=' + player,
        method: 'GET'
    })
    .done(function(response){
        response = JSON.parse(response);
        console.log(response);

        if (response.error != "Player Not Found") {
            var number = 1;
            var Name = "Name" + number;
            var Killdeath = "Killdeath" + number;
            var KillsPerMin = "KillsPerMin" + number;
            var NumofWins = "NumofWins" + number;
            var WinPercent = "WinPercent" + number;
            var NumofGames = "NumofGames" + number;
            var TopThree = "TopThree" + number;
            var TopTwentyFiveS = "TopTwentyFiveS" + number;
            var TopFiveS = "TopFiveS" + number;
            var TopTwelveS = "TopTwelveS" + number;
            var TopThreeS = "TopThreeS" + number;
            var TopSix = "TopSix" + number;
            var AvgSurvivalTime = "AvgSurvivalTime" + number;
            var TotalTimePlayed = "TotalTimePlayed" + number;

            var td1 = "<td id=" + Name + ">" + response.epicUserHandle + "</td>";
            var td2 = "<td id = " + Killdeath + ">" + response.lifeTimeStats[11].value + "</td>";
            var td3 = "<td id = " + KillsPerMin + ">" + response.lifeTimeStats[12].value + "</td>";
            var td4 = "<td id = " + NumofWins + ">" + response.lifeTimeStats[8].value + "</td>";
            var td5 = "<td id = " + WinPercent + ">" + response.lifeTimeStats[9].value + "</td>";
            var td6 = "<td id = " + NumofGames + ">" + response.lifeTimeStats[7].value + "</td>";
            var td7 = "<td id = " + TopThree + ">" + response.lifeTimeStats[0].value + "</td>";
            var td8 = "<td id = " + TopTwentyFiveS+ "> " + response.lifeTimeStats[5].value + "</td>";
            var td9 = "<td id = " + TopFiveS + ">" + response.lifeTimeStats[1].value + "</td>";
            var td10 = "<td id = " + TopTwelveS + "> " + response.lifeTimeStats[4].value + "</td>";
            var td11 = "<td id = " + TopThreeS + ">" + response.lifeTimeStats[2].value + "</td>";
            var td12 = "<td id = " + TopSix + ">" + response.lifeTimeStats[3].value + "</td>";
            var td13 = "<td id = " + AvgSurvivalTime + ">" + response.lifeTimeStats[14].value + "</td>";
            var td14 = "<td id = " + TotalTimePlayed + ">" + response.lifeTimeStats[13].value + "</td>";

            var newEntries = (td1 + td2 + td3 + td4 + td5 + td6 + td7 + td8 + td9 + td10 + td11 + td12 + td13 + td14);
            var newTableRow1 = ("<tr>" + newEntries + "</tr>");

            $(".table").append(newTableRow1);
            var Nameid = "#" + Name;
            var Killdeathid = "#" + Killdeath;
            var KillsPerMinid = "#" + KillsPerMin;
            var NumofWinsid = "#" + NumofWins;
            var WinPercentid = "#" + WinPercent;
            var NumofGamesid = "#" + NumofGames;
            var TopThreeid = "#" + TopThree;
            var TopTwentyFiveSid = "#" + TopTwentyFiveS;
            var TopFiveSid = "#" + TopFiveS;
            var TopTwelveSid = "#" + TopTwelveS;
            var TopThreeSid = "#" + TopThreeS;
            var Topsixid = "#" + TopSix;
            var AvgSurvivalTimeid = "#" + AvgSurvivalTime;
            var TotalTimePlayedid = "#" + TotalTimePlayed;

            number++;
        } else if (response.error = "Player Not Found"){
            alert("Player Not Found")
        }

    });
});
