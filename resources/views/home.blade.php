@extends('layouts.app')

@section('content')
<div id="mypage"></div>
<!--
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="mb-4 border-bottom">
                <p class="font-weight-bold">あなたとシェアされている{{ env("KAKEIBO") }}</p>
            </div>
            <div id="account-form" class="mb-4"></div>
-->
            <!-- <form action="/account" method="POST">@csrf<div class="form-group"><label class="form-label" for="formAccoutName">家計簿に名前をつけましょう！</label><input placeholder="○○の家計簿" required="" type="text" id="formAccoutName" class="mb-2 form-control" name="name"><small class="text-muted form-text">家計簿は個人用だけでなく、複数人でシェアしながらご利用できます。<br>最大３つまで作成することができますので、区別できるように名前をつけてください。</small></div><button type="submit" class="btn btn-primary">作成</button></form> -->
<!--
            <div class="bg-light rounded p-4">
                <div id="account-deck"></div>
            </div>
        </div>
    </div>
</div>
-->
@endsection
